// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'plugin:css-modules/recommended',
    'prettier',
    'prettier/react',
  ],

  plugins: ['css-modules', 'prettier'],

  globals: {
    __DEV__: true,
    __PROD__: true,
    __STAGING__: true,
  },

  env: {
    browser: true,
  },

  rules: {
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        // // eslint-disable-next-line prettier/prettier
        // "devDependencies": true,
        // // eslint-disable-next-line prettier/prettier
        // "optionalDependencies": true,
        // // eslint-disable-next-line prettier/prettier
        // "peerDependencies": true,
        // // eslint-disable-next-line prettier/prettier
        // "bundledDependencies": true,
        packageDir: './',
      },
    ],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    // manual off
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-multi-comp': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/tabindex-no-positive': 'warn',
    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',
    //manaul off
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // need to check below settings
    'react/sort-comp': 'off',
    'no-underscore-dangle': 'off',
    'sx-a11y/label-has-for': 'off',
    'spaced-comment': 'off',
    'no-useless-escape': 'off',
    'no-unused-class': 'off',
    'css-modules/no-undef-class': 'error',
    'css-modules/no-unused-class': 'error',
    'prefer-rest-params': 'warn',
    'jsx-a11y/label-has-for': 'off',
    camelcase: 'warn',
    'react/no-did-mount-set-state': 'warn',
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
