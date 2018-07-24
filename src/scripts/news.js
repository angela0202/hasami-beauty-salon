(function () {
	'use strict';
	
	let news_card = 
	'<figure class="overlaynews">'+
		'<div class="containernews">' +
			'<img src="./images/{{image}}" alt="" />'+
		'</div>'+
		'<figcaption class="text">' +
			'<h1>{{title}} Services</h1>' +
			'<p>{{topnews}}</p>'+
			'<h5>Service end date {{deadline}}</h5>'+
		'</figcaption>'+
	'</figure>';

  window.news_card = news_card;
})();