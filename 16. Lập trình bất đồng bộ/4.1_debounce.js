const log = function () {
  console.log("Tada");
};

function debounce(callback, wait) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, wait);
  };
}

const debounceLog = debounce(log, 500);
debounceLog(); // 5
debounceLog(); // 10
debounceLog();
