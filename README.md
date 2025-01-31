[eslint-config-href]: https://npmjs.com/package/@k4i/eslint-config
[eslint-config-img]: https://img.shields.io/npm/v/%40k4i%2Feslint-config/latest.svg
[eslint-config-downloads]: https://img.shields.io/npm/dw/@k4i/eslint-config
[eslint-config-doc]: /packages/eslint-config/README.md

[prettier-config-href]: https://npmjs.com/package/@k4i/prettier-config
[prettier-config-img]: https://img.shields.io/npm/v/%40k4i%2Fprettier-config/latest.svg
[prettier-config-downloads]: https://img.shields.io/npm/dw/@k4i/prettier-config
[prettier-config-doc]: /packages/prettier-config/README.md

[renovate-config-href]: https://npmjs.com/package/@k4i/renovate-config
[renovate-config-img]: https://img.shields.io/github/package-json/v/k4i/shared-configs?filename=packages%2Frenovate-config%2Fpackage.json
[renovate-config-downloads]: /packages/renovate-config/src/index.json
[renovate-config-doc]: /packages/renovate-config/README.md


## Shared Configurations

### Available Packages

| **Package** | **Version** | **Downloads** | **Reference** |
| ----------- | ----------- | ------------- | ----------------- |
| [`@k4i/eslint-config`][eslint-config-href]     | ![Version][eslint-config-img]   | ![Downloads][eslint-config-downloads]   | [Docs][eslint-config-doc]   |
| [`@k4i/prettier-config`][prettier-config-href] | ![Version][prettier-config-img] | ![Downloads][prettier-config-downloads] | [Docs][prettier-config-doc] |
| [`@k4i/renovate-config`][renovate-config-href] | ![Version][renovate-config-img] | ![Downloads][renovate-config-downloads] | [Docs][renovate-config-doc] |

> [!NOTE]
> 📦 - Package  
> 📝 - Configuration file

---

## [`@k4i/prettier-config`][prettier-config-href]

### Installation

```bash
npm install --save-dev @k4i/prettier-config
pnpm install --save-dev @k4i/prettier-config
yarn add --dev @k4i/prettier-config
```

### Usage

```js
// .prettierrc.js
module.exports = {
  ...require('@k4i/prettier-config'),
};
```

```js
// prettier.config.js
import prettierConfig from "@k4i/prettier-config";

export default {
  ...prettierConfig,
};
```

```json
{
  "extends": "@k4i/prettier-config"
}
```

### Rules

<!--START_SECTION:prettier-->
| Rule                 | Value    | Reference                                                              |
| -------------------- | -------- | ---------------------------------------------------------------------- |
| `printWidth`         | `80`     | [Docs](https://prettier.io/docs/en/options.html#print-width)           |
| `singleQuote`        | `true`   | [Docs](https://prettier.io/docs/en/options.html#single-quote)          |
| `trailingComma`      | `es5`    | [Docs](https://prettier.io/docs/en/options.html#trailing-comma)        |
| `semi`               | `true`   | [Docs](https://prettier.io/docs/en/options.html#semi)                  |
| `tabWidth`           | `2`      | [Docs](https://prettier.io/docs/en/options.html#tab-width)             |
| `useTabs`            | `false`  | [Docs](https://prettier.io/docs/en/options.html#use-tabs)              |
| `arrowParens`        | `always` | [Docs](https://prettier.io/docs/en/options.html#arrow-parens)          |
| `bracketSpacing`     | `true`   | [Docs](https://prettier.io/docs/en/options.html#bracket-spacing)       |
| `jsxSingleQuote`     | `false`  | [Docs](https://prettier.io/docs/en/options.html#jsx-single-quote)      |
| `endOfLine`          | `lf`     | [Docs](https://prettier.io/docs/en/options.html#end-of-line)           |
| `jsxBracketSameLine` | `false`  | [Docs](https://prettier.io/docs/en/options.html#jsx-bracket-same-line) |
| `objectCurlySpacing` | `true`   | [Docs](https://prettier.io/docs/en/options.html#object-curly-spacing)  |
| `commentSpace`       | `true`   | [Docs](https://prettier.io/docs/en/options.html#comment-space)         |
| `proseWrap`          | `never`  | [Docs](https://prettier.io/docs/en/options.html#prose-wrap)            |
<!--END_SECTION:prettier-->

---

## [`@k4i/eslint-config`][eslint-config-href]

### Installation

```bash
npm install --save-dev @k4i/eslint-config
pnpm install --save-dev @k4i/eslint-config
yarn add --dev @k4i/eslint-config
```

### Usage

This package includes multiple ESLint configurations. You can import the configuration you need.

#### Basic Configuration

```js
// eslint.config.js
import eslintConfig from "@k4i/eslint-config";

export default [
  ...eslintConfig.base
];
```

#### Prettier Configuration

```js
// eslint.config.js
import eslintConfig from "@k4i/eslint-config";

export default [
  /* Other configurations */
  ...eslintConfig.prettier
];
```

#### Node.js Configuration

```js
// eslint.config.js
import eslintConfig from "@k4i/eslint-config";

export default [
  ...eslintConfig.node
];
```

#### TypeScript Configuration

```js
// eslint.config.js
import eslintConfig from "@k4i/eslint-config";

export default [
  ...eslintConfig.typescript
];
```

#### React Configuration

```js
// eslint.config.js
import eslintConfig from "@k4i/eslint-config";

export default [
  ...eslintConfig.react
];
```

#### Next.js Configuration

```js
// eslint.config.js
import eslintConfig from "@k4i/eslint-config";

export default [
  ...eslintConfig.next
];
```

#### Tailwind CSS Configuration

```js
// eslint.config.js
import eslintConfig from "@k4i/eslint-config";

export default [
  ...eslintConfig.tailwindcss
];
```

#### Astro Configuration

```js
// eslint.config.js
import eslintConfig from "@k4i/eslint-config";

export default [
  ...eslintConfig.astro
];
```

#### Chaining Configurations

```js
// eslint.config.js
import eslintConfig from "@k4i/eslint-config";

export default [
  ...eslintConfig.base,
  ...eslintConfig.typescript,
  ...eslintConfig.react
];
```

---

## [`@k4i/renovate-config`][renovate-config-href]

> This is a configuration, not a package.

### Usage

In your `renovate.json`, add the following:

```json
{
  "extends": ["github>k4i/shared-configs//packages/renovate-config/index.json"]
}
```