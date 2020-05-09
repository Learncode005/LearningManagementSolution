//this is for only colors menu.
function Color() {
	////to make color menu background color to red.
    $("#ColorsID").css("background-color", 'red');
	//assigning the colors bar to x1.
let x1 = '<div class=\"Menucol\" <ul class=\"martop109\"> <li class=\"tooltip\" style=\"background-color: blue;\"> <span class=\"tooltiptext\" style=\"color:blue\">BLUE</span></li ><li class=\"tooltip\" style=\"background-color:red;\"><span class=\"tooltiptext\" style=\"color:red\">RED</span></li><li class=\"tooltip\" style=\"background-color:green;\"><span class=\"tooltiptext\" style=\"color:green\">GREEN</span></li><li class=\"tooltip\" style=\"background-color:orange;\"><span class=\"tooltiptext\" style=\"color:orange\">ORANGE1</span></li></ul>';
//appending the x1 content to "menu3" section.
$("#menu3id").html(x1);
	//to hide the "menu2" section.
	$("#menu2id").css("display", 'none');
	//it is to make width of "menu3" section to the value which we required.
    $("#menu3id").css("width",'95.9%');
	//it is also for "menu3" section to display properly making right padding to value 22.
    $("#menu3id").css("padding-right",22);
	//to make symbols menu text color to black.
    $("#symbolsID").css("color", 'black');
	//to make tables menu text color to black.
    $("#tableID").css("color", 'black');		
}