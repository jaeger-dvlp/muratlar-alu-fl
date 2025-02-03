import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/next.config.js',
      '**/postcss.config.js',
      '**/tailwind.config.js',
      '**/next-sitemap.config.js',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'next',
      'airbnb',
      'airbnb-typescript',
      'next/core-web-vitals',
      'plugin:react/recommended',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
    ),
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      prettier: fixupPluginRules(prettier),
      'react-hooks': fixupPluginRules(reactHooks),
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        tsconfigRootDir: '.',
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        typescript: {
          '@': ['./src'],
        },

        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['./src'],
          moduleDirectory: ['node_modules', 'src/'],

          alias: {
            '@': './src',
          },
        },
      },
    },

    rules: {
      '@next/next/no-img-element': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
    },
  },
];
