var list = JSON.parse(localStorage.getItem('quizzs'));

$( document ).ready(desplay ())

function renderquizz(q)
{   $(".container").append(`<div class="quizz" ></div>`)
    $(".container > .quizz").append(`<div class="des" >`+q.id+" "+q.subj+`</div>`)
    console
    $(".container > .quizz").append(`<div class="img"><img src="`+q.img+`"></div>`)
    for(var i = 0 ; i<q.choices.length;i++)
    {
    	$(".container > .quizz").append(`<div class="ques`+i+`" >`+q.choices[i]+`<input type="radio" id="html" name="fav_language" value="`+q.choices[i]+`">
</div>`)

    }
}

function desplay ()
{
	for (var i= 0 ; i<list.length;i++)
	{
		renderquizz(list[i])
	}
}


function chrono()
{
	var ch = $(".chrono")
	var time = 30;
	setInterval(function(){ 
		    ch.html("")
 			ch.append('<div id="timer">'+time+'S </div>');
 		if(time>0)
 		{	
 			time--;
 		}
 		else{
			return false;
 		}	
	 }, 1000);
}