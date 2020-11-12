// JavaScript Document
//Code Snippet Side Nav JavaScript Codes
    	function OpenSideNav(){
			document.getElementById('SideNavDoor1').style.display="none";
			document.getElementById('SideNavDoor2').style.display="block";
			document.getElementById('TopHeader').style.height="";"75%";
				document.getElementById('NavContent').style.display="block";
		}
		
    	function CloseSideNav(){
			document.getElementById('SideNavDoor1').style.display="block";
			document.getElementById('SideNavDoor2').style.display="none";
			document.getElementById('TopHeader').style.height="15%";	
			document.getElementById('NavContent').style.display="none";		
		}
		function txtShow(){
			document.getElementById('aboutTxt2').style.display="block";
			document.getElementById('showbutton1').style.display="none";
			document.getElementById('showbutton2').style.display="block";
			document.getElementById('aboutUs').style.height="90%";
		}
		function txtHide(){
			document.getElementById('aboutTxt2').style.display="none";
			document.getElementById('showbutton1').style.display="block";
			document.getElementById('showbutton2').style.display="none";
			document.getElementById('aboutUs').style.height="60%";
		}
