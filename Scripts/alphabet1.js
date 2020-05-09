//this function is responsible only for alphabet menu.
function alphabetMenu() {
	//to show the image of alphabets in "menu3" section.
    $("#menu3id").html('<img id=\"Image\" src=\"Images/abc.jpg\" style=\"display:block\" class=\"martop\" />');
    //to hide the "menu2" section.
	$("#menu2id").css("display", 'none');
	//it is to make width of "menu3" section to the value which we required.
    $("#menu3id").css("width",'95.9%');
	//it is also for "menu3" section to display properly making right padding to value 22.
    $("#menu3id").css("padding-right",22);
	//to make color menu background color to white.
    $("#ColorsID").css("background-color", 'white');
	//to make symbols menu text color to black.
    $("#symbolsID").css("color", 'black');
	//to make tables menu text color to black.
    $("#tableID").css("color", 'black');
}