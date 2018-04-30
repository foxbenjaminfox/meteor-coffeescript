Meteor.__COFFEESCRIPT_PRESENT = true

sleep = (ms) ->
  new Promise (resolve) ->
    setTimeout resolve, ms

# This is read in coffeescript_strict_tests.coffee.
share.coffeeShared = 789

Tinytest.addAsync 'await', (test, onComplete) ->
  await sleep 50
  test.equal true, true
  onComplete()
  return