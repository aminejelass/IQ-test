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
	var x = arr[0]
	
	for(var i = 0 ; i<arr.length-1 ; i++)
	{
 		arr[i]=arr[i+1]
	}
	 arr[arr.length-1]=x;

	return arr;
}

function mix ()

{
	var x = Math.floor(Math.random()*4)

	for(var i = 0 ; i <=x ; i++)
	{
		 trans(this.choices);
	}


}

