<h1 align="center">Angular Boilerplate</h1>

<p align="center">
  <img src="https://img.icons8.com/ios-filled/150/000000/angularjs.png" alt="angular-logo" width="120px" height="120px"/>
  <br>
  <i>Angular starter for enterprise-grade front-end projects.</i>
  <br>
</p>

<p align="center">
  <a href="https://my-angular-boilerplate.vercel.app/"><strong>https://my-angular-boilerplate.vercel.app/</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  ยท
  <a href="https://github.com/PabloFerreiraB/angular-boilerplate/issues">Submit an Issue</a>
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

## โ๏ธ Features

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

## ๐ Pages

```
Types of pages

public: everybody can see them
private: only logged in users can see them
```

- General
  - home
  - not-found


## ๐งฑ Self-contained components

- footer
- header
- layout

## ๐ก Services

- SeoService
- ThemeService

## ๐ Custom directives

- click-outside (detects when the user clicks outside an element).

## ๐งช Custom pipes

- bytes (transforms a numeric value into bytes, KB, MB, GB, etc.).

## ๐?๏ธ Make some initial tweaks

- Change application title:

  Go to `src/index.html` and inside the `title` tag, replace "Angular Boilerplate" with your app name.

- Change paths of the pages:

  Go to `src/app/core/utils/router.utils.ts` to find all the registered routes inside a config object.

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

## ๐๏ธ Remove features

There are certain features that you may or may not like to have in your projects, and here's how to remove them:

### ๐? Husky & commitlint

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

### ๐? TailwindCSS

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

## โฉ๏ธ Project structure

```console
โโโโapp
โ   โโโโ@core
โ   โ   โโโโdirectives
โ   โ   โ   โโโโclick-outside
โ   โ   โโโโguards
โ   โ   โโโโinterceptors
โ   โ   โโโโpipes
โ   โ   โ   โโโโbytes
โ   โ   โโโโservices
โ   โ   โ   โโโโseo
โ   โ   โ   โโโโtheme
โ   โ   โโโโutils
โ   โโโโ@shared
โ   โ   โโโโui (layout components)
โ   โ       โโโโfooter
โ   โ       โโโโheader
โ   โ       โโโโlayout
โ   โ       โโโโnot-found
โ   โโโโcomponents (generic shared components)
โ   โโโโpages
โ       โโโโhome
โโโโassets
โโโโenvironments
โโโโtheme
    โโโโ01-base
    โโโโ02-components
    โโโโ03-utilities
```

## ๐งโโ๏ธ Commands

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
