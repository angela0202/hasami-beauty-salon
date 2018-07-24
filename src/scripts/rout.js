(function() {
  'use strict';

  router.addRoute({
    rgx: /#book/,
    controller: () => {
      location.pathname = '';
    }
  });

  const drawContact = () => {
    console.log('in contact');
    const container = document.querySelector('.container');
    container.innerText = '';

    const footer = document.querySelector('.footer');
    //footer.innerText = '';
    footer.style.display = 'none';

    const contactContainer = document.querySelector('.section-6');
    contactContainer.style.display = 'flex';

    const maps = contactContainer.firstChild;

    contactContainer.innerText = '';
    contactContainer.style.display = 'flex';

    const contact = new Contact();
    contactContainer.append(maps);
    contactContainer.append(contact.render());
  };

  router.addRoute({
    rgx: /router\/news\/subscribe/,
    controller: () => {
      console.log(8)
    }
  });

  router.addRoute({
    rgx: /contact/,
    controller: drawContact
  });

  router.addRoute({
    rgx: /about/,
    controller: () => {
      console.log('about');

      const contactContainer = document.querySelector('.section-6');
      contactContainer.style.display = 'none';

      const footer = document.querySelector('.footer');
      footer.style.display = 'block';

      const container = document.querySelector('.container');
      container.innerText = '';

      const about = document.createElement('div');
      about.setAttribute('class', 'about');
      about.innerText = '';

      container.append(about);

      const press = document.createElement('div');
      press.setAttribute('class', 'press');
      press.innerHTML = beautypress;

      about.append(press);
      initComparisons();

      const expert = document.createElement('div');
      expert.setAttribute('class', 'expert');

      fetch('/api/example/expert')
        .then((response) => {
          if (response.status === 200) {
            return response.json()
          }
        })
        .then((data) => {
          const cardHeading = new Card();
          expert.append(cardHeading.render(EXPERT_SECTION_HEADING));
          data.map((element) => {
            let cards_e = new Card(element);
            expert.append(cards_e.render(expert_card));
          })
        })
        .catch((err) => console.log(err));

      about.append(expert);
    }
  });
})();