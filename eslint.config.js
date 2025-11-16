import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-unused-vars": "error",
      eqeqeq: "error",
      "keyword-spacing": "error",
      "no-bitwise": "error",
      "no-console": "error",
      "no-eval": "error",
      "no-nested-ternary": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              message: "Import [module] from lodash/[module] instead",
              name: "lodash",
            },
          ],
          patterns: [
            {
              group: ["lodash/set"],
              message: "Import [module] from lodash/fp/[module] instead",
            },
          ],
        },
      ],
      "no-undef": ["error", { typeof: true }],
      "no-useless-catch": "off",
      "no-useless-escape": "error",
      "no-var": "error",
      "object-curly-spacing": ["error", "always"],
      quotes: ["error", "single"],
      semi: ["error", "never"],
      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
          ignoreMemberSort: true,
        },
      ],
      "sort-keys": [
        "error",
        "asc",
        {
          caseSensitive: true,
          minKeys: 2,
          natural: false,
        },
      ],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
