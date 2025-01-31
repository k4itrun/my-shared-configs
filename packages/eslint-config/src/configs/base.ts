import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import type { Linter } from "eslint";
import gitignore from "eslint-config-flat-gitignore";
import importPluginX from "eslint-plugin-import-x";
import globals from "globals";

export default [
  gitignore({
    name: "@k4i/eslint-config/gitignore",
  }),
  {
    name: "@k4i/eslint-config/base",
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.mjs"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.es2021,
        ...globals.es2025,
        ...globals.commonjs,
        ...globals.node,
        ...globals.nodeBuiltin,
      },
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Prevent isolated 'if' statements
      "no-lonely-if": "error",

      // Block the use of the Object constructor without arguments
      "no-object-constructor": "error",

      // Prevent variable usage before definition
      "no-use-before-define": [
        "error",
        { functions: true, classes: true, variables: true },
      ],

      // Avoid using 'var' for variable declaration
      "no-label-var": "error",

      // Ensure undeclared variables are handled via /*global */ comments
      "no-undef": "error",

      // Restrict cyclomatic complexity to improve code maintainability
      complexity: ["warn", 50],

      // Warn against usage of 'alert', 'confirm', and 'prompt'
      "no-alert": "warn",

      // Ensure async functions contain 'await' when necessary
      "require-await": "error",

      // Prefer object spread over Object.assign with object literals
      "prefer-object-spread": "error",

      // Enforce destructuring assignments from arrays/objects
      "prefer-destructuring": "error",

      // Enforce return statements within array method callbacks
      "array-callback-return": "error",

      // Block Yoda conditions for clarity
      yoda: "error",

      // Avoid empty statements to improve readability
      "no-empty": "error",

      // Ensure 'typeof' results are validated against valid strings
      "valid-typeof": ["error", { requireStringLiterals: true }],

      // Disable the inclusion of BOM (Byte Order Mark)
      "unicode-bom": ["error", "never"],

      // Block the use of eval() for security reasons
      "no-eval": "error",

      // Allow function names to be optional, especially anonymous functions
      "func-names": ["error", "as-needed"],

      // Enforce camelCase except for destructured objects
      camelcase: ["warn", { properties: "never", ignoreDestructuring: true }],

      // Warn about unused variables, except those starting with "_"
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      // Require 'const' for variables that are not reassigned
      "prefer-const": "error",

      // Enforce the use of shorthand for object properties
      "object-shorthand": ["error", "always"],
    },
  },
  {
    name: "@k4i/eslint-config/base/import",
    plugins: {
      "import-x": importPluginX,
    },
    rules: {
      // Enforce consistent import sorting and grouping
      "import-x/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    name: "@k4i/eslint-config/base/stylistic",
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // Ensure Unix line breaks for consistency
      "@stylistic/linebreak-style": ["error", "unix"],

      // Use double quotes for strings to maintain consistency
      "@stylistic/quotes": ["error", "double"],

      // Ensure semicolons are used at the end of statements
      "@stylistic/semi": ["warn", "always"],

      // Require trailing commas in specific cases for clarity
      "@stylistic/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "never",
        },
      ],

      // Maintain consistent spacing around blocks
      "@stylistic/block-spacing": "error",

      // Enforce consistent spacing around commas
      "@stylistic/comma-spacing": "error",

      // Standardize spacing around keywords
      "@stylistic/keyword-spacing": "error",

      // Ensure consistent spacing around operators
      "@stylistic/space-infix-ops": "error",

      // Maintain consistent spacing for unary operators
      "@stylistic/space-unary-ops": "error",

      // Enforce a consistent brace style for blocks
      "@stylistic/brace-style": "error",

      // Ensure consistent spacing inside braces
      "@stylistic/object-curly-spacing": ["error", "always"],

      // Standardize spacing before function parentheses
      "@stylistic/space-before-function-paren": [
        "error",
        {
          anonymous: "never",
          named: "never",
          asyncArrow: "always",
        },
      ],

      // Maintain consistent spacing inside parentheses
      "@stylistic/space-in-parens": ["error", "never"],

      // Ensure consistent spacing within array brackets
      "@stylistic/array-bracket-spacing": ["error", "never"],

      // Standardize spacing inside template literals
      "@stylistic/template-curly-spacing": ["error", "never"],

      // Enforce consistent spacing inside computed properties
      "@stylistic/computed-property-spacing": ["error", "never"],

      // Require quotes around object properties where necessary
      "@stylistic/quote-props": ["error", "as-needed"],

      // Block unnecessary semicolons
      "@stylistic/no-extra-semi": "error",

      // Prefer double quotes for JSX attributes for consistency
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
    },
  },
] as Linter.Config[];
