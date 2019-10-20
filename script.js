function castParallax() {

	var opThresh = 350;
	var opFactor = 750;

	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});

}

document.body.onload = castParallax();

// when the use scrolls the page, execute stickyNav
window.onscroll = function(){ stickyNav();}

const NAVBAR = document.querySelector("nav");
const MAIN_CONTENT = document.querySelector(".content-container");



function stickyNav(){
	// The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
	var sticky = MAIN_CONTENT.offsetTop;

	if(window.pageYOffset >= sticky){
		NAVBAR.classList.add("sticky");
	} else {
		NAVBAR.classList.remove("sticky");
	}
}

console.log(window.pageYOffset);
