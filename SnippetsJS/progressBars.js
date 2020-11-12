// JavaScript Document
//JavaScript Progress loaders codes
	function loadProgress(){
		var interval = setInterval(frame, 10);
		var width = 10;
		var myWidth_1 = document.getElementById('Bar1');
		var myWidth_2 = document.getElementById('Bar2');
		var myWidth_3 = document.getElementById('Bar3');
		var myWidth_4 = document.getElementById('Bar4');
		////////////////////////////////////////////////
		////////////////////////////////////////////////
			function frame(){
				if(width >= 100){
					 clearInterval(interval);
					 }
					if(width < 90){
						width++;
						myWidth_1.style.width = width + '%';
						myWidth_1.innerHTML = width * 1 + '%';
						}
					if(width < 80){
						width++;
						myWidth_2.style.width = width + '%';
						myWidth_2.innerHTML = width * 1 + '%';
					 	}
					if(width < 50){
						width++;
						myWidth_3.style.width = width + '%';
						myWidth_3.innerHTML = width * 1 + '%';
					 	}
					if(width < 50){
						width++;
						myWidth_4.style.width = width + '%';
						myWidth_4.innerHTML = width * 1 + '%';
					 	}

			}
	}
