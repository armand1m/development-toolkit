/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');
const path = require('path');

module.exports = {
  description: 'Add an unconnected React component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
  }, {
    type: 'directory',
    name: 'destiny',
    message: 'Where you like to put this component?',
    basePath: process.cwd()
  }],
  actions: (data) => {
    const {
      destiny,
      type,
      name
    } = data

    if ((/.+/).test(name) && componentExists(destiny, name)) {
      throw new Error('A component or container with this name already exists in this folder. Please try another destiny or another name.')
    }

    let componentTemplate;

    switch (type) {
      case 'ES6 Class': {
        componentTemplate = './react-component/es6.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './react-component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './react-component/stateless.js.hbs';
      }
    }

    const target = path.join(process.cwd(), destiny)

    const actions = [{
      type: 'add',
      path: `${target}/{{properCase name}}/index.js`,
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${target}/{{properCase name}}/index.test.js`,
      templateFile: './react-component/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${target}/{{properCase name}}/index.stories.js`,
      templateFile: './react-component/story.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${target}/{{properCase name}}/index.css`,
      templateFile: './react-component/index.css.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
