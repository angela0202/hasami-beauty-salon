const EXPERT_SECTION_HEADING =
  '<div class="expert-section-heading">' +
    '<h2>We are awesome</h2>' +
    '<h3>Expert Beautician</h3>' +
  '</div>';

const expert_card =
	'<div class="container-expert">' +
    '<img src={{image}} alt="Avatar" class="image-expert">' +
    '<div class="overlay"></div>' +
      '<div class="overlay-expert">' +
        '<div class="expert-info-wrapper">' +
          '<div class="expert-description">' +
            '<h3>{{full_name}}</h3>' +
            '<h4>{{specialty}}</h4>' +
          '</div>' +
          '<ul class="expert-media">' +
            '<li><a href="{{facebook}}"><i class="fab fa-facebook-f expert-media-icon fb"></i></a></li>' +
            '<li><a href="{{twitter}}"><i class="fab fa-twitter expert-media-icon twit"></i></a></li>' +
          '</ul>' +
        '</ul>' +
      '</div>' +
/*    '</div>' +*/
  '</div>' +
'</div>';