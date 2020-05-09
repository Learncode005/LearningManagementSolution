//This fun is for displaying top menu when click on Learning Material.
function studentMenu() {
	//this line is for top menu(ALPHABETS, COLORS, SYMBOLS, TABLES).
    $("#menu1id").html('<div class=\"Menustu\" id=\"myDIV\" style=\"display:block\"> <a href=\"#\" id=\"alphabetMenuID\" onclick=\"alphabetMenu()\">Alphabets</a><a href=\"#\" id=\"ColorsID\" style=\"display:block\" onclick=\"Color()\">Colors</a><a href=\"#\" id=\"symbolsID\" onclick=\"LoadSymbolsMenu()\">Symbols</a><a href=\"#\" id=\"tableID\" onclick=\"printTable()\">Tables</a>');
	//it is to hide the "menu2" section in the layout
	$("#menu2id").css("display", 'none');
	//it is to make width of "menu3" section to the value which we required.
    $("#menu3id").css("width",'95.9%');
	//it is also for "menu3" section to display properly making right padding to value 22.
    $("#menu3id").css("padding-right",22);
	//it is not to display anything in "menu3" section and to replace the previous stff with blank if any.
    $("#menu3id").html('');
}
//it is to display contents of symbols when we click on symbols menu on top.
function LoadSymbolsMenu() {
	//assigning the different shape names by keeping in array to a variable named as cars.
    var cars = ["Triangle", "Rectangle", "circle", "Line", "Polygon", "Rhombus"];
	//to make visible the "menu2" section.
    $("#menu2id").css("display", 'block');  //menu2.style.display = "block";
	//it is to make width of "menu3" section to the value which we required.
    $("#menu3id").css("width",'79.9%');  //menu3.style.width = "79.9%";
	//it is also for "menu3" section to display properly making right padding to value 22.
    $("#menu3id").css("padding-right",22);  //menu3.style.paddingLeft = "22px";
	//to make color menu background color to white.
    $("#ColorsID").css("background-color", 'white');
	//to make symbols menu text color to orange.
    $("#symbolsID").css("color", 'orange');
	//to make tables menu text color to black.
    $("#tableID").css("color", 'black');
	//it is not to display anything in "menu3" section initially and to replace the previous stuff with blank if any.
    $("#menu3id").html('');
	//declaring a varialble menutemp.
      var menuTemp = "";
	  //for loop is to load the symbol names into the variable and also show symbol image on clicking.
      for (var i = 0; i < cars.length; i++) {
          menuTemp += '<a href=\"#\"  onclick=\"ShowSymbol(' + i + ')\">' + cars[i] + '</a>';
      }
	  //to display the symbol names in the "menu2" section.
     $("#menu2id").html( '<div class=\"vertical-menu-Inner\">' + menuTemp + '</div>');;
  }
  //defining the function to show symbols which effects the above for loop.
  function ShowSymbol(s) {
    var cars = ["Triangle", "Rectangle", "circle", "Line", "Polygon", "Rhombus"];
	//to show the symbol image in the"menu3" section.
   $("#menu3id").html('<img id=\"Image\" alt=\"no image found in path\" src=\"Images/' + cars[s] + '.png"/>');
}