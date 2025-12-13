// assets/js/modules/lenis.js

import Lenis from "lenis";

function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
    direction: "vertical",
    gestureDirection: "vertical",
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenis;
}

export default initLenis;
