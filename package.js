Package.describe({
  name: "coffee:script",
  summary: "Javascript dialect with fewer braces and semicolons",
  version: "1.2.0",
  git: "https://github.com/foxbenjaminfox/meteor-coffeescript.git"
});

Package.registerBuildPlugin({
  name: "compileCoffeescript",
  use: [],
  sources: [
    'plugin/compile-coffeescript.js'
  ],
  npmDependencies: {
    "coffeescript": "2.7.0",
    "source-map": "0.7.4"
  }
});

Package.onTest(function (api) {
  api.use(['tinytest', 'coffee:script']);
  api.use(['coffeescript-test-helper'], ['client', 'server']);
  api.addFiles('bare_test_setup.coffee', ['client'], {
    bare: true
  });
  api.addFiles('bare_tests.js', ['client']);
  api.addFiles([
    'coffeescript_test_setup.js',
    'tests/coffeescript_tests.coffee',
    'tests/coffeescript_tests_await.coffee',
    'tests/coffeescript_strict_tests.coffee',
    'tests/litcoffeescript_tests.litcoffee',
    'tests/litcoffeescript_tests.coffee.md',
    'tests/testTemplate.helpers.coffee',
    'tests/testTemplate.events.coffee',
    'coffeescript_tests.js'
  ], ['client', 'server']);
});
