module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'react/jsx-one-expression-per-line': [0],
    'react/react-in-jsx-scope': [0],
    'new-cap': [2, { capIsNewExceptions: ['List', 'Map', 'Set'] }],
    'react/no-multi-comp': 0,
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 2,
    'comma-dangle': ['error', 'never'],
    indent: [2, 2, { SwitchCase: 1 }],
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'react-hooks/exhaustive-deps': [
      0,
      {
        enableDangerousAutofixThisMayCauseInfiniteLoops: true
      }
    ],
    'import/no-extraneous-dependencies': [0, { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 0,
    semi: 0
  }
};
