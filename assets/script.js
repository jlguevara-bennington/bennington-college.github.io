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
	
	var yPosition, screenHeight, 
		saturationRatio, saturationValue, 
		cssValue, brightnessValue, hueValue;
	var brightnessValue = 50


	$('body').click(
		
		function() {
			
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