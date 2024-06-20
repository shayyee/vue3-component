import { withInstall } from "@syui/utils";

import Icon from "./src/icon.vue";

export const SYIcon = withInstall(Icon);
export default SYIcon; // 可以通过app.use(SYIcon)使用，也可以通过import SYIcon from '@syui/icon'使用

export * from "./src/icon";

