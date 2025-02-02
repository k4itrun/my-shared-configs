import type { Options } from "prettier";

const config: Options = {
  // Max line length
  printWidth: 120,
  // Use single quotes
  singleQuote: true,
  // Trailing commas in ES5+ structures
  trailingComma: "es5",
  // No semicolons at the end of statements
  semi: true,
  // Indentation size
  tabWidth: 2,
  // Use spaces instead of tabs
  useTabs: false,
  // Always include parentheses in arrow functions
  arrowParens: "always",
  // Space inside braces
  bracketSpacing: true,
  // Use double quotes in JSX
  jsxSingleQuote: false,
  // Line ending (LF for consistency)
  endOfLine: "lf",
  // Closing bracket of JSX on a new line
  jsxBracketSameLine: false,
  // Add space inside object braces
  objectCurlySpacing: true,
  // Space after `//` in comments
  commentSpace: true,
  // Do not wrap text in comments
  proseWrap: "never",
};

export default config satisfies Options;
