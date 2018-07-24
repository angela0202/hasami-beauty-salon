'use strict';

class Contact extends Config {
  constructor(countInfo) {
    super();
  }

  render() {
    const html = super.format(CONTACT_TEMPLATE);
    const contact = super.htmlToDom(html)[0];

    return contact;
  }
}

window.Contact = Contact;