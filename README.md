# Vue3 Coding Standards

## Features

- Vue 3.3
- pnpm 8.6
- Vite 4.4
- **Fully typed** [pinia](https://pinia.vuejs.org/) store
  - [pinia-plugin-persistedstate](https://www.npmjs.com/package/pinia-plugin-persistedstate)
- Routing using [vue-router 4](https://router.vuejs.org/)
- TypeScript 5.0
- axios 1.4
- Tailwind CSS 3
- PostCSS 8 w/ `postcss-nesting` plugin
- [cssnano](https://cssnano.co/) for minimizing production CSS
- [postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem) generates rem units from pixel units
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- mock use [msw](https://mswjs.io/)
  - `npx msw init ./public`
- unit test use [jest](https://jestjs.io/)
  - [ts-jest](https://www.npmjs.com/package/ts-jest)
  - [babel-jest](https://www.npmjs.com/package/babel-jest)
  - [jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom)
  - [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
  - [@testing-library/vue](https://testing-library.com/docs/vue-testing-library/intro/)
  - [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/)
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
<!-- - Cypress.io e2e tests (configured similarly to `vue-cli`)
- Cypress.io component tests
- GitHub workflows
  - Dependabot
  - Automated e2e tests
  - Automated component tests
- GitLab CI
  - Automated e2e tests
  - Automated component tests  -->

## Project Files

```text
src/
├── __tests__/
│   ├── __mocks__/
│   │   └── server.ts
│   ├── e2e/*
│   └── unit/*
├── apis/*
├── assets/*
│   └── images/*
├── components/
│   ├── common/*
│   └── indexPage/
│       └── HelloWorld.vue
├── config/*
├── hooks/*
├── pages/
│   └── IndexPage.tsx
├── router/
│   └── index.ts
├── store/
│   ├── modules
│   │   └── config.ts
│   └── index.ts
├── styles/
│   ├── common/
|   │   ├── all.postcss
|   │   └── button.postcss
│   ├── index.postcss
│   └── tailwind.postcss
├── types/*
├── utils/*
├── App.vue
├── vite-env.d.ts
└── main.ts
```
