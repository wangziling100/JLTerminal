import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the JLTerminal extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'JLTerminal',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension JLTerminal is activated!');
  }
};

export default extension;
