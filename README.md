# cra-template-complete-web-app

CRA template with: typescript, axios, sass, react-router, redux and much more already configured.

> [!IMPORTANT]
> Create React App is ([unofficially](https://github.com/facebook/create-react-app/issues/13393)) becoming an unsupported tool, for this reason i've created a [new template](https://github.com/ChrisUser/vite-complete-react-app) using Vite with the same features as this one.\
> I will continue to support this template for as long as possible but I strongly suggest you to switch to the newer one.

<div align="center">
    <h1>✨ Now supports React 19 and React Router 7 ✨</h1>
</div>

## ⚗️ Technologies list

- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Moment](https://momentjs.com/)
- [ESlint](https://eslint.org/) & [Prettier](https://prettier.io/)

<br />

# 🚀 Start using it

To use this template for your app you can run:

```sh
npx create-react-app my-app --template complete-web-app
```

or

```sh
yarn create react-app my-app --template complete-web-app
```

The `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

# ⚠️ Warning

Cloning this repo pulls down the template only, not a bundled and configured Create React App.

<br />

# 🧬 Template structure

This is the structure of the files in the template:

```sh
    │
    ├── public                  # public files (favicon, .htaccess, manifest, ...)
    ├── src                     # source files
    │   ├── components
    │   ├── pages
    │   ├── resources           # images, constants and other static resources
    │   ├── store               # Redux store
    │   │   ├── actions         # store's actions
    │   │   └── reducers        # store's reducers
    │   ├── styles
    │   ├── tests               # all test files
    │   ├── types               # data interfaces
    │   ├── utility             # utilities functions and custom components
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   ├── RootComponent.tsx   # React component with all the routes
    │   ├── serviceWorker.ts
    │   └── setupTests.ts
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

<br />

# 📖 Learn More

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).\
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
