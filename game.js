var list = JSON.parse(localStorage.getItem('quizzs'));
$(".container").empty()

$( document ).ready(desplay ())

function renderquizz(q,j)
{   $(".container").append(`<div class="quizz" ></div>`)
    $(".container > .quizz").append(`<div class="des" >`+q.id+" "+q.subj+`</div>`) 
    $(".container > .quizz").append(`<div class="img"><img src="`+q.img+`"></div>`)
    for(var y = 0 ; y<q.choices.length;y++)
    {
    	$(".container > .quizz").append(`<div class="ques`+j+`" >`+q.choices[y]+`<input type="radio" id="`+j+`" name="`+j+`" value="`+q.choices[y]+`">
</div>`)

    }
   
}

function desplay ()
{
	$(".container").empty()
	 chrono()

	for (var i= 0 ; i<list.length;i++)
	{
		renderquizz(list[i],i)
		console.log(list[i])
	}
}


function calculate()
{
	var score=0;

	for(var i = 0 ; i<list.length ; i++)
	{
		
			
			if ($('input[name="'+i+'"]:checked').val() === list[i].index_true)
			{
				score+=15;
				console.log("yeaah")
			}
	}

 return score   

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
 			localStorage.setItem('score', JSON.stringify(calculate()));
 			window.location.href = "score.html";
			return false;
 		}	
	 }, 1000);
}