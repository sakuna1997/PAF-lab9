$(document).ready(function()
{	
	if ($("#alertSuccess").text().trim() ==""){
	
			$("#alertError").hide();
		}
		
		$("#alertError").hide();
});

//SAVE

$(document).on("click", "#btnSave", function(event)
{
	//clear alert
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	//form validation
	var status = validateItemForm();
	if (status != true){
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	//if valid
	$("#formItem").submit();
});

//UPDATE

$document.on("click", ".btnUpdate", function(event)
{
	$("#HidItemIDSave").val($(this).closet("tr").find('#hidItemIDUpdate').val());
	$("#itemCode").val($(this).closet("tr").find('td:eq(0)').text());
	$("#itemName").val($(this).closet("tr").find('td:eq(1)').text());
	$("#itemPrice").val($(this).closet("tr").find('td:eq(2)').text());
	$("#itemDesc").val($(this).closet("tr").find('td:eq(3)').text());
});

//CLIENT_MODEL

function validateItemForm()
{
	//code
	if ($("#itemCode").val().trim() == ""){
		return "Insert ItemCode.";
	}
	
	//name
	if($("#itemName").val().trim() == ""){
		return "Insert Item Name.";
	}
	
	// price
	if ($("#itemPrice").val().trim() == "") { 
 		return "Insert Item Price."; 
 	} 
 	
	// is numerical value
	var tmpPrice = $("#itemPrice").val().trim(); 
	if (!$.isNumeric(tmpPrice)) { 
		 return "Insert a numerical value for Item Price."; 
 	} 
 	
	// convert to decimal price
 	$("#itemPrice").val(parseFloat(tmpPrice).toFixed(2)); 
 	
	// description
	if ($("#itemDesc").val().trim() == "") { 
 		return "Insert Item Description."; 
 	} 
	return true; 
}