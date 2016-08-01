Webpack SystemJS Registration Plugin
---

Allows Webpack bundles to register specified public modules into the SystemJS loader registry under custom public names.

Also supports configuring SystemJS to automatically load Webpack chunks on-demand when `System.import` is called to lazy load modules.

_This is an experimental integration project, without any support guarantees yet._

Example Configuration
---

```javascript
var SystemJSRegisterPublicModules = require('webpack-systemjs-plugin');

module.exports = {
  entry: './main.js',
  plugins: [
    new SystemJSRegisterPublicModules({
      // automatically configure SystemJS to load webpack chunks (defaults to true)
      bundlesConfigForChunks: true,

      // select which modules to expose as public modules
      registerModules: [
        // "default" filters provided are "local" and "public"
        { filter: 'public' },

        // keyname allows a custom naming system for public modules
        {
          filter: 'local',
          keyname: 'app/[relPath]'
        },

        // keyname can be a function
        {
          filter: 'public',
          keyname: (module) => 'publicModule-' + module.id
        },

        // filter can also be a function
        {
          filter: (m) => m.relPath.match(/src/),
          keyname: 'random-naming-system-[id]'
        }
      ]
    })
  ],
  output: {
    filename: 'out.js'
  }
};
```

`public` modules are main modules from the node_modules folder.

`local` modules are modules not within node_modules.