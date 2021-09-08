/* This is an AJAX (Asynchronous JavaScript and XML)--actually AJAJ (Asynchronous JavaScript and JSON)
   file, but it's still called AJAX--file.  This will allow us to send and receive data on the fly
   without reloading the page. */

/****************************************************************************/
/**** This must be run from a server (you can use Web Server for Chrome) ****/
/****************************************************************************/

//Create a variable to reference the empty table body on the HTML document.
var prodRows = document.getElementById("tbodyRows") ;

/* Create a variable to store the XMLHTTPRequest object (tool available through browsers and is
   used to send and receive data via HTTP. */
var prodRequest ;

//Variable to store the data from the JSON file
var prodData ;

// variable to store sort order ("A" or "D")
var sortOrder = "D" ;

// Store the new XMLHTTPRequest object in the variable
prodRequest = new XMLHttpRequest( ) ;

// Open the request to get data from the server
prodRequest.open("GET", "4315_dem5560.json") ;
// "Process" the data when the XMLHttpRequest object is loaded.

//send the request
prodRequest.send( ) ;

//create function to read through the data from the JSON file and build the table
prodRequest.onload = function( )

{
	//Assign the data to a variable by parsing it.
	prodData = JSON.parse(prodRequest.responseText) ;

	//Display the first element in the array of data from the JSON file
	renderTable(prodData) ;
}
	

//function to read the data from the JSON file that was stored in the prodData variable
function renderTable(data)
    {
        var prodRowData = "";

        for (i = 0; i<data.length; i++)
            {
                prodRowData += "<tr><td>" + data[i].prodID + "</td><td>" + "<img src=" +data[i].prodImg+ ">" + "</td><td id='prodName"+i+"'>" + data[i].prodName + "</td><td>" + data[i].prodDesc + "</td><td>" + data[i].prodPrice + "</td><td>" + "<input type='text' maxlength='4' size='4' id='ProdQty"+i+"' value='0'" + "</td></tr>";
			}

			
        //insert the data rows into the table body
	    prodRows.innerHTML = prodRowData ;
    }


// confirm Qty

function resetClickable(){
     var txt;
     var r = confirm("Are you sure you want to cancel your selection?");
     if (r == true) {
         document.getElementById("myForm").reset();
     }
     else{

     }
}
function confirmQty( )
{
	
	var q0 = document.getElementById("ProdQty0").value;
    var q1 = document.getElementById("ProdQty1").value;
    var q2 = document.getElementById("ProdQty2").value;
    var q3 = document.getElementById("ProdQty3").value;
    var q4 = document.getElementById("ProdQty4").value;
    var q5 = document.getElementById("ProdQty5").value;
    var q6 = document.getElementById("ProdQty6").value;
    var q7 = document.getElementById("ProdQty7").value;
    var q8 = document.getElementById("ProdQty8").value;
    var q9 = document.getElementById("ProdQty9").value;


    var products = [];

    if(q0 > 0)
    {
        products += document.getElementById("prodName0").innerText + ": Qty " + q0 + "\n";
    }

    if(q1 > 0)
    {
      products += document.getElementById("prodName1").innerText + ": Qty " + q1 + "\n";
    }

    if(q2 > 0)
    {
        products += document.getElementById("prodName2").innerText  + ": Qty " + q2 + "\n";
    }
    if(q3 > 0)
    {
        products += document.getElementById("prodName3").innerText + ": Qty " + q3 + "\n";
    }

    if(q4 > 0)
    {
      products += document.getElementById("prodName4").innerText + ": Qty " + q4 + "\n";
    }

    if(q5 > 0)
    {
        products += document.getElementById("prodName5").innerText  + ": Qty " + q5 + "\n";
    }
    if(q6 > 0)
    {
        products += document.getElementById("prodName6").innerText + ": Qty " + q6 + "\n";
    }

    if(q7 > 0)
    {
      products += document.getElementById("prodName7").innerText + ": Qty " + q7 + "\n";
    }

    if(q8 > 0)
    {
        products += document.getElementById("prodName8").innerText  + ": Qty " + q8 + "\n";
    }
    if(q9 > 0)
    {
        products += document.getElementById("prodName9").innerText  + ": Qty " + q9 + "\n";
    }

    //display qty>0 in alert
    if (products > "")
    {
        alert("You have selected the following products: \n " + products + "\nAre you sure you want to order the following?") ;
    }
 }   

 //Sort (double-click column header to trigger)
sortID.addEventListener("click", function( )
{
    if (sortOrder == "A")   //sort in ascending order
    {
        console.dir(prodData.sort(function(a,b)
        {
            return a.prodID > b.prodID ;
        } )) ;
        sortOrder = "D" ;
    }
    else    //sort in descending order
    {
        console.dir(prodData.sort(function(a,b)
        {
            return a.prodID > b.prodID ;
        }).reverse( )) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}
)
sortName.addEventListener("click", function( )
{
    if (sortOrder == "A")   //sort in ascending order
    {
        console.dir(prodData.sort(function(a,b)
        {
            return a.prodName > b.prodName ;
        } )) ;
        sortOrder = "D" ;
    }
    else    //sort in descending order
    {
        console.dir(prodData.sort(function(a,b)
        {
            return a.prodName > b.prodName ;
        }).reverse( )) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}
)
sortDesc.addEventListener("click", function( )
{
    if (sortOrder == "A")   //sort in ascending order
    {
        console.dir(prodData.sort(function(a,b)
        {
            return a.prodDesc > b.prodDesc ;
        } )) ;
        sortOrder = "D" ;
    }
    else    //sort in descending order
    {
        console.dir(prodData.sort(function(a,b)
        {
            return a.prodDesc > b.prodDesc ;
        }).reverse( )) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}
)
sortPrice.addEventListener("click", function( )
{
    if (sortOrder == "A")   //sort in ascending order
    {
        console.dir(prodData.sort(function(a,b)
        {
            return a.prodPrice > b.prodPrice ;
        } )) ;
        sortOrder = "D" ;
    }
    else    //sort in descending order
    {
        console.dir(prodData.sort(function(a,b)
        {
            return a.prodPrice > b.prodPrice ;
        }).reverse( )) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}
)

