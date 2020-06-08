$(document).foundation();

$(document).ready(function(){
	$("#hidden").hide();
	
	$("#products").mouseenter(function(){
		$("#hidden").show();		
    });
    
    $("#hidden").mouseleave(function(){
		$("#hidden").hide();		
	});
	
});
