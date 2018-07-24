'use strict';

const validateForm = (email, name, options, message) => {
  if(name) {
    const className = '.' + name.className + '-' + 'name_error';
    const name_error = document.querySelector(className);
    name_error.style.color = 'red';
    name_error.style.fontSize = '15px';

    if (name.value === "") {
      name_error.innerText = "Name is required";

      name.focus();
      return false;
    } else {
        name_error.innerText = "";
    }
  }

  if(email) {
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const className = '.' + email.className + '-' + 'email_error';

    const email_error = document.querySelector(className);
    email_error.style.color = 'red';
    email_error.style.fontSize = '15px';

    if (email.value === "") {
      email_error.innerText = "Email is required";
      email.focus();
      return false;
    } else {
      email_error.innerText = "";
    }

    if (regexEmail.test(email.value)) {
      email_error.innerText = "";
    } else {
      email_error.innerText = "Enter valid Email";
      return false;
    }
  }

  if(options) {
    const select_error = document.querySelector('.email_error');
    select_error.style.color = 'red';
    select_error.style.fontSize = '15px';

    if(options.value === options.options[0].value) {
      select_error.innerText = "Select service";

      return false;
    } else {
      select_error.innerText = "";
    }
  }

  if(message) {
    console.log('mes');
    const message_error = document.querySelector('.contact-form-message_error');
    message_error.style.color = 'red';
    message_error.style.fontSize = '15px';

    if (message.value === "") {
      message_error.innerText = "Message is required";

      message.focus();
      return false;
    } else {
      message_error.innerText = "";
    }
  }

  return true;
};