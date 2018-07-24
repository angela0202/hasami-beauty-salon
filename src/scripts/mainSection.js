(function() {
  'use strict';

  class MainSection extends Config {
    constructor() {
      super();
    }

    render() {
      const html = super.format(MAIN_SECTION_TEMPLATE);
      const section = super.htmlToDom(html)[0];

      return section;
    }
  }

  window.MainSection = MainSection;
})();
