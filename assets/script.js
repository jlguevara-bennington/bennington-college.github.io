$( document ).ready(function() {

	$('h3').click(
	  function() {
	    $('h3').css('font-size', '200px');
	  }
	);

	$('h3').hover(
		function () {
			$('h3').css('background-color',"yellow")
		}

	);

	$('a').click(
		function () {
			$('this').css('display','none')
		}

	);


});






$( document ).ready(function() {
	
	var brightnessValue = 50


	$('body').click(
		
		function(event) {
			
			yPosition = event.pageY;
			
			screenHeight = $('body').height();
			
			saturationRatio = yPosition/screenHeight
			
			saturationValue = saturationRatio*100;
			
			if( saturationValue > 50 ) {
				brightnessValue = brightnessValue + 5
			}
			
			if( saturationValue < 50 ) {
				brightnessValue = brightnessValue - 5
			}
		
			hueValue = Math.random() * 360
			cssValue = 'hsl('+hueValue+', '+saturationValue+'% '+(brightnessValue) % 100 + '%)';
			$('body').css('background-color', cssValue);

		}

	);
});

	




// 
// if user hovers on 'hue' button
// hue of page changes to new random value
// proportion = get random number between 0 and 1 - Math.random()
// hueValue = multiply proportion by 360 
// 
// when user clicks on page
// get horizontal position from event
// get width of screen
// divide position by width to get proportion
// saturationvalue = proportion * 100
// 
// get vertical position from event
// get height of screen
// divide position by height to get proportion
// lightnessValue = proportion * 100
// 
// plug in three values to css using string concatenation: +
// change css rule for body with jquery
// 
// vertical position measures lightness
	// if lightness is less than 50
	//if (  ) {
	// change all typeface to white
	//}
	// if lightness is more than 50
	//if (   ) {
	// change all typeface to black
	//}
// 

//});
/*