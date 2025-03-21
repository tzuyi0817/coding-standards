# Vue3 Coding Standards

## Features

- Vue
- Pnpm
- Vite
- [Pinia](https://pinia.vuejs.org/) store
  - [pinia-plugin-persistedstate](https://www.npmjs.com/package/pinia-plugin-persistedstate)
- Routing using [vue-router](https://router.vuejs.org/)
- TypeScript
- Axios
- Tailwind CSS
- Vue-i18n
- PostCSS w/ `postcss-nesting` plugin
- [Cssnano](https://cssnano.github.io/cssnano/) for minimizing production CSS
- [Postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem) generates rem units from pixel units
- [Vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) generate svg sprite map
- [Unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) auto importing for common components
- Eslint
  - [@component-hook/eslint-plugin](https://www.npmjs.com/package/@component-hook/eslint-plugin?activeTab=readme)
- Prettier
- [Husky](https://www.npmjs.com/package/husky) to improves commits
  - if encounter npx: command not found, can execute `ln -s $(which npx) /usr/local/bin/npx` in zsh
  - [commitlint](https://commitlint.js.org/#/) checks if your commit messages meet the conventional commit format
  - [lint-staged](https://github.com/okonet/lint-staged) filter files checked by pre commit lint
- Alias `@` to `<project_root>/src`
- Mock use [msw](https://mswjs.io/)
  - `npx msw init ./public`
- Unit test use [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
  - [jsdom](https://www.npmjs.com/package/jsdom)
  - [@vitest/coverage-v8](https://vitest.dev/guide/coverage.html)
  - [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
  - [@testing-library/vue](https://testing-library.com/docs/vue-testing-library/intro/)
  - [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/)
- E2E test use [playwright](https://playwright.dev/)
- [Rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) visualize and analyze your Rollup bundle to see which modules are taking up space
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
- Github workflows
  - ci - on workflow call and dispatch
  - deploy - on push main branch
  - preview - on pull request
- Gitlab CI
  - run tests - on branches, merge request and manual

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
│   └── tailwindcss.css
├── types/*
├── utils/*
├── App.vue
├── vite-env.d.ts
└── main.ts
```
