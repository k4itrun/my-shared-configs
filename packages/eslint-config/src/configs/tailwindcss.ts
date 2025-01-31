import type { Linter } from "eslint";
import { mergeConfigs, composer } from "eslint-flat-config-utils";
/* @ts-expect-error-next-line Waiting for types to be updated */
import tailwindPlugin from "eslint-plugin-tailwindcss";

const mergedTailwindConfig = mergeConfigs(
  ...tailwindPlugin.configs["flat/recommended"],
);

export default (await composer(mergedTailwindConfig)
  .override("tailwindcss:rules", {
    name: "@k4i/eslint-config/tailwindcss",
  })
  .overrideRules({
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/migration-from-tailwind-2": "off",
  })) satisfies Linter.Config[];
