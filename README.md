# @armand1m-development-toolkit

This repo is a simple npm package with some tools I'm using for development needs.

The idea for this package came from the generators available in the [react-boilerplate/react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) project.

## June, 2017

Actually, this has a dependency called `plop`, and only exposes a single generator for a React component. It uses `inquirer-directory` to ask you where to put your generated component relative to the process working directory.

Actually, this is just a set of generators. More tools can be implemented in the future. Though it has only a simple React Generator for now, I'm probably going to use this same package for backend microservices scaffolding in the future, something related to [armand1m/microservices](https://github.com/armand1m/microservices)

## How can I use this?

 - Add `plop` and `armand1m-development-toolkit` to your project as development dependency:

    ` $ npm install --save-dev plop armand1m-development-toolkit`

 - Create a npm script to run it:

```js
{
  // ... package.json content,
  "scripts": {
    "generate": "plop --plopfile ./node_modules/@armand1m/development-toolkit/index.js"
  }
}
```

 - Run it

    `$ npm run generate`

## Available generators

 - [x] React: Component

 _Ideas are always welcome. Open an issue if you use this package and think it could have more generators._

 _When possible, try creating a PR ;)_
### React: Component

Asks you for:
  - A component type:
    - Stateless component
    - ES6 Class component
  - A name for your component:
    - It will be used as PascalCase in filenames and code.
  - A destiny for your component:
    - It will use [inquirer-directory](https://github.com/nicksrandall/inquirer-directory) to ask where to put your component.
    - If a folder with the component name already exists in the destiny, it will raise an error.

Gives you:

A folder with the specified component name into the specified destiny, with this file structure:

 - index.js: Actual component implementation
 - index.css: Actual component styles
 - index.test.js: Jest test suite and simple test case
 - index.stories.js: Simple storybook implementation (for those who use [@storybook/react](https://github.com/storybooks/storybook))

**Attention:**

 - This generator expects you to be using it on a `create-react-app` generated project.
 - This generator expects you to be using the `@storybook/react` module instead of `@kadira/storybook`.
 - This generator expects you to be using the `prop-types` module instead of `React.PropTypes`.
 - This generator expects you to be using the `classnames` module in your project.
 - This generator expects you to be using the `enzyme` module in your tests.
 - This generator expects you to be using `jest` as test runner.
    - _(but since it does not use jest assertions nor snapshotting, it should work with `mocha` or `jasmine` as well.)_
 - This generator expects your project to be searching for the files that match `./**/*.stories.js` to load into the storybook.
    - _(it will work if this is not configured, but when configured, it enables instantly component development in a react + storybook environment.)_