import eslintConfig from "./dist/index";

export default [
  ...eslintConfig.base,
  ...eslintConfig.astro,
  ...eslintConfig.node,
  ...eslintConfig.next,
  ...eslintConfig.react,
  ...eslintConfig.tailwindcss,
  ...eslintConfig.typescript,
  ...eslintConfig.prettier,
];
