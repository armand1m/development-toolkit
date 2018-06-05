# armand1m-development-toolkit

[![asciicast](https://asciinema.org/a/QZX60R8SPeM7ppSptMOqDCm8t.png)](https://asciinema.org/a/QZX60R8SPeM7ppSptMOqDCm8t)

This is a `plop` generator that have some templates for generating React Component boilerplates with documentation, tests, and stories. It also helps to keep the same component structure through your project.

This tool gives you:

A folder with the specified component name into the specified destiny, with the following folder structure:

 - index.js: Actual component implementation
 - index.css: Actual component styles
 - index.test.js: Jest test suite and simple test case
 - index.stories.js: Simple storybook implementation (to use with [@storybook/react](https://github.com/storybooks/storybook))
 
Example:

```
- ./MyCustomComponent
  - index.js
  - index.css
  - index.test.js
  - index.stories.js
```

## Rules

 - This generator expects you to be using the `@storybook/react` module instead of `@kadira/storybook`.
 - This generator expects you to be using the `prop-types` module instead of `React.PropTypes`.
 - This generator expects you to be using the `classnames` module in your project.
 - This generator expects you to be using the `enzyme` module in your tests.
 - This generator expects you to be using `jest` as test runner.
 - This generator expects your project to be searching for the files that match `./**/*.stories.js` to load into the storybook.
    - _(it will work if this is not configured, but when configured, it enables instantly component development in a react + storybook environment.)_

## The flow

This tool asks you for defining:
  - A component type:
    - Stateless component using Normal Functions
    - Stateless component using Arrow Functions
    - ES6 Class component extending React.Component
    - ES6 Class component extending React.PureComponent
    - Redux Connected Stateless component using Arrow Functions
    - Higher order component without arguments
    - Higher order component with arguments
  - A name for your component:
    - It will be used as PascalCase in filenames and code.
  - A description for your component:
    - It will be used in JSDocs as a header comment in the src file.
  - A destiny for your component:
    - It will use [inquirer-directory](https://github.com/nicksrandall/inquirer-directory) to ask where to put your component.
    - If a folder with the component name already exists in the destiny, it will raise an error.

## Getting started

### Without `npx`
 - Add `plop` and `armand1m-development-toolkit` to your project as development dependency:

    ` $ npm install --save-dev plop armand1m-development-toolkit`

 - Create a npm script to run it:

```diff
{
  // ... package.json content,
  "scripts": {
+    "generate": "plop --plopfile ./node_modules/armand1m-development-toolkit/index.js"
  }
}
```

 - Run it

    `$ npm run generate`

## With `npx`

 - Add `armand1m-development-toolkit` to your project as development dependency:

    ` $ npm install --save-dev armand1m-development-toolkit`

 - Create a npm script to run it:

```diff
{
  "scripts": {
+    "generate": "npx plop --plopfile ./node_modules/armand1m-development-toolkit/index.js"
  }
}
```

 - Run it

    `$ npm run generate`

## Available generators

 - [x] React: Component
  - [x] Stateless component using Standard Functions
  - [x] Stateless component using Arrow Functions
  - [x] ES6 Class component extending React.Component
  - [x] ES6 Class component extending React.PureComponent
  - [x] Redux Connected Stateless component using Arrow Functions
 - [x] React: HOC
  - [x] HOC's with arguments
  - [x] HOC's without arguments
 
 _Ideas are always welcome. Open an issue if you use this package and think it could have more generators._

 _When possible, try creating a PR ;)_

## Inspiration
The idea for this package came from the generators available in the [react-boilerplate/react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) project.
