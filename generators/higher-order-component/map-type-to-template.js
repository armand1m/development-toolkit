const {
  HIGHER_ORDER_COMPONENT_WO_ARGS,
  HIGHER_ORDER_COMPONENT_WITH_ARGS
} = require('./types');

module.exports = (type) => {
  switch (type) {
    case HIGHER_ORDER_COMPONENT_WO_ARGS: return 'hoc-without-args.js.hbs';
    case HIGHER_ORDER_COMPONENT_WITH_ARGS: return 'hoc-with-args.js.hbs';
    default: return 'hoc-without-args.js.hbs';
  }
};
