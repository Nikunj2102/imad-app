// give a counter to the button
var button =document.getElementById("counter");
button.onclick=function(){
    
    //create a request to the counter end point
    
    var request=new XMLHttpRequest();
    
    //capture the response ans store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          
          // we take some action
          if(request.status===200)
          {
              var counter = request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
        }
          
      };
      
      //make a request
      request.open("GET", "nikunjdhingra21.imad.hasura-app.io/counter", true);
      request.send(null);
     
};