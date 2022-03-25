

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

 ; (function($){

 



 	$(document).ready(function(){
 
 
 		var slider = tns({
	 		  container: '.my-slider',
	 		  items: 4, 
	 		  autoplay: true,
	 		  speed: 200,
	 		  mouseDrag:true, 
	 		  nav:false,
	 		  controlsContainer:false,
	 		  autoplayButtonOutput:false

 		});

 

 	});

 })(jQuery);