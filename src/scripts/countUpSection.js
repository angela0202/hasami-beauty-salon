(function () {
  'use strict';

  const COUNT_UP_TEMPLATE =
    '<div class="salons">' +
      '<div class="counter" data-to="{{count}}"></div>' +
      '<h5>{{name}}</h5>' +
    '</div>';

  class CountUp extends Config {
    constructor(countInfo) {
      super();
      this.countInfo = countInfo;
    }

    render() {
      const html = super.format(COUNT_UP_TEMPLATE, this.countInfo);
      const countSection = super.htmlToDom(html)[0];

      return countSection;
    }
  }

  window.CountUp = CountUp;
})();