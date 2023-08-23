module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', 'react', 'react-hooks', '@typescript-eslint', 'import', 'jsx-a11y', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      // Your TypeScript files extension
      parserOptions: {
        project: './tsconfig.json', // Specify it only for TypeScript files
      },
      extends: 'airbnb-typescript',
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['src/setupTests.ts', 'src/**/*.stories.tsx', 'src/**/*.test.{ts,tsx}'],
          },
        ],

        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: ['$state', '$config'],
          },
        ],
        'react/function-component-definition': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',

    camelcase: 'error',
    'consistent-return': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
