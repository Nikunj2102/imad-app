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
                //capture a list of names and renderthem as a name
               var names=['name1','name2','name3'];
    var list="";
    for(var i=0;i<names.length;i++)
    {
        list += "<li>" + names[i] + "</li>";
    }
    
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
          }
        }
          
      };
      
      //make a request
      request.open('GET', "http://nikunjdhingra21.imad.hasura-app.io/counter", true);
      request.send(null);
     
};

//submit name

var submit=document.getElementById("submit_btn");
submit.onclick = function(){
  //make a request to the server and send the name
 
    //create a request to the counter end point
    
    var request=new XMLHttpRequest();
    
    //capture the response ans store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          
          // we take some action
          if(request.status===200)
          {     
                //capture a list of names and renderthem as a name
               var names=request.responseText;
               names=JSON.parse(names);
    var list="";
    for(var i=0;i<names.length;i++)
    {
        list += "<li>" + names[i] + "</li>";
    }
    
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
          }
        }
          
      };
      var nameInput=document.getElementById("name");
      var name = nameInput.value;
      //make a request
      request.open('GET', "http://nikunjdhingra21.imad.hasura-app.io/submit-name?name=" +name , true);
      request.send(null);
     
 
};