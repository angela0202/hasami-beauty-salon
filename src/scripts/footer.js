(function() {
  'use strict';

  const FOOTER_TEMPLATE =
    '<div class="footer">' +
      '<div class="footer-logo">' +
       '<a href="/" class="name">Hasami</a>' +
      '</div>' +
      '<div class="footer-social">' +
        '<ul>' +
          '<li><a href="#" class="icon"><img src="images/github.svg" alt=""></a></li>' +
          '<li><a href="#" class="icon"><img src="images/linkedin.svg" alt=""></a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="footer-left">' +
      '</div>' +
      '<div class="footer-newsletter">' +
        '<h4>NEWSLETTER</h4>' +
        '<form action="/router/news/subscribe" method="post" class="form-subscribe" name="form-subscribe" ' +
              'onsubmit="return validateForm(document.forms[\'form-subscribe\'][\'emails\'])">' +
         '<div class="form-body">' +
           '<input type="text" placeholder="Email" class="form-body-input" name="emails">' +
           '<span class="form-body-input-email_error"></span>' +
         '</div>' +
         '<button name="submit">Subscribe</button>' +
        '</form>' +
       '</div>' +
       '<div class="copyright-text">Hexagon © 2018 All Rights Reserved.</div>' +
    '</div>';


  class Footer extends Config {
    constructor() {
      super();
    }
    render(value) {
      const html = super.format(value);
      const footer = super.htmlToDom(html)[0];

      return footer;
    }
  }

  const footerSelector = document.querySelector('footer');

  const footer = new Footer();
  footerSelector.append(footer.render(FOOTER_TEMPLATE));

})();