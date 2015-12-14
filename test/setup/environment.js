(function() {

  var sync = Hipbone.sync;
  var ajax = Hipbone.ajax;
  var emulateHTTP = Hipbone.emulateHTTP;
  var emulateJSON = Hipbone.emulateJSON;
  var history = window.history;
  var pushState = history.pushState;
  var replaceState = history.replaceState;

  QUnit.testStart(function() {
    var env = QUnit.config.current.testEnvironment;

    // We never want to actually call these during tests.
    history.pushState = history.replaceState = function(){};

    // Capture ajax settings for comparison.
    Hipbone.ajax = function(settings) {
      env.ajaxSettings = settings;
    };

    // Capture the arguments to Hipbone.sync for comparison.
    Hipbone.sync = function(method, model, options) {
      env.syncArgs = {
        method: method,
        model: model,
        options: options
      };
      sync.apply(this, arguments);
    };

  });

  QUnit.testDone(function() {
    Hipbone.sync = sync;
    Hipbone.ajax = ajax;
    Hipbone.emulateHTTP = emulateHTTP;
    Hipbone.emulateJSON = emulateJSON;
    history.pushState = pushState;
    history.replaceState = replaceState;
  });

})();
