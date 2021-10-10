function dipq()
{
   for(var i = 0 ; i < list.length ; i++)
   {
   	 rederquizz(quizzlist[i])
   }
}



function rederquizz(q,o)
{
   o.append( `<tr colspan="2">
	  	<td><div id="img"> <img src="`+q.img+`"></div></td>
	  </tr>

	  <tr colspan="2" >
	  	<td><div id="subj"><p>`+q.subj+`</p></div></td>
	  </tr>
	  <tr>
	  	<td><div id="ch1"> `+q.choices[0]+` <input type="radio" id="html" name="choice" value="`+q.choice[0]+`"> </div></td>
	  	<td><div id="ch2">`+q.choices[1]+` <input type="radio" id="html" name="choice" value="`+q.choice[1]+`"></div></td>
	  </tr>
	  <tr>
	  	<td><div id="ch3">`+q.choices[2]+` <input type="radio" id="html" name="choice" value="`+q.choice[2]+`"></div></td>
	  	<td><div id="ch4">`+q.choice[3]+` <input type="radio" id="html" name="choice" value="`+q.choice[3]+`"></div></td>`)


}

