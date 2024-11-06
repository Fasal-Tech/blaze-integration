Package.describe({
  name: 'mrspark:blaze-integration',
  version: '1.0.1',
  summary: "Vue integration with Meteor's Blaze rendering engine."
});

Package.onUse(function(api) {
  api.versionsFrom(['1.8.1', '3.0.4']);

  api.use([
    'ecmascript',
    'blaze@3.0.0',
    'templating@1.4.4',
    'ejson',
    'underscore',
    'mrspark:data-lookup@1.0.0'
  ]);

  api.use([
    'akryum:vue-router@0.2.2',
    'akryum:vue-router2@0.2.3'
  ], {weak: true});

  api.mainModule('main.js', 'client');
});
