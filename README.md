# Hook-ModalByContext

Created with CodeSandbox

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]()

## TABELA DE CONTEÚDOS

- [Highlights](#highlights)
- [Getting started](#getting-started)
- [How to use](#how-to-use)
- [Structure](#structure)
- [License](#license)

### Highlights

- best code that we can build

### Getting started

First of all, make sure you have the main dependencies:

- NodeJS (LTS) instalado globalmente;
- [Git](https://git-scm.com/downloads)
- [Linux](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)
- [Windows](https://nodejs.org/en/download/)

```bash
# Clone it into
$ git clone https://github.com/claytonSantos/Hook-ModalByContext.git

# Then, go to the project's folder:
$ cd directory

# Install your dependencies running:
$ npm install
```

### How to use

1- Provide the behavior

```bash
import DialogProvider from "./context";

<DialogProvider>
    <App />
</DialogProvider>
```

2 - Trigger the action to render the modal and provide the component for it.

```bash
import DialogProvider from "./context";

const { createDialog, removeDialog } = useDialog();

onClick={() =>
    createDialog({
        id: "umID",
        maxWidth: "sm",
        fullWidth: true,
        Component: (
            <MeuComponente handleClose={() => removeDialog("umId")} />
        )
    })
}
```

```
### Structure

If everything from the Getting Started section goes well, you should have this:

```

```
├── public
│	├── index.html
├── src
│	├── components
│	│   ├── modal
│	│
│	├── modalDefault
│	│
├── App.js
├── context.js
└── index.js
```
