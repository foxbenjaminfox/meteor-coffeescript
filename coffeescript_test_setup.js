sharedFromJavascript = 135;

// Set up a mock for the template wrappers
Template = {
  testTemplate: {
    helpers: function(object){
      this.HELPER_EXPORTED = object.helper()
    },
    events: function(object){
      this.EVENT_EXPORTED = object["click .event"]()
    }
  }
};
