// eslint.config.js
import js from "@eslint/js"
import react from "eslint-plugin-react"
import jest from "eslint-plugin-jest"

export default [
  {
    ignores: ["node_modules/**", "dist/**","webpack.config.js"]
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
  ecmaVersion: 2018,
  sourceType: "module",
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  globals: {
    window: "readonly",
    document: "readonly",
    describe: "readonly",
    test: "readonly",
    it: "readonly",
    expect: "readonly",
    beforeEach: "readonly",
    afterEach: "readonly",
    jest: "readonly"
  }
},
    plugins: {
      react,
      jest
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "never"],
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": "error",
      "react/prop-types": 0
    },
    settings: {
      react: { version: "detect" }
    }
  }
]