import tsESLintParser from "@typescript-eslint/parser";
import astroESLintParser from "astro-eslint-parser";
import astroClientSideTs from "astro/client-side-ts";
const compat = new FlatCompat();

/**
 * TODO: Flat Configに対応したら、よい感じに書き換える
 * >> https://ota-meshi.github.io/eslint-plugin-astro/user-guide/
 */
export default [
  ...compat.extends("plugin:astro/recommended"),
  {
    files: ["*.astro"],
    parser: astroESLintParser,
    parserOption: {
      parser: tsESLintParser,
      extraFileExtensions: [".astro"],
    },
    processor: astroClientSideTs,
    rules: {},
  },
];
