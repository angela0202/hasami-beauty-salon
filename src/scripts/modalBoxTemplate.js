const MODAL_TEMPLATE =
  '<div id="myModal" class="modal">' +
    '<div class="modal-content">' +
      '<div class="modal-header">' +
        '<span class="close">&times;</span>' +
        '<h2>BOOK AN APPOINTMENT</h2>' +
      '</div>' +
      '<div class="modal-body">' +
        '<form method="post" action="/api/example/a" class="appointment-form" name="appointment-form" ' +
              'onsubmit="return validateForm(document.forms[\'appointment-form\'][\'mail\'],' +
              'document.forms[\'appointment-form\'][\'name\'], document.forms[\'appointment-form\'][\'service\'])">' +
          '<p>Please confirm that you would like to request the following appointment:</p>' +
          '<div class="book-date">' +
            '<img src="../images/date.svg">' +
            '<select name="date" class="dateselect">' +
              '<option class="date"></option>' +
            '</select>' +
          '</div>' +
            '<div class="field">' +
              '<lable class="field-label-name">Your Information:</lable>' +
              '<p>Please enter your name:</p>' +
            '</div>' +
            '<input type="text" placeholder="Name" class="book-date-name" name="name">' +
            '<div class="book-date-name-name_error"></div>' +
            '<div class="field">' +
              '<p>Please enter your email:</p>' +
            '</div>' +
            '<input type="email" placeholder="Email" class="book-date-email" name="mail">' +
            '<div class="book-date-email-email_error"></div>' +
            '<div class="field-service">' +
              '<lable class="field-label-service">Service:</lable>' +
              '<select name="service" id="">'+
                '<option value="Select a Product">Select a Product</option>' +
                '<option value="Hair Cut">Hair Cut</option>' +
                '<option value="Makeup">Makeup</option>' +
                '<option value="Hair Color">Hair Color</option>' +
              '</select>' +
              '<div class="select_error"></div>' +
            '</div>' +
            '<input type="submit" value="BOOK APPOINTMENT" class="appointment-submit">' +
          '</form>' +
      '</div>' +
    '</div>' +
  '</div>';