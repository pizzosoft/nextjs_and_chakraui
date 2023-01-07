module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "chakra-ui"
    ],
    "rules": {
        "chakra-ui/props-order": "error",
        "chakra-ui/props-shorthand": "error",
        "chakra-ui/require-specific-component": "error"
    }
}
