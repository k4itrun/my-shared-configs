# ESLint config

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
