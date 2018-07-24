'use strict';

class FeedbackSection extends Config {
  constructor() {
    super();
  }

  render() {
    const html = super.format(FEEDBACK_SECTION_TEMPLATE);
    const section = super.htmlToDom(html)[0];

    return section;
  }
}

window.FeedbackSection = FeedbackSection;