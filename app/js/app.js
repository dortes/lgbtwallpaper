// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	(function (cb) {
 
		// browser event has already occurred.
		if (document.readyState === "complete") {
		  return setTimeout(cb);
		}
	  
		// Mozilla, Opera and webkit style
		if (window.addEventListener) {
		  return window.addEventListener("load", cb, false);
		}
	  
		// If IE event model is used
		if (window.attachEvent) {
		  return window.attachEvent("onload", cb);
		}
	   
	  })(function () {
		
		document.querySelectorAll('.nav-btn').forEach(function (el) {
		  el.addEventListener('click', function () {
			var nav    = this.parentElement.parentElement,
				_class = 'open';
			
			  nav.classList.contains(_class)
			? nav.classList.remove  (_class)
			: nav.classList.add     (_class)
		  });
		});
		
	  });
})
