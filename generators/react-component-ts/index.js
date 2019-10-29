const path = require('path');

const componentExists = require('../utils/component-exists');

const componentTypes = require('./types');
const mapTypeToTemplate = require('./map-type-to-template');

const componentChoices = Object.values(componentTypes);

const workingDir = process.cwd();

module.exports = {
  description: 'Add an unconnected React component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: componentChoices[0],
    choices: () => componentChoices,
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
  }, {
    type: 'input',
    name: 'description',
    message: 'How would you describe this component behavior?',
    default: 'Renders a button component',
  }, {
    type: 'directory',
    name: 'destiny',
    message: 'Where you like to put this component?',
    basePath: workingDir
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

    const target = path.join(workingDir, destiny);

    const getTargetPathFor = (file) => `${target}/{{properCase name}}/${file}`;
    const getTemplatePathFor = (file) => `./generators/react-component/templates/${file}`;

    return [{
      type: 'add',
      path: getTargetPathFor('index.js'),
      templateFile: getTemplatePathFor(mapTypeToTemplate(type)),
      abortOnFail: true,
    }, {
      type: 'add',
      path: getTargetPathFor('index.test.js'),
      templateFile: getTemplatePathFor('test.js.hbs'),
      abortOnFail: true,
    }, {
      type: 'add',
      path: getTargetPathFor('index.stories.js'),
      templateFile: getTemplatePathFor('story.js.hbs'),
      abortOnFail: true,
    }, {
      type: 'add',
      path: getTargetPathFor('index.css'),
      templateFile: getTemplatePathFor('index.css.hbs'),
      abortOnFail: true,
    }];
  },
};
