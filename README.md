![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/ivanfuzuli/tiny-react-cli/Release/main)
![npm bundle size](https://img.shields.io/bundlephobia/min/tiny-react-cli)
![npm](https://img.shields.io/npm/v/tiny-react-cli)
![GitHub last commit](https://img.shields.io/github/last-commit/ivanfuzuli/tiny-react-cli)
![GitHub](https://img.shields.io/github/license/ivanfuzuli/tiny-react-cli)

## What is the purpose?

It's a very tiny cli (command line interface) tool for creating react component.

## Usage

### Install package

```javascript
# NPM
npm install tiny-react-cli

# Yarn
yarn add tiny-react-cli
```

### Create with default settings

** Command **
```javascript
react-cli g ComponentName
```

** Result **
```javascript
Welcome to tiny react cli
CREATED: src/components/ComponentName/index.js
CREATED: src/components/ComponentName/ComponentName.js
```

## Options

### add test file to output with "-t" parameter

** Command **
```javascript
react-cli g ComponentName -t
```

** Result **
```javascript
Welcome to tiny react cli
CREATED: src/components/ComponentName/index.js
CREATED: src/components/ComponentName/ComponentName.js
CREATED: src/components/ComponentName/ComponentName.test.js
```

### use custom path with "-p" parameter

** Command **
```javascript
react-cli g ComponentName -t -p src/pages
```

** Result **
```javascript
Welcome to tiny react cli
CREATED: src/pages/ComponentName/index.js
CREATED: src/pages/ComponentName/ComponentName.js
CREATED: src/pages/ComponentName/ComponentName.test.js
```


### Licence

MIT
