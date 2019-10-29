const {
  STATEFUL,
  STATEFUL_PURE,
  STATELESS,
  STATELESS_ARROW,
  REDUX_CONNECTED_STATELESS
} = require('./types');

module.exports = (type) => {
  switch (type) {
    case STATEFUL: return 'stateful.js.hbs';
    case STATEFUL_PURE: return 'stateful-pure.js.hbs';
    case STATELESS: return 'stateless.js.hbs';
    case STATELESS_ARROW: return 'stateless-arrow.js.hbs';
    case REDUX_CONNECTED_STATELESS: return 'redux-connected-stateless.js.hbs';
    default: return 'stateless.js.hbs';
  }
};
