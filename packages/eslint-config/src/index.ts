import type { Linter } from "eslint";
import astroConfig from "./configs/astro";
import baseConfig from "./configs/base";
import nextConfig from "./configs/next";
import nodeConfig from "./configs/node";
import prettierConfig from "./configs/prettier";
import reactConfig from "./configs/react";
import typescriptConfig from "./configs/typescript";

type Config = { 
    [key: string]: Linter.Config[] 
};

const configs: Config = {
 base: baseConfig,
 node: nodeConfig,
 astro: astroConfig,
 next: nextConfig,
 react: reactConfig,
 typescript: typescriptConfig,
 prettier: prettierConfig,
};

export default configs;