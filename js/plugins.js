// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

gsap.from('.hero-header', {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "expo.inOut"
})

gsap.from('.hero-desc', {
  y: 100,
  opacity: 0,
  duration: 1.5,
  delay: .6,
  ease: "expo.inOut"
})

gsap.from('.hero-btn', {
  y: 100,
  opacity: 0,
  duration: 1.5,
  delay: .7,
  ease: "expo.inOut"
})

gsap.from('.hero-img', {
  x: 100,
  opacity: 0,
  delay: 1.5,
  duration: 1.5,
  ease: "expo.inOut"
})

