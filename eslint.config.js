import eslintConfig from "@k4i/eslint-config";

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
