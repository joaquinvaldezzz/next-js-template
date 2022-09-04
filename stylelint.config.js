const postcssSorting = require('./utils/postcssSorting')

module.exports = {
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'order/order': [...postcssSorting.order],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [...postcssSorting.propertiesOrder],
    'prettier/prettier': true,
  },
}
