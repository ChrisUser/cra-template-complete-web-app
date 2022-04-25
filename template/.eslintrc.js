module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    rules: {
        "no-control-regex": 0,
        'no-undef': 0,
        'no-unused-vars': 'off',
        'react/prop-types': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}