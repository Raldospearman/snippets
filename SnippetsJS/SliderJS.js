// JavaScript Document
//Slider JS Code---
	function CurrentSlide(a){
		ImgSlideShowFunc(SlideIndex = a);
		}
	function SlidePlus(a){
		ImgSlideShowFunc(SlideIndex += a);
		}
			
	function ImgSlideShowFunc(a){
			var i;
			var slides = document.getElementsByClassName('Imgs');
			var slidesFlows = document.getElementsByClassName('slideFlow');
			if(a > slides.length){
				SlideIndex = 1;
				}
				else if(a < 1){
					SlideIndex =  slides.length;
					}
			for(i = 0; i < slides.length; i++){
				slides[i].style.display="none";
				slidesFlows[i].style.backgroundColor="#FFF";
			}
			slides[SlideIndex -1].style.display="block";
			slidesFlows[SlideIndex -1].style.backgroundColor="green";
		}
		var SlideIndex = 1
		ImgSlideShowFunc(SlideIndex);
	///////////////////////////////////////////////////////////////////
	//The below functions classes now 'slideFlow';
	//'slideFlow' used in the other functions above
	//The below functions are no longer in use but active and can be used
	//... in 'slideFlow' - class
	function Slider1(a){
		document.getElementById('Img1').style.display="block";
		document.getElementById('Img2').style.display="none";
		document.getElementById('Img3').style.display="none";
		document.getElementById('imgSlide1').style.backgroundColor="green";
		document.getElementById('imgSlide2').style.backgroundColor="#FFF";
		document.getElementById('imgSlide3').style.backgroundColor="#FFF";				
		}
		
	function Slider2(b){
		document.getElementById('Img1').style.display="none";
		document.getElementById('Img2').style.display="block";
		document.getElementById('Img3').style.display="none";
		document.getElementById('imgSlide1').style.backgroundColor="#FFF";
		document.getElementById('imgSlide2').style.backgroundColor="green";
		document.getElementById('imgSlide3').style.backgroundColor="#FFF";
		}
	function Slider3(c){
		document.getElementById('Img1').style.display="none";
		document.getElementById('Img2').style.display="none";
		document.getElementById('Img3').style.display="block";
		document.getElementById('imgSlide1').style.backgroundColor="#FFF";
		document.getElementById('imgSlide2').style.backgroundColor="#FFF";
		document.getElementById('imgSlide3').style.backgroundColor="green";
		}
		
