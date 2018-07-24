const CONTACT_TEMPLATE =
  '<div class="contact"> ' +
    '<div class="contact-form-wrapper"> ' +
      '<form action="/api/example/contact" method="post" class="contact-form" name="contact-form"' +
            'onsubmit="return validateForm(document.forms[\'contact-form\'][\'email\'],' +
              'document.forms[\'contact-form\'][\'name\'], \'\', ' +
              'document.forms[\'contact-form\'][\'message\'])"> ' +
        '<div class="contact-form-title">Get In Touch</div> ' +
        '<div class="contact-form-row"> ' +
          '<input type="text" placeholder="Your Name" name="name" class="contact-form-name"> ' +
          '<div class="contact-form-name-name_error"></div>' +
          '<input type="email" placeholder="Your Email" name="email" class="contact-form-email"> ' +
          '<div class="contact-form-email-email_error"></div>'+
        '</div> ' +
        '<div class="contact-form-row"> ' +
          '<input type="text" placeholder="Type Your Message" name="message" class="contact-form-message"> ' +
          '<div class="contact-form-message_error"></div>'+
        '</div> ' +
        '<input type="submit" value="Send" class="contact-form-submit"> ' +
      '</form> ' +
      '<div class="address"> ' +
        '<div class="address-heading"> ' +
          '<h2>Our Story</h2> ' +
        '</div> ' +
        '<ul> ' +
          '<li><img src="images/location.svg" alt="location icon"><span>3 Hakob Hakobyan, Yerevan, Armenia.</span></li> ' +
          '<li><img src="images/phone.svg" alt="phone icon"><span>+374 (00) 00-00-00</span></li> ' +
          '<li><img src="images/mail.svg" alt="mail icon"><span>info@hasami.am</span></li> ' +
        '</ul> ' +
      '</div> ' +
    '</div> ' +
  '</div> ';

window.CONTACT_TEMPLATE = CONTACT_TEMPLATE;