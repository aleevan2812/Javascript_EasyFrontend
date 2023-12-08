function log() {
  console.log("Tada");
}

function throttle(callback, wait) {
  let isThrottling = false;
  return function () {
    if (isThrottling) return; // 2 3 4 come here
    isThrottling = true; // 1 come here
    setTimeout(() => {
      callback();
      isThrottling = false;
    }, wait);
  };
}

const throttleLog = throttle(log, 500);
// 0 -> 500
throttleLog(); // set timeout 500 -> call -> turn off flag throttle
throttleLog(); // checking throttling -> ignore
throttleLog(); // checking throttling -> ignore
throttleLog(); // checking throttling -> ignore

// 600 -> 1100
setTimeout(throttleLog, 600); // start throttling
setTimeout(throttleLog, 600);
setTimeout(throttleLog, 600);
setTimeout(throttleLog, 600);
