//for create teacher menu when we click on teacher Management.
function Tmenu(){
	//to show create teacher menu on top.
    $("#menu1id").html(' <div class=\"Menutech\" id=\"TechId\" style=\"display:block\"><a href=\"#\" id=\"createID\" onclick=\"form()\">Create Teacher</a>');
    //it is not to display anything in "menu3" section initially and to replace the previous stuff with blank if any.
	$("#menu3id").html('');
	//to hide the "menu2" section.
	$("#menu2id").css("display", 'none');
	//it is to make width of "menu3" section to the value which we required.
    $("#menu3id").css("width",'95.9%');
	//it is also for "menu3" section to display properly making right padding to value 22.
    $("#menu3id").css("padding-right",22);
}
//to display form when click on create teacher menu.
function form(){
	//to hide the "menu2" section.
	$("#menu2id").css("display", 'none');
	//it is to make width of "menu3" section to the value which we required.
    $("#menu3id").css("width",'95.9%');
	//it is also for "menu3" section to display properly making right padding to value 22.
    $("#menu3id").css("padding-right",22);
	//to show form in the "menu3" section.
    $("#menu3id").html(' <div id=\"formId\" style=\display:none\"> <table style=\"margin-left:auto; margin-right:auto;\"> <tr><td><label style=\"font-size:20px\"> Teacher Name</label></td><td><input type=\"text\" id=\"teachername\" name=\fname\" maxlength=\"50\" onfocusout=\"Tval()\"/></td></tr> <tr><td></td> <td><label style=\"font-size:15px\" color =\"red\" id=\"teid\"></label></td></tr> <tr><td><label style=\"font-size:20px\">Class:</label></td><td>  <input type=\"number\" id=\"cls\" name=\"cls\" onfocusout=\"Cval()\" /></td></tr>  <tr><td></td> <td><label style=\"font-size:15px\" color =\"red\" id=\"clid\"></label></td></tr><tr><td><label style=\"font-size:20px\">Subject:</label> </td><td><input type=\"text\" id=\"sub\" name=\"sub\" maxlength=\"20\" /></td></tr> <tr><td><label style=\"font-size:20px\">Phone number: </label></td><td><input type=\"tel\" id=\"phn\" name=\"phn\" maxlength=\"10\" onfocusout=\"Pval()\" /></td></tr><tr><td></td> <td><label style=\"font-size:15px\" color =\"red\" id=\"phid\"></label></td></tr> <tr><td><label style=\"font-size:20px\"> Gender: </label></td><td><input type=\"text\" id=\"gen\" name=\"gen\"maxlength=\"10\" onfocusout=\"Gval()\" /></td></tr><tr><td></td> <td><label style=\"font-size:15px\" color =\"red\" id=\"geid\"></label></td></tr><tr><td colspan=\"2\"><input type=\"submit\" id=\"submitid\" name=\"gen\" class=\"Setbut\" onclick=\"CreateSubmit()\" /></td></tr> </table>');
}
//declaring variables.
var teacherName = "";
var classval = "";
var subject = "";
var phonenumber = "";
var Gender = "";
//this is for form after clicking submit.
function CreateSubmit() {
	//assing teacher name to the variable. 
    teacherName = document.getElementById('teachername').value;
	//assing class to the variable classval.
    classval = document.getElementById('cls').value;
	//assing subject name to the variable subject.
    subject = document.getElementById('sub').value;
	//assing phone number to the variable phonenumber.
    phonenumber = document.getElementById('phn').value;
	//assing gender to the variable Gender.
    Gender = document.getElementById('gen').value;
	//if teachername and class values are blank then it should not be as readonly.
    if (teacherName != "" && classval != "" ){     
    document.getElementById("teachername").readOnly = true;
    document.getElementById("cls").readOnly = true;
    document.getElementById("sub").readOnly = true;
    document.getElementById("phn").readOnly = true;
    document.getElementById("gen").readOnly = true;
    }
	//calling the function to print the pdf.
    printteacher();
    }
	//for validating teachername.
    function Tval(){
		//assing teacher name to the variable. 
        teacherName = document.getElementById('teachername').value;
		//if teacher name is blank or it contains any numericals then it shows the messege in red color below the textbox.
        if (teacherName == "" || (!isNaN(teacherName)) ) {
            teid.textContent = "Teacher name is mandatory and alphabets only ";
            teid.style.color = "red";
            document.getElementById("teachername").focus();
        }
		//if teachername is entered correctly, it shows nothing below the text box.
        else{
            teid.textContent = "";
        }
    }
	//for validating class.
    function Cval(){
		//assing class to the variable classval.
        classval = document.getElementById('cls').value;
		//if teacher name is blank then it shows the messege in red color below the textbox.
        if (classval == "") {
            clid.textContent = "class is mandatory ";
            clid.style.color = "red";
            document.getElementById("cls").focus();
        }
		//if teachername is entered correctly, it shows nothing below the text box.
        else{
            clid.textContent = "";
        }
    }
	//for validating phone number.
    function Pval(){
		//assing phone number to the variable phonenumber.
        phonenumber = document.getElementById('phn').value;
		//if the entered phone number is not numbers then it shows the messege in red color below the textbox.
        if ((isNaN(phonenumber))) {
            phid.textContent = "enter numbers only ";
            phid.style.color = "red";
            document.getElementById("phn").focus();
        }
		//if phonenumber is entered correctly, it shows nothing below the text box.
        else{
            phid.textContent = "";
        }
    }
	//for validating gender.
    function Gval(){
		//assing gender to the variable Gender.
        Gender = document.getElementById('gen').value;
		//if the gender value is not in alphabets then it show the messege in red color below the textbox.
        if ((!isNaN(Gender))) {
            geid.textContent = "Gender allows alphabets only ";
            geid.style.color = "red";
            document.getElementById("gen").focus();
        }
		//if the gender is entered correctly, it shows nothing below the text box.
        else{
            geid.textContent = "";
        }
    }
//pdf printing function.
function printteacher() {
	//as teacher and class fields are mandetory, printing pdf will be done when teacher and class fields are not blank. 
    if (teacherName != "" && classval != ""){
	//assigning the teacher value to the id "teacherval".
	$("#teacherval").text(teacherName);
	//assigning the class value to the id "classval".
	$("#classval").text(classval);
	//assigning the subject value to the id "subjectval".
	$("#subjectval").text(subject);
	//assigning the phonenumber value to the id "phoneval".
	$("#phoneval").text(phonenumber);
	//assigning the gender value to the id "geneval".
	$("#generval").text(Gender);
    //creating a object.
    var doc = new jsPDF('p', 'mm', [800, 900]);
	//taking the values from the id "divprint" to print.
    doc.fromHTML($("#divprint").html(), 30, 30, {
        "width": 170
    });
	//for saving the pdf with the name of teacher.
    doc.save(teacherName +  ".pdf");
    }

}