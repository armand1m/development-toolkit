/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

module.exports = (destiny, component) => {
  return fs.readdirSync(path.join(process.cwd(), destiny)).indexOf(component) >= 0;
};
