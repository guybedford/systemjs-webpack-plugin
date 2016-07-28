var SystemJSRegisterPublicModules = require('../../systemjs-register-public-modules.js');

module.exports = {
  entry: './main.js',
  plugins: [
    new SystemJSRegisterPublicModules({
      bundlesConfigForChunks: true, // defaults to true
      registerModules: [
        { filter: 'local', keyname: 'app/[relPath]' },
        { filter: 'public', keyname: module => 'publicModule-' + module.id }
      ]
    })
  ],
  output: {
    filename: 'out.js'
  }
};