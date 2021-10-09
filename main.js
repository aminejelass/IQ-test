function Quizz (id,subj,choices,index,img)
{
	q = {};
	q.id=id;
	q.subj=subj;
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

function trans(arr)
{
	var x = arr
	
	for(var i = 0 ; i<arr.length-1 ; i++)
	{
 		arr[i]=arr[i+1]
	}
	 arr[arr.length-1]=x;

	return arr;
}


function Liste ()
{  

}

