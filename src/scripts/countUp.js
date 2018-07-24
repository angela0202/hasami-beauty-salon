const countUp = (node, type, callback) => {
  node.addEventListener(type, function(e) {
    e.target.removeEventListener(e.type, arguments.callee);
    return callback(e);
  });
};

countUp(document, "scroll", () => {

const count = (countUpSpeed) => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach((el) => {
    const value = el.dataset.to,
      modifier = (countUpSpeed !== 'undefined') ? countUpSpeed : 500,
      ratio = value/modifier;
    let counter = 1;

    const interval = setInterval(() => {
      counter++;
      const val = Math.floor(counter * ratio);

      if(counter <= modifier) {
        el.innerText = val;
      } else {
        clearInterval(interval);
      }
    }, 1/ratio);
  });
};

  count(500);
});