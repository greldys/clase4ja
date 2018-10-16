var t;
function reducir(){
	var w_actual=window.outerWidth;
	var h_actual=window.outerHeight;
	
	window.resizeTo(w_actual-5,h_actual-5);
	if (w_actual<300 || h_actual<300)
		window.clearInterval(t);
}

function maximizar(){
	window.resizeTo(window.screen.width,window.screen.height);
	window.moveTo(0,0);
	t=window.setInterval("reducir()",50)
}