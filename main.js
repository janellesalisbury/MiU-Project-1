// Janelle Salisbury
// MiU 
// Project 1
// 1109


function storeItems(id){
    var name      = document.getElementById("name").value;
    var date      = document.getElementById("date").value;
    var quantity  = document.getElementById("quantity").value;
    var purchased = document.getElementById("purchased").value;
    var notes     = document.getElementById("notes").value;
    var parts     = document.getElementById("parts").value;
    if (name == ""){ 
        document.getElementById("name").style.border = "3px solid red";
        var encourage = prompt("Please enter a name.", "");
        if (encourage != "") {
            document.getElementById("name").value = encourage;
        }
        return false;
    }else {
        document.getElementById("name").style.border = "3px double cyan";
    }
    if (date == ""){
        document.getElementById("date").style.border = "3px solid red";
        var encourage = prompt("Please enter a date.","");
        if (encourage != ""){
            document.getElementById("date").value = encourage;
        }
        return false;
    }else{
        document.getElementById("date").style.border = "3px double cyan";
    }
    if (quantity == ""){
        document.getElementById("quantity").style.border = "3px solid red";
        var encourage = prompt("Please enter qunatity.","");
        if (encourage != ""){
            document.getElementById("quantity").value = encourage;
        }
        return false;
    }else{
        document.getElementById("quantity").style.border = "3px double cyan";
    }
    if (purchased= ""){
        document.getElementById("purchased").style.border = "3 px solid red";
        var encourage = prompt("Please select purchased.","");
        if (encourage != ""){
            document.getElementById("purchased").value = encourage;
        }
        return false;
    }else{
        document.getElementById("purchased").style.border = "3px double cyan";
    }

    localStorage.setItem("appName",name);
    localStorage.setItem("appDate",date);
    localStorage.setItem("appquantity", quantity);
    localStorage.setItem("apppurchased", purchased);
    localStorage.setItem("appnotes", notes)
} 

// fixed the .values that were in the incorrect places 
// can't get this project into github. Same problem as before 


function getItems(){
    if (localStorage.getItem("appname")){
        var name      = localStorage.getItem(appname);
        var date      = localStorage.getItem(appdate);
        var quantity  = localStorage.getItem(appquantity);
        var purchased = localStorage.getItem(apppurchased);
        var notes     = localStorage.getItem(appnotes); 
    }
    var viewForm;[
     name,
     date,
     quantity,
     purchased,
     notes,
  ];
  
// collapsing the form
document.getElementById("main").style.display = "none";
  document.getElementById("clear").style.display = "block";
  var clearLink = document.getElementById("clear");
    for var i = 0, j = viewForm.length; i<j; i++){
        var newPara = document.createElement("p");
        var itemTxt = document.createTextNode(viewInfo[i]);
      newPara.appendChild(itemTxt);
      getListdiv.appendChild(newPara);
    }
 
    alert(viewForm);
}
function clearLocal(){
    localStorage.clear();
    return false
}

// add delete
var deleteLink = document.createElement("a");
var sethref = deleteLink.setAttribute("href", "#");
var setOnClick = deleteLink.setAttribute ("onclick", "deleteItem" + key + ");");
var deleteText  = document.createTextNode("deleteItem");
    deleteLink.appendChild(deleteText);
    newDiv.appendChild(deleteLink);
// edit single item   
var editLink = document.createElement("a");
var setEdithref = editLink.setAttribute("href","#");
var setEditOnclick = editLink.setAttribute("onclick", "editItem" + key+ ");");
var editText = document.createTextNode("editItem");
    editLink.appendChild(editText);
    newDiv.appendChild(editLink);
// edit single items    
function editItem(id){
    var value = localStorage.getItem(id);
    var itemId = id;
    //alert (itemId);
    value = value.split(";");
    var catName = value[0];
    var itemName = value[1];
    var itemQty = value[2];
    var purchaseDate = value[3];
    var notes = value[4];
    

}


