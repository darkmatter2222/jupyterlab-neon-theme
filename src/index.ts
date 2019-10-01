import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for @yeebc/jupyterlab_neon_theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@yeebc/jupyterlab_neon_theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@yeebc/jupyterlab_neon_theme/index.css';

    manager.register({
      name: 'JupyterLab Neon Night',
      isLight: false,
      themeScrollbars: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;