var postcssImport = require('postcss-import'),
    postcssFor = require('postcss-for'),
    postcssEach = require('postcss-each'),
    postcssSimpleVars = require('postcss-simple-vars'),
    postcssCalc = require('postcss-calc'),
    postcssColorFunction = require('postcss-color-function'),
    postcssCustomMedia = require('postcss-custom-media'),
    postcssNested = require('postcss-nested'),
    postcssMixins = require('postcss-mixins'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    defaults = require('../css/defaults.json')

module.exports = [
  postcssImport,
  postcssMixins,
  postcssEach,
  postcssFor,
  postcssSimpleVars({ variables: defaults }),
  postcssCalc({ mediaQueries: true }),
  postcssNested,
  postcssColorFunction,
  postcssCustomMedia,
  autoprefixer({ browsers: ['last 3 versions'] }),
  cssnano
]
