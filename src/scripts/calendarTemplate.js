'use strict';

const CALENDAR_TEMPLATE =
  '<div>' +
    '<div class="appointment-header">' +
      '<h2>We are awesome</h2>' +
      '<h3>Get Appointment</h3>' +
    '</div>' +
    '<div class="appointment-wrapper">' +
      '<div class="appointment">' +
        '<div class="appointment-content">' +
          '<div class="appointment-details">' +
            '<div class="appointment-text">' +
              '<h2>Time Schedule</h2>' +
              '<h3>Working Hours</h3>' +
              '<p>A collection of textile samples lay spread out on the table -' +
              'Samsa was a travelling salesman -' +
              'and above it there hung a picture that he had recently cut out .</p>' +
              '<ul>' +
                '<li>Mon - Wed : 8:00am - 06:00pm</li>' +
                '<li>Thu - Sun : 10:00am - 10:00pm</li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="calendar-wrapper">' +
        '<div class="row wrapper">' +
          '<div class="btnPrev"><i class="material-icons icon">arrow_back</i></div>' +
          '<div class="m row date-month"></div>' +
          '<div class="btnNext"><i class="material-icons icon">arrow_forward</i></div>' +
        '</div>' +
        '<div class="calendar"></div>' +
          MODAL_TEMPLATE +
      '</div>'+
    '</div>' +
  '</div>';

window.CALENDAR_TEMPLATE = CALENDAR_TEMPLATE;