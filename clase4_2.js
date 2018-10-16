
function maximizar(){
	var w_actual=window.width;
	var h_actual=window.height;
	//window.resizeTo(window.screen.width,window.screen.height);
	for (let i=0;i<500;i+=2){
		//window.moveTo(i,0);
		window.resizeTo(w_actual+i,h_actual);
		for (let j=0;j<50;j++) console.log("");
	}
		
	
}