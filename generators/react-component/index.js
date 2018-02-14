/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');
const path = require('path');

const COMPONENT_TYPES = {
  ES6: 'ES6 Class',
  STATELESS: 'Stateless Function',
};

const TEMPLATE_PATHS = {
  ES6: './generators/react-component/es6.js.hbs',
  STATELESS: './generators/react-component/stateless.js.hbs',
  TEST: './generators/react-component/test.js.hbs',
  STORY: './generators/react-component/story.js.hbs',
  STYLE: './generators/react-component/index.css.hbs',
};

module.exports = {
  description: 'Add an unconnected React component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: COMPONENT_TYPES.STATELESS,
    choices: () => [COMPONENT_TYPES.STATELESS, COMPONENT_TYPES.ES6],
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
  }, {
    type: 'confirm',
    name: 'useInfoAddon',
    message: 'Are you using the @storybook/addon-info module? (if yes, story will be generated using .addWithInfo method)'
  }],
  actions: (data) => {
    const {
      destiny,
      type,
      name
    } = data;

    if ((/.+/).test(name) && componentExists(destiny, name)) {
      throw new Error('A component or container with this name already exists in this folder. Please try another destiny or another name.');
    }

    const componentTemplate = (() => {
      switch (type) {
        case COMPONENT_TYPES.ES6:
          return TEMPLATE_PATHS.ES6;
        case COMPONENT_TYPES.STATELESS:
          return TEMPLATE_PATHS.STATELESS;
        default:
          return TEMPLATE_PATHS.STATELESS;
      }
    })();

    const target = path.join(process.cwd(), destiny);

    const finalDestiny = `${target}/{{properCase name}}`;
    
    return [{
      type: 'add',
      path: `${finalDestiny}/index.js`,
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${finalDestiny}/index.test.js`,
      templateFile: TEMPLATE_PATHS.TEST,
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${finalDestiny}/index.stories.js`,
      templateFile: TEMPLATE_PATHS.STORY,
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${finalDestiny}/index.css`,
      templateFile: TEMPLATE_PATHS.STYLE,
      abortOnFail: true,
    }];
  },
};
