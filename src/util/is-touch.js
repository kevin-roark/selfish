function isTouchDevice() {
  return 'ontouchstart' in window // works on most browsers
    || navigator.maxTouchPoints;  // works on IE10/11 and Surface
}

const touch = isTouchDevice();

export default touch;
