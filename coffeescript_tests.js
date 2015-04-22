Tinytest.add("coffeescript - presence", function(test) {
  test.isTrue(Meteor.__COFFEESCRIPT_PRESENT);
});
Tinytest.add("literate coffeescript - presence", function(test) {
  test.isTrue(Meteor.__LITCOFFEESCRIPT_PRESENT);
  test.isTrue(Meteor.__COFFEEMDSCRIPT_PRESENT);
});

Tinytest.add("coffeescript - exported variable", function(test) {
  test.equal(COFFEESCRIPT_EXPORTED, 123);
  test.equal(Package['coffeescript-test-helper'].COFFEESCRIPT_EXPORTED, 123);
});

Tinytest.add("event/helpers wrappers - presence", function(test) {
  test.isTrue(Meteor.__COFFEESCRIPT_HELPER_WRAPPER_PRESENT);
  test.isTrue(Meteor.__COFFEESCRIPT_EVENT_WRAPPER_PRESENT);
});

Tinytest.add("event/helpers wrappers - template variable", function(test) {
  test.equal(Template.testTemplate.HELPER_EXPORTED, 569);
  test.equal(Template.testTemplate.EVENT_EXPORTED, 891);
  test.equal(Template.testTemplate2.HELPER1_EXPORTED, 938);
  test.equal(Template.testTemplate2.HELPER2_EXPORTED, 114);
});
