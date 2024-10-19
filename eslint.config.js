import unusedImports from 'eslint-plugin-unused-imports'

export default [
  {
    parser: '@typescript-eslint/parser',
    extends: 'next/core-web-vitals',
    plugins: ['@typescript-eslint', { 'unused-imports': unusedImports }],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'none' },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]
