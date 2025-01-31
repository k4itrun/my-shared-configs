import { readdirSync } from "node:fs";
import { join, parse } from "node:path";
import { RollupOptions, OutputOptions, ModuleFormat } from "rollup";
import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";

const CONFIG_DIR = "src/configs/";
const OUTPUT_DIR = "dist/";

const baseConfig: Omit<RollupOptions, "input" | "output"> = {
  treeshake: {
    annotations: true,
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
    moduleSideEffects: [],
  },
  plugins: [
    rollupPluginTypescript({ tsconfig: "tsconfig.json" }),
    rollupPluginAutoExternal(),
    rollupPluginNodeResolve(),
    rollupPluginCommonjs(),
  ],
  external: ["eslint-plugin-prettier/recommended"],
};

const outputConfig = (
  format: ModuleFormat,
  filename: string,
): OutputOptions => ({
  dir: OUTPUT_DIR,
  entryFileNames: `${format}/src/${filename}.${
    format === "esm" ? "js" : "cjs"
  }`,
  format,
  sourcemap: false,
  exports: "default",
});

const buildConfig = (file: string) => {
  const { name: filename } = parse(file);
  return {
    ...baseConfig,
    input: join(CONFIG_DIR, file),
    output: [outputConfig("esm", filename)] satisfies OutputOptions[],
  };
};

export default readdirSync(CONFIG_DIR).map<RollupOptions>((file) =>
  buildConfig(file),
);
