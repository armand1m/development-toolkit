/**
 * Exports the generators so plop knows them
 */

module.exports = (plop) => {
  plop.addPrompt('directory', require('inquirer-directory'));
  plop.setGenerator('React: HOC', require('./generators/higher-order-component/index.js'));
  plop.setGenerator('React: Component', require('./generators/react-component/index.js'));
};
