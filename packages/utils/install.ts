import { Plugin } from 'vue';

export type SFCWithInstall<T extends {name: string}> = T & Plugin;

export function withInstall<T extends {name: string}>(component: T){  
    ;(component as SFCWithInstall<T>).install = (app): void => {
        app.component(component.name, component);
    };
    return component as SFCWithInstall<T>;
}