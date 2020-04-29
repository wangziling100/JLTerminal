import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';


/**
 * Initialization data for the JLTerminal extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'JLTerminal',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension JLTerminal is activated!');
    console.log('ICommandPalette:', palette);
  }
};

export default extension;
