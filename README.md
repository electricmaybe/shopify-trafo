# ⚡️ Shopify Trafo
Shopify development kit with new Shopify CLI released on [2021 Shopify Unite](https://unite.shopify.com).

Uses [Shopify Cli](https://github.com/Shopify/shopify-cli), [Tailwindcss](https://github.com/tailwindlabs/tailwindcss), [PostCSS](https://github.com/postcss/postcss) and [Webpack](https://github.com/webpack/webpack). Uses [Concurrently](https://github.com/kimmobrunfeldt/concurrently) to run watchers in parallel.

> The project is still work in progress.
>
> We'd love to hear your feedback, ideas and critiques.
>
> Please feel free to send us an Issue. 

## Features
- Uses native Shopify CLI
- Can be used with Github Integration on Shopify
- Asset pipeline via webpack and Tailwind CLI*—jit mode enabled*.
- Imports CSS and JS as wildcard, add/remove components without importing
- CSS nesting enabled via PostCSS
- Lints Shopify, CSS and JS
- Easily integrate any theme
- Easy to monitor grid view on terminal

## Roadmap
- [X] Update Readme for codebase structure explanation
- [X] Update Readme for installation and usage
- [X] Migrate Concurrently Grid
- [X] Migrate Webpack
- [X] Migrate Tailwind CLI
- [X] Migrate Shopify CLI
- [X] Migrate Shopify Online Store 2.0

## Installation
### 1. Install [Shopify CLI](https://github.com/Shopify/shopify-cli)
- Make sure you have [Homebrew](https://brew.sh/) installed
- Open your terminal app
- Run `brew tap shopify/shopify`
- Run `brew install shopify-cli`
- After the installation is completed, run `shopify version`, if this outputs a version number you've successfully installed the CLI.

### 2. Authenticate Shopify CLI
Make sure you have activated your Staff account for your store `<store-name>.myshopify.com`.

After you install Shopify CLI, you need to authenticate your CLI instance and connect to the store that you want to work on.

Run:

```shell
$ shopify login --store=<store-name>.myshopify.com
```

When prompted, open the provided accounts.shopify.com URL in a browser. In your browser window, log into the account that's attached to the store that you want to use for development.

### 3. Clone this theme repo and install dependencies
Clone this repo to your computer.

Install dependencies:
```shell
$ yarn install
```

## Usage
### Add theme files
You can download (Shopify Dawn) or setup your own theme.

See `sections` and `snippets` folders for example usage of .liquid, .css, .js together.

### Start environment in development mode
```shell
$ yarn dev
```

### Start environment in production mode (minified)
```shell
$ yarn production
```

### Build once in development mode
```shell
$ yarn build:dev
```

### Build once in production mode
```shell
$ yarn build:production
```

### Disabling grid view
In `package.json` file, remove `--grid` flags from `scripts -> dev` and `scripts -> production`.

### Working on local server
Shopify CLI comes with a local theme server which lets you preview your changes live on your local machine.

After you start in development or production mode, Shopify CLI uploads the theme as a development theme on the store that you're connected to, and gives you an IP address and port to preview changes in real time using the store's data.

The server includes hot reload for CSS & Sections. *—works only on Google Chrome.*

### Linting
To lint shopify in terminal:
```shell
$ yarn lint:shopify
```
To lint javascript in terminal:
```shell
$ yarn lint:js
```
To lint css in terminal:
```shell
$ yarn lint:css
```

### Command line structure


## Project Structure

Folders without `_` or `.` as prefix are the Shopify theme directories.

**Webpack**
- auto imports js files from `./_scripts`, `./sections` and `./snippets`
- for the .js files you want to keep separate, add them directly to `./assets`

Entry point:
````
_scripts/main.js
````
Output:
````
assets/index.js
````

**Tailwind CSS**
- auto purges unused classes
- auto imports scss files from `./_styles`, `./sections` and `./snippets`
- for the .css files you want to keep separate, add them directly to `./assets`

Entry point:
````
_styles/main.css
````
Output:
````
assets/style.css
````

**File Structure**
```text
shopify-trafo/                 📁 root of your Shopify Theme Kit project
├── .config/                   📁 development environment files and configs
│   ├── webpack/               📁 webpack configs
│   │   ├── webpack.common.js  📄 webpack shared config used in development and production
│   │   ├── webpack.dev.js     📄 webpack development config
│   │   └── webpack.prod.js    📄 webpack production config
│   ├── .browserslistrc        📄 Browserslist config
│   ├── .eslintrc.js           📄 ESLint config
│   └── .stylelintrc.js        📄 stylelint config
├── .github/                   📁 files related to GitHub and images for READMEs
├── _scripts/                  📁 source js files to be processed by webpack
│   ├── main.js                📁 webpack's main entry point
│   └── ...
├── _styles/                   📁 source css files to be processed by Tailwind CSS
│   ├── main.css               📁 Tailwind's main entry point
│   └── ...
├── assets/                    📁 image, font, CSS, and JavaScript files.
├── config/                    📁 theme settings schema and data
├── layout/                    📁 layout files, through which template files are rendered
├── locales/                   📁 translated content
├── sections/                  📁 reusable modules of content that merchants can customize
├── snippets/                  📁 liquid files that host smaller reusable snippets of code
├── templates/                 📁 template files, which control what's rendered on each type of page.
├── .gitignore                 📄 files and directories ignored by git
├── .shopifyignore             📄 files and directories ignored by Shopify
├── package.json               📄 dependencies and tasks
├── postcss.config.js          📄 PostCSS config
├── tailwind.config.js         📄 Tailwind CSS config
└── ...
```