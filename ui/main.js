console.log('Loaded!');

// using get element by id method

var element = document.getElementById("main-text");
element.innerHTML = "new value";

// Move the image

var image = document.getElementById("madi");
image.onclick = function(){
    
    image.style.marginLeft="100px";
};