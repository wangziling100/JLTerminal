# JLTerminal

![Github Actions Status](https://github.com/wangziling100/JLTerminal/workflows/Build/badge.svg)

A terminal extension for Jupyterlab. An entry point is exposed and the code in it will be executed automatically.

## Entry point
The Entry point points to '/usr/scripts/entry_point.sh'. If there is no such a file or directory, you should create one and edit your bash code in it. The extension will run the script automatically.

## Run it
You can find the icon 'Run Script' on the launcher panel. 

## Requirements

* JupyterLab >= 2.0

## Install

```bash
jupyter labextension install JLTerminal
```

## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to JLTerminal directory

# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash

jupyter labextension uninstall JLTerminal
```
