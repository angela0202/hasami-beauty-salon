// (function() {
//     'use strict';

//     const PERSON_CARD_TEMPLATE =
//        '<div class="container">' +
//         '<a href="{{src}}">'+
//           '<img src={{image}} alt="Avatar" class="image">' +
//         '</a>'+
//         '<div class="overlay">{{service}}' +
//           '<p>See services here</p>'+
//         '</div>' +
//         '</div>';

//     const list = document.querySelector('.list')
//     fetch('/api/example/config')
//         .then((res) => {
//             if (res.status === 200)
//                 return res.json()
//         })
//         .then((data) => {
//             data.map((element) => {
//                 const cards = new Card(element);
//                 list.append(cards.render(PERSON_CARD_TEMPLATE));
//             })
//         })
//         .catch((err) => console.log(err))

// })()