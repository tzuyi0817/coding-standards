# Vue3 Coding Standards

This project is built with [vue3](https://vuejs.org/) + [vite](https://vite.dev/), using [pnpm](https://pnpm.io/) for package management and [pinia](https://pinia.vuejs.org/) for state management.

## Features

- **Development Experience**: Written in [typeScript](https://www.typescriptlang.org/), styled with [tailwindcss](https://tailwindcss.com/), and structured with [vue-router](https://router.vuejs.org/), and [vue-i18n](https://vue-i18n.intlify.dev/). Supports SVGs ([vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons)).
- **API & Mocking**: Handles requests with [axios](https://axios-http.com/docs/intro) and mocks APIs using [msw](https://mswjs.io/).
- **Code Quality**: Enforces standards with [eslint](https://eslint.org/) and [prettier](https://prettier.io/), with [husky](https://www.npmjs.com/package/husky), [commitlint](https://commitlint.js.org/#/), and [lint-staged](https://github.com/okonet/lint-staged) for commit validation.
- **Testing**: Uses [vitest](https://vitest.dev/) + [testing-library](https://testing-library.com/) for unit testing and [playwright](https://playwright.dev/) for E2E testing.
- **Optimization**: Compresses CSS with [cssnano](https://cssnano.github.io/cssnano/) , converts units with [postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem), and analyzes assets with [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer).
- **CI/CD**: Integrates `GitHub Actions` and `GitLab CI` for automated testing and deployment.

## Code Features / Opinions

- Project root aliased as `@` to `<project_root>/src`
- Store persistedstate use [pinia-plugin-persistedstate](https://www.npmjs.com/package/pinia-plugin-persistedstate)
- ESlint plugin use [@component-hook/eslint-plugin](https://www.npmjs.com/package/@component-hook/eslint-plugin?activeTab=readme)
- if encounter npx: command not found, can execute `ln -s $(which npx) /usr/local/bin/npx` in zsh
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
  - `VITE_APP_MOCK` is use mock environment

## Project Files

```text
src/
├── __tests__/
│   ├── __mocks__/
│   ├── setup/
│   │   └── unitTest.ts
│   ├── e2e/*
│   └── unit/*
├── apis/*
├── assets/*
│   └── images/
│       └── svg-icons
│          └── vue.svg
├── components/
│   └── svg-icon/
│       ├── src
│       │   └── index.vue
│       └── index.ts
├── constants/*
├── hooks/*
├── locales/
│   ├── en-US.json
│   └── zh-CN.json
├── mocks/
│   ├── handlers/*
│   │   ├── apis/*
│   │   └── index.ts
│   │── browser.ts
│   └── server.ts
├── pages/
│   └── home/
│       ├── components
│       │   └── HelloWorld.vue
│       └── index.vue
├── plugins/
│   └── i18n.ts
├── router/
│   └── index.ts
├── stores/
│   ├── modules
│   │   └── config.ts
│   └── index.ts
├── styles/
│   ├── common/
|   │   ├── all.css
|   │   └── button.css
│   ├── base.css
│   ├── index.css
│   └── tailwind.css
├── types/*
├── utils/*
├── App.vue
├── vite-env.d.ts
└── main.ts
```
