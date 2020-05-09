//this is for only tables menu.
function printTable(){
	//to show table1,table2,table3 and a text box in "menu2"section
    $("#menu2id").html(' <p id=\"table1\" style=\"display:block\" onmouseover=\"formTable(1)\">Table1</p> <p id=\"table2\" style=\"display:block\" onmouseover=\"formTable(2)\">Table2</p><p id=\"table3\" style=\"display:block\" onmouseover=\"formTable(3)\">Table3</p> <p><input type=\"text\" size=\"6\" id=\"mytext\" class=\"marleft\" style=\"display: block\" onfocusout=\"result()\"></p>');
  //to make visible the "menu2" section.
  $("#menu2id").css("display", 'block');
//it is to make width of "menu3" section to the value which we required.
  $("#menu3id").css("width",'79.9%');  
  //it is also for "menu3" section to display properly making right padding to value 22.
  $("#menu3id").css("padding-right",22);
  //to make color menu background color to white.
  $("#ColorsID").css("background-color", 'white');
  //to make symbols menu text color to black.
  $("#symbolsID").css("color", 'black');
  //to make tables menu text color to orange.
  $("#tableID").css("color", 'orange');
  //it is not to display anything in "menu3" section initially and to replace the previous stuff with blank if any.
  $("#menu3id").html('');	
}
//it for getting table of a given number.
function result(){
	//assing value which is entered in textbbox to the variable num.
    var num = Number(document.getElementById('mytext').value);
	//calling the function.
    formTable(num);
}
//it for calculating of a table.
function formTable(num) {
	//declaring and assing "menu3" section to variable T.
    var T = document.getElementById('menu3id');
    T.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
		//appending the table to T.
        T.innerHTML += num + "*" + i + "=" + num * i + "<br/>"
    }
}
