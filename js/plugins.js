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

//  plugins in here.


import LocomotiveScroll from 'locomotive-scroll';

window.addEventListener('DOMContentLoaded',() => {



	if(document.querySelector('.loader')){
		setTimeout(() => {
      document.querySelector('.loader').classList.add('remove');
      console.log('remove loader');
    }, 2800)
	}

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('.smooth-scroll'),
    smooth: true,
    
  
});

locoScroll.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? 
    locoScroll.scrollTo(value, 0, 0):
    locoScroll.scroll.instance.scroll.y;
  }, getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  }, pinType: document.querySelector('.smooth-scroll').style.transform ? "transform" : "fixed"
})


function slideUp (el, delay = 0) {
  gsap.from(el, {
    scrollTrigger: {trigger:el,
    scroller: ".smooth-scroll",
    
  },
    delay,    
    y: 100,
    duration: 1.2,
    opacity: 0,
    ease: "expo.inOut"
  })
}


function slideToRight (el, delay = 0) {
  gsap.from(el, {
    scrollTrigger: {trigger:el,
    scroller: ".smooth-scroll",
    
  },
    delay,    
    x: -100,
    duration: 1.2,
    opacity: 0,
    ease: "expo.inOut"
    
  })
}


function slideToLeft (el, delay = 0) {
  gsap.from(el, {
    scrollTrigger: {trigger:el,
    scroller: ".smooth-scroll",
    
  },
    delay,    
    x: 100,
    duration: 1.2,
    opacity: 0,
    ease: "expo.inOut"
  })
}


gsap.from('.header', {
  y: -100,
  duration: 2,
  opacity: 0,
  delay: 3.5,
  ease: "expo.inOut"
})

gsap.from('.heading-line-1', {
  y: 100,
  duration: 2,
  opacity: 0,
  delay: 3.6,
  ease: "Expo.easeInOut"
})

gsap.from('.heading-line-2', {
  y: 100,
  duration: 2,
  opacity: 0,
  delay: 3.8,
  ease: "Expo.easeInOut"
})

gsap.from('.hero-p', {
  y: 100,
  duration: 2,
  delay: 4,
  opacity: 0,
  ease: "Expo.easeInOut"
})

gsap.from('.hero-btn', {
  y: 100,
  duration: 2,
  delay: 4.2,
  opacity: 0,
  ease: "Expo.easeInOut"
})

slideUp('.illustration-1');
slideUp('.skills-header', 0.2)
slideUp('.skills-p', 0.5);
slideUp('.skills-btn', 0.9);
slideUp('.title-header', 0.2)
slideUp('.title-p',0.5)
slideUp('.card-02', 0.2)
slideToRight('.card-01', 1.3)
slideToLeft('.card-03', 1.3)
slideUp('.pricing-card-02', 0.2)
slideToRight('.pricing-card-01', 1.3)
slideToLeft('.pricing-card-03', 1.3)
slideUp('.support-header', 0.2)
slideUp('.support-p', 0.5);
slideUp('.support-btn', 0.9);
slideUp('.teacher-header', 0.2)
slideUp('.teacher-p', 0.5);
slideUp('.teacher-btn', 0.9);
slideToRight('.illustration-2', 0.5)
slideToRight('.illustration-3', 0.5)



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();})