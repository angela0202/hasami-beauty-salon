 const beautypress =
	 '<div class="comp-container">' +
		'<div class="img-comp-container">' +
		  '<div class="img-comp-img">' +
		    '<img src="./images/beautypress/before-after-1.jpg" width="500" height="400">' +
		  '</div>' +
		  '<div class="img-comp-img img-comp-overlay">'+
		    '<img src="./images/beautypress/before-after-2.jpg" width="500" height="400">' +
		  '</div>' +
		'</div>' +
		'<div class="comp">' +
			'<div class="comp-overflow">' +
				'<h5>Secret of</h5>' +
				'<h1>Hasami</h1>' +
				'<p>After owning two successful salon locations they decided to move their passion to the small town of Gainesville</p>' +
			'</div>' +
			'<div class="small-container">' +
				'<div class="small">'+
					'<div>' +
						'<img src="./images/beautypress/lipstick_color.png" alt="">' +
					'</div>' +
					'<b>Reflexology</b>' +
					'<p>Stimulates the movement of energy by applying pressure</p>' +
				'</div>' +
				'<div class="small">' +
					'<div>' +
						'<img src="./images/beautypress/nail_color-1.png" alt="">' +
					'</div>' +
					'<b>Nail Therapy</b>' +
					'<p>Wraps are intended to tone and tighten skin while helping.</p>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>' ;

function initComparisons() {
  var x, i;
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    w = img.offsetWidth;
    h = img.offsetHeight;
    img.style.width = (w / 2) + "px";
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    img.parentElement.insertBefore(slider, img);
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      if (clicked == 0) return false
      pos = getCursorPos(e)
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

 window.beautypress = beautypress;
 window.initComparisons = initComparisons;