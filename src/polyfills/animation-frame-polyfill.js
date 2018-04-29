/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 Mengdi Gao
 *
 * Rewritten from MIT Licensed GitHub Gist at https://gist.github.com/paulirish/1579671
 * >  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * >  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * >
 * >  requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 */

const frameDuration = 16; // milliseconds
let expectedOrLastCallTime = 0;

export default {
  /**
   * @param callback
   * @returns {number} The Request ID
   */
  requestAnimationFrame(callback) {
    const currentTime = Date.now();
    expectedOrLastCallTime = Math.max(expectedOrLastCallTime + frameDuration, currentTime);

    return setTimeout(() => {
      callback(Date.now());
    }, expectedOrLastCallTime - currentTime);
  },
  cancelAnimationFrame(requestId) {
    clearTimeout(requestId);
  },
}
