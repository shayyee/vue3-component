module.exports = {
    semi: true, // 句尾加 ;
    trailingComma: 'es5', // 行尾可以加有效的,
    useTabs: false, // 不使用tab
    tabWidth: 2, // 使用4个空格代替tab
    printWidth: 120, // 每行120字符，超过则换行
    singleQuote: true, // 使用 '' 作为字符串
    jsxSingleQuote: false,
    quoteProps: 'as-needed', // 只在必要时为对象的 key 添加引号
    jsxBracketSameLine: true, // 多行 html 最后的 > 不换行
    bracketSameLine: true, // 多行 html 最后的 > 不换行
    bracketSpacing: true, // Print spaces between brackets in object literals.
    arrowParens: 'always', // 强制 (name) => {}
    singleAttributePerLine: false, // 不要求一个属性一行
};
