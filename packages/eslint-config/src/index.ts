import type { Linter } from "eslint";
import astroConfig from "./configs/astro";
import baseConfig from "./configs/base";
import nextConfig from "./configs/next";
import nodeConfig from "./configs/node";
import prettierConfig from "./configs/prettier";
import reactConfig from "./configs/react";
import tailwindcssConfig from "./configs/tailwindcss";
import typescriptConfig from "./configs/typescript";

type Config = { 
    [key: string]: Linter.Config[] 
};

const configs: Config = {
 astro: astroConfig,
 base: baseConfig,
 next: nextConfig,
 node: nodeConfig,
 prettier: prettierConfig,
 react: reactConfig,
 tailwindcss: tailwindcssConfig,
 typescript: typescriptConfig,
};

export default configs;