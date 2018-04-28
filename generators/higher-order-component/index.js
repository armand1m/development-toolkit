/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const path = require('path');

const componentExists = require('../utils/component-exists');

const componentTypes = require('./types');
const mapTypeToTemplate = require('./map-type-to-template');

const componentChoices = Object.values(componentTypes);

module.exports = {
  description: 'Add an unconnected Higher Order Component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of HOC',
    default: componentChoices[0],
    choices: () => componentChoices,
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'withData',
  }, {
    type: 'input',
    name: 'description',
    message: 'How would you describe this HOC behavior?',
    default: 'Makes async requests and pass down loading, data and error props to wrapped component..',
  }, {
    type: 'directory',
    name: 'destiny',
    message: 'Where you like to put this component?',
    basePath: process.cwd()
  }],
  actions: (data) => {
    const {
      type,
      name,
      destiny,
    } = data

    if ((/.+/).test(name) && componentExists(destiny, name)) {
      throw new Error('A component or container with this name already exists in this folder. Please try another destiny or another name.');
    }

    const target = path.join(process.cwd(), destiny);
    const getTargetPathFor = (file) => `${target}/{{camelCase name}}/${file}`;
    const getTemplatePathFor = (file) => `./generators/higher-order-component/templates/${file}`;

    return [{
      type: 'add',
      path: getTargetPathFor('index.js'),
      templateFile: getTemplatePathFor(mapTypeToTemplate(type)),
      abortOnFail: true,
    }];
  },
};
