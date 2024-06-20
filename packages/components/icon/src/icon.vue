<template>
    <i :class="bem.b()" :style="style">
        <slot></slot>
    </i>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { createNamespace } from '@syui/utils/create'
import { iconProps } from './icon'
import { addUnit } from '@syui/utils';

defineOptions({
  name: 'SYIcon',
  inheritAttrs: false,
})

const bem = createNamespace('icon');

const props = defineProps(iconProps);

// 计算属性来计算一个样式
const style = computed(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: addUnit(size),
    color
  }
})
</script>