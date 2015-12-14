(function() {

  module("Hipbone.noConflict");

  test('noConflict', 2, function() {
    var noconflictHipbone = Hipbone.noConflict();
    equal(window.Hipbone, undefined, 'Returned window.Hipbone');
    window.Hipbone = noconflictHipbone;
    equal(window.Hipbone, noconflictHipbone, 'Hipbone is still pointing to the original Hipbone');
  });

})();
