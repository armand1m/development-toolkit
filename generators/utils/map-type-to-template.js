const componentTypes = require('./component-types');

module.exports = (type) => {
    switch (type) {
        case componentTypes.STATEFUL: return 'stateful.js.hbs';        
        case componentTypes.STATEFUL_PURE: return 'stateful-pure.js.hbs';        
        case componentTypes.STATELESS: return 'stateless.js.hbs';
        case componentTypes.STATELESS_ARROW: return 'stateless-arrow.js.hbs';
        case componentTypes.REDUX_CONNECTED_STATELESS: return 'redux-connected-stateless.js.hbs';
        default: return 'stateless.js.hbs';
    }
};