# Vue3 Coding Standards

## Features

- Vue 3.3.4
- pnpm 8.6.5
- Vite 4.4.0
- **Fully typed** [pinia](https://pinia.vuejs.org/) store
  - [pinia-plugin-persistedstate](https://www.npmjs.com/package/pinia-plugin-persistedstate)
- Routing using [vue-router 4](https://router.vuejs.org/)
- TypeScript 5.0
- axios 1.4.0
- Tailwind CSS 3 w/ following plugins preinstalled:
  <!-- - `@tailwindcss/aspect-ratio`
  - `@tailwindcss/line-clamp`
  - `@tailwindcss/typography`
  - `@tailwindcss/forms`
  - `firefox`-variant -->
- PostCSS 8 w/ `postcss-nesting` plugin
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- [cssnano](https://cssnano.co/) for minimizing production CSS
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
