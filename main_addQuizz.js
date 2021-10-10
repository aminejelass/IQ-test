
 var arr = [];
 var quizzs=[];

 function Quizz (id,subj,choices,index,img)
{
	q = {};

	q.id=id;subj=subj;
	q.choices=choices;
	q.index_true=index;
	q.img=img;
	q.mix=mix;
	return q;

}

var mix =function  ()

{

	var x = Math.floor(Math.random()*4)

	for(var i = 0 ; i <=x ; i++)
	{
		 trans(this.choices);
	}


}



function check()
{
	return $("#ch_txt").val()!==""
}

 function add_ch() {
  
  if(check())
{ 
	$("#ch_txt").css("background-color","")
 	var x = $("#ch_txt").val();
 	$("#ch_txt").val("")
    var ch= $("#ch")
    arr.push(x)
    ch.html("")

    if(arr.length<4)
    {
    	   
  	
  	    var htt;

    for(var i = 0 ; i<arr.length ; i++)
   	   {   
    	htt=""
    	htt='<tr><td><div id= "opt">'+arr[i]+'</div></td>'+'<td><input type="radio" id="html" name="choice" value="HTML"></td></tr>'

    	ch.append(htt);
   	   }

    }


   else  {
   				alert("you can' t enter more than 4 choices")
   				$("#ch_txt").css("background-color","red")
			 	

 		}
}
 else  {  $("#ch_txt").css("background-color","red")}
}

function reset()
{
	$("#ch_txt").css("background-color","")
$("#inp_id").val("")
$("#inp_obj").val("")
$("#inp_true").val("")
$("#inp_img").val("")
$("#ch_txt").val("")
$("#ch").html("")
arr = []
}


function addquizz ()
{
	var q = Quizz($("#inp_id").val(),$("#inp_obj").val(),$("#inp_true").val(),$("#inp_img").val(),$("#ch_txt").val()) 
}
