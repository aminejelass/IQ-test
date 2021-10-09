
console.log("hhaha")

 var arr = [];
 function add_ch() {
 	var x = $("#ch_txt").val();
 	$("#ch_txt").val("")
    var ch= $("#ch")
    ch.html("")
    if(arr.length<4)
    {
    	

   
    arr.push(x);
    var htt;

    for(var i = 0 ; i<arr.length ; i++)
    {   
    	htt=""
    	htt='<div id= "opt">'+arr[i]+'</div>'+'<input type="radio" id="html" name="fav_language" value="HTML">'
    	ch.append(htt);
    }

    }


   else  {
   				alert("you can' t enter more than 4 choices")
			 

     				var htt;

   				 for(var i = 0 ; i<arr.length ; i++)
   					 {   
    						htt=""
    						htt='<div id= "opt">'+arr[i]+'</div>'+'<input type="radio" id="html" name="fav_language" value="HTML">'
   						ch.append(htt);
    					}
			 }

 }