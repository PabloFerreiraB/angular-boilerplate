<h1 align="center">Angular Boilerplate</h1>

<p align="center">
  <img src="https://img.icons8.com/ios-filled/150/000000/angularjs.png" alt="angular-logo" width="120px" height="120px"/>
  <br>
  <i>Angular starter for enterprise-grade front-end projects, built under a clean architecture 
    <br> that helps to scale and maintain a fast workflow.</i>
  <br>
</p>

<p align="center">
  <a href="https://angularboilerplate.vercel.app"><strong>https://angularboilerplate.vercel.app</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  ·
  <a href="https://github.com/juanmesa2097/angular-boilerplate/issues">Submit an Issue</a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://github.com/facebook/jest">
    <img src="https://jestjs.io/img/jest-badge.svg" alt="unit tests with Jest" />
  </a>&nbsp;
  <a href="https://github.com/juanmesa2097/angular-boilerplate/issues">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="Contributions welcome" />
  </a>
</p>

<hr>

## ⚗️ Features

- Strict mode.
- Lazy loading.
- Smart and pure components pattern.
- SCAM pattern.
- Self-contained components and encapsulated modules.
- Components types (e.g. component, page).
- Amazing directory structure.
- Unit tests with Jest instead of Karma & Jasmine.
- e2e tests with Cypress (removed in favor of the official [cypress schematic](https://github.com/cypress-io/cypress/tree/develop/npm/cypress-schematic) as an opt-in feature)
- PWA
- Dynamic titles and content meta tags.
- TailwindCSS + Autoprefixer + PurgeCSS setup.
- Dark mode and theme configuration.
- Scalable CSS architecture in favor of TailwindCSS layers.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) reports improved.
- Migration from TSLint to ESLint.
- Run unit tests & lint code on Git Hooks using [Husky](https://github.com/typicode/husky) & validate commit messages using [commitlint](https://github.com/conventional-changelog/commitlint)
- GitHub Actions workflows for code analysis and unit tests.

## 📄 Pages

```
Types of pages

public: everybody can see them
private: only logged in users can see them
```

- General
  - home
  - not-found


## 🧱 Self-contained components

- footer
- header
- layout

## 📡 Services

- SeoService
- ThemeService

## 📛 Custom directives

- click-outside (detects when the user clicks outside an element).

## 🧪 Custom pipes

- bytes (transforms a numeric value into bytes, KB, MB, GB, etc.).

## 🛠️ Make some initial tweaks

- Change application title:

  Go to `src/index.html` and inside the `title` tag, replace "Angular Boilerplate" with your app name.

- Change paths of the pages:

  Go to `src/app/core/utils/router.utils.ts` to find all the registered routes inside a config object.

  For example, you could replace `sign-in` with `SignIn`, `login` or `iniciar_sesion`

- Change titles, descriptions, and robots of the pages:

  Every page has a `.route` file that contains an exported constant that holds the title, description and a robot's metatag that indicates if it can be indexed or followed by a web crawler.

- Change your TailwindCSS configuration:

  You can find the config file in the project root, then you can refer to https://tailwindcss.com/docs/configuration to learn how to make your own adjustments.

- Set a default theme (First time load)

  Go to `src\app\@core\services\theme\theme.config.ts` and change the following line of code

  from operating system preference

  ```ts
  export const DEFAULT_BASE_THEME = ThemeList.System;
  ```

  to light mode

  ```ts
  export const DEFAULT_BASE_THEME = ThemeList.Light;
  ```

  or dark mode

  ```ts
  export const DEFAULT_BASE_THEME = ThemeList.Dark;
  ```

## 🗑️ Remove features

There are certain features that you may or may not like to have in your projects, and here's how to remove them:

### 🌠 Husky & commitlint

> Husky allows you to easily run scripts on Git Hooks & commitlint validates if a commit message follows a certain convention.

- Remove execution of tests and linting on pre-commit:

  - Go to `angular-boilerplate\.husky` and remove the npm scripts inside the `pre-commit` file or the file itself.

- Remove execution of build on pre-push:

  - Go to `angular-boilerplate\.husky` and remove the npm scripts inside the `pre-push` file or the file itself.

- Remove conventional commit messages validation:

  1. Go to `angular-boilerplate\.husky` and remove the command `npx commitlint --edit $1` inside the `commit-msg` file or the file itself.
  2. Remove the file `angular-boilerplate\.commitlintrc`.
  3. Run the following command:

  ```
  npm uninstall @commitlint/cli @commitlint/config-conventional
  ```

  OR

  ```
  yarn remove @commitlint/cli @commitlint/config-conventional
  ```

- Fully remove Husky & commitlint

  1. Remove the folder `angular-boilerplate\.husky`.
  2. Remove the file `angular-boilerplate\.commitlintrc`.
  3. Run the following commands:

  ```
  npm uninstall husky @commitlint/cli @commitlint/config-conventional
  ```

  OR

  ```
  yarn remove husky @commitlint/cli @commitlint/config-conventional
  ```

### 🌠 TailwindCSS

> TailwindCSS is a utility-first CSS Framework fully customizable & fully tree shakeable. If you want to replace it with another CSS framework or don't want to use a CSS framework at all, you can easily remove it from the project.

1. Remove `angular-boilerplate\tailwind.config.js` file.
2. Run the following command:

```
npm uninstall tailwindcss autoprefixer postcss
```

OR

```
yarn remove tailwindcss autoprefixer postcss
```

## ⛩️ Project structure

```console
├───app
│   ├───@core
│   │   ├───directives
│   │   │   └───click-outside
│   │   ├───guards
│   │   ├───interceptors
│   │   ├───pipes
│   │   │   └───bytes
│   │   ├───services
│   │   │   ├───seo
│   │   │   └───theme
│   │   └───utils
│   ├───@shell
│   │   ├───ft
│   │   └───ui (layout components)
│   │       ├───footer
│   │       ├───header
│   │       ├───layout
│   │       └───not-found
│   ├───components (generic shared components)
│   └───pages
│       ├───home
├───assets
├───environments
└───theme
    ├───01-base
    ├───02-components
    └───03-utilities
```

## 🧙‍♂️ Commands

| Command     | Description                                                    | NPM                 | Yarn             | Background command                                          |
| ----------- | -------------------------------------------------------------- | ------------------- | ---------------- | ----------------------------------------------------------- |
| ng          | See available commands                                         | npm run ng          | yarn ng          | ng                                                          |
| start       | Run your app in development mode                               | npm start           | yarn start       | ng serve                                                    |
| build       | Build your app for production                                  | npm run build       | yarn build       | ng build                                                    |
| build:stats | Build your app for production and generate a "stats.json" file | npm run build:stats | yarn build:stats | ng build --stats-json                                       |
| watch       | Run build when files change.                                   | npm run watch       | yarn watch       | ng build --watch --configuration development                |
| test        | Run your unit tests                                            | npm run test        | yarn test        | ng test                                                     |
| lint        | Use ESLint to lint your app                                    | npm run lint        | yarn lint        | ng lint                                                     |
| analyze     | Open webpack-bundle-analyzer                                   | npm run analyze     | yarn analyze     | webpack-bundle-analyzer dist/angular-boilerplate/stats.json |
