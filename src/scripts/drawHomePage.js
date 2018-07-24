'use strict';

const drawEverything = (element) => {
  const contact = document.querySelector('.section-6');
  contact.style.display = 'none';

  const container = document.querySelector('.container');
  container.innerText = '';

  console.log('in home');

  const section_1 = document.createElement('section');
  section_1.setAttribute('class', 'section-1');
  section_1.innerText = '';

  container.appendChild(section_1);

  const sections = new MainSection();
  section_1.append(sections.render());

  const feedback = new FeedbackSection();
  const feedbackSection = document.createElement('section');
  feedbackSection.setAttribute('class', 'section-3');
  feedbackSection.innerText = '';

  container.append(feedbackSection);

  feedbackSection.append(feedback.render());

  fetch('/api/example/countUp')
    .then((res) => {
      if (res.status === 200)
        return res.json();
    })
    .then((data) => {
      const countUpSection = document.createElement('section');
      countUpSection.setAttribute('class', 'section-2');
      countUpSection.innerText = '';

      container.insertBefore(countUpSection, feedbackSection);

      data.map((element) => {
        const l = new CountUp(element);
        countUpSection.append(l.render());
      });
    })
    .catch((err) => console.log(err));


  //let list_news = document.querySelector('.news');
  const list_news = document.createElement('section');
  list_news.setAttribute('class', 'news');
  list_news.innerText = '';

  container.append(list_news);

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let date = `${day}/${month}/${year}`;

  fetch('/router/news')
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
    })
    .then((data) => {
      data.map((element) => {
        if (date < element.deadline) {
          let cardsu = new Card(element);
          list_news.append(cardsu.render(news_card));
        }
      })
    });

  const calSection = document.createElement('section');
  calSection.setAttribute('class', 'section-4');
  calSection.setAttribute('id', 'book');
  calSection.innerText = '';

  container.append(calSection);

  const cal = new Calendar('calendar');
  calSection.append(cal.render());

  cal.showCurr();

  window.cal = cal;
};

router.addRoute({
  rgx: /\//,
  controller: drawEverything
});