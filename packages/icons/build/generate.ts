import path from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import { emptyDir, ensureDir } from 'fs-extra'
import consola from 'consola'
import camelcase from 'camelcase'
import glob from 'fast-glob'
import { type BuiltInParserName, format } from 'prettier'
import chalk from 'chalk'
import { pathComponents, pathSvg } from './paths'

consola.info(chalk.blue('generating vue components'))
await ensureDir(pathComponents)
await emptyDir(pathComponents)

const files = await glob('*.svg', { cwd: pathSvg, absolute: true })

consola.info(chalk.blue('generating vue files'))
await Promise.all(files.map((file) => transformToVueComponent(file)))

consola.info(chalk.blue('generating entry file'))
await generateEntry(files)

function getName(file: string) {
  const filename = path.basename(file).replace('.svg', '')
  const componentName = camelcase(filename, { pascalCase: true })
  return {
    filename,
    componentName,
  }
}

function formatCode(code: string, parser: BuiltInParserName = 'typescript') {
  return format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })
}

async function transformToVueComponent(file: string) {
  const content = await readFile(file, 'utf-8')
  const { filename, componentName } = getName(file)
  const vue = await formatCode(
    `
<template>
${content}
</template>
<script lang="ts" setup>
defineOptions({
  name: ${JSON.stringify(componentName)}
})
</script>`,
    'vue',
  )
  writeFile(path.resolve(pathComponents, `${filename}.vue`), vue, 'utf-8')
}

async function generateEntry(files: string[]) {
  const code = await formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getName(file)
        return `export { default as ${componentName} } from './${filename}.vue'`
      })
      .join('\n'),
  )
  await writeFile(path.resolve(pathComponents, 'index.ts'), code, 'utf-8')
}
