// give a counter to the button
var counter=0;
var button =document.getElementById("counter");
button.onclick=function(){
    
    //make a request to the counter end point
    
    //capture the response ans store it in a variable
    
    //render the variable in the correct span
    
  counter=counter+1;  
  var span=document.getElementById("count");
  span.innerHTML=counter.toString();
};