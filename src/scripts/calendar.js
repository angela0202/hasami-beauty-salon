'use strict';

class Calendar extends Config {
  constructor(container) {
    super();
    this.container = '.' + container;
    this.DaysOfWeek = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];
    this.Months = ['January', 'February', 'March',
      'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December' ];
    const d = new Date();
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
  }

  render() {
    const html = super.format(CALENDAR_TEMPLATE);
    const section = super.htmlToDom(html)[0];

    return section;
  }

  nextMonth() {
    if ( this.currMonth === 11 ) {
      this.currMonth = 0;
      this.currYear = this.currYear + 1;
    }
    else {
      this.currMonth = this.currMonth + 1;
    }
    this.showCurr();
  };

  previousMonth() {
    if ( this.currMonth === 0 ) {
      this.currMonth = 11;
      this.currYear = this.currYear - 1;
    }
    else {
      this.currMonth = this.currMonth - 1;
    }
    this.showCurr();
  };

  showCurr() {
    this.showMonthlyCalendar(this.currYear, this.currMonth);
  };

  showMonthlyCalendar (year, month) {
    const firstDayOfMonth = new Date(year, month, 1).getDay(),
      lastDateOfMonth =  new Date(year, month + 1, 0).getDate(),
      lastDayOfLastMonth = month === 0 ? new Date(year - 1, 11, 0).getDate() : new Date(year, month, 0).getDate();

    let div = '<div class="">';
    let dateMonth = document.querySelector('.date-month');
    dateMonth.innerText = this.Months[month];

    /******** month and year ********/
    document.querySelector('.m').innerHTML = this.Months[month] + ' ' + year;

    /******** days of the week ********/
    div += '<div class="days">';
    for(let i=0; i < this.DaysOfWeek.length;i++) {
      div += '<div class="week_day">' + this.DaysOfWeek[i] + '</div>';
    }
    div += '</div>';

    div += '<div class="week_month">';
    /******** write the days ********/
    let i=1;
    while (i <= lastDateOfMonth) {
      let date = new Date(year, month, i).getDay();

      /******** last days from the previous month ********/
      if ( i === 1 ) {
        let k = lastDayOfLastMonth - firstDayOfMonth + 1;
        for(let j=0; j < firstDayOfMonth; j++) {
          div += '<div class="empty">' + '' + '</div>';
          k++;
        }
      }

      /******** current day ********/
      const chk = new Date();
      const chkY = chk.getFullYear();
      const chkM = chk.getMonth();
      if (chkY === this.currYear && chkM === this.currMonth && i === this.currDay) {
        div += '<div class="d current-day"><span class="book-day" data-date="'+ this.currYear +
          '-' + (this.currMonth + 1) + '-' + this.currDay +'">' + i + '</span></div>';
      } else {
        if((i < this.currDay && chkM === this.currMonth) || (chkM > this.currMonth)) {
          div += '<div class="d disable"><span class="book-day" data-date="'+ this.currYear + '-' +
            (this.currMonth + 1) + '-' + i +'">' + i + '</span></div>';
        } else {
          div += '<div class="d"><span class="book-day" data-date="'+ this.currYear + '-' +
            (this.currMonth + 1) + '-' + i +'">' + i + '</span></div>';
        }
      }

      /******** next few days from the next month ********/
      if ( i === lastDateOfMonth ) {
        let k=1;
        for(date; date < 6; date++) {
          div += '<div class="empty">' + '' + '</div>';
          k++;
        }
      }
      i++;
    }

    div += '</div>';
    document.querySelector(this.container).innerHTML = div;
  };
}

