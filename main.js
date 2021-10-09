function Quizz (id,subj,choices,index)
{
	q = {};
	q.id=id;
	q.subj=subj;
	q.choices=choices;
	q.index_true=index;
	q.mix=mix;
	return q;

}



function trans(arr)
{
	
	
	for(var i = 0 ; i<arr.length-1 ; i++)
	{
 		arr[i]=arr[i+1]
	}
	 

	return arr;
}

function mix ( arr )

{
	var x = Math.floor(Math.random()*4)
	console.log(x)
	var s = arr[0]


	for(var i = 0 ; i >= x ; i++)
	{	
		console.log("i "+i)
		s = arr[0]

		 for(var j = 0 ; j<arr.length-1 ; j++)
		{
 			arr[j]=arr[j+1]
		}
		arr[arr.length-1]=s;
	}

	return arr;

}

