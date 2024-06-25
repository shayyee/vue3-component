import '@vue/runtime-core';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SYIcon: typeof import('@syui/components').SYIcon;
  }
}
