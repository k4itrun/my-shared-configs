import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";

const input = "src/index.ts";
const outDir = "dist/src";
const defaultConfig = {
  input,
  output: [
    { file: outDir + "/index.js", format: "esm", compact: true },
    { file: outDir + "/index.cjs", format: "cjs", compact: true },
  ],
  treeshake: {
    annotations: true,
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
    moduleSideEffects: [],
  },
  plugins: [
    rollupPluginCommonjs(),
    rollupPluginTypescript({
      outDir,
      declarationDir: outDir,
      tsconfig: "tsconfig.json",
      include: [input],
      declaration: true,
    }),
  ],
} satisfies Partial<RollupOptions>;

export default defaultConfig;