//your JS code here. If required.
let para = document.getElementById('counter');
let btn = document.getElementById('incrementBtn');

   
	let count =0;
  btn.addEventListener('click',()=>{
	   count++;
	  para.textContent=count;
	  alert(count);
  })