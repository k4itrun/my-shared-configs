# Prettier config

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
| `printWidth`         | `120`    | [Docs](https://prettier.io/docs/en/options.html#print-width)           |
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