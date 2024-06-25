// 通过 js 实现BEM规范
// block代码块 element元素 modifier装饰
// e.g. sy-button__icon--disabled
// state状态
// e.g. is-active
// :class=[bem.b('button')] => sy-button

let namespace = 'sy'; // 命名空间
const statePrefix = 'is-'; // 状态前缀
const _bem = (namespace: string, block: string, blockSuffix: string, element: string, modifier: string) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
function createBEM(block: string) {
  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '');
  const e = (element?: string) => (element ? _bem(namespace, block, '', element, '') : '');
  const m = (modifier?: string) => (modifier ? _bem(namespace, block, '', '', modifier) : '');
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element ? _bem(namespace, block, blockSuffix, element, '') : '';
  const em = (element?: string, modifier?: string) =>
    element && modifier ? _bem(namespace, block, '', element, modifier) : '';
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier ? _bem(namespace, block, blockSuffix, '', modifier) : '';
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : '';
  const is = (name: string, state: string) => (name && state ? `${statePrefix}${name}` : '');

  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  };
}
export function createNamespace(block: string, namespaceOverrides?: string) {
  namespace = namespaceOverrides ? namespaceOverrides : 'sy';
  return createBEM(block);
}
