(function() {
  'use strict';

  let marker;

  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {lat: 40.2018202, lng: 44.4924011}
    });

    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: 40.2018202, lng: 44.4924011}
    });

    marker.addListener('click', toggleBounce);
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  window.initMap = initMap;
})();