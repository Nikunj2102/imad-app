console.log('Loaded!');

// using get element by id method

var element = document.getElementById("main-text");
element.innerHTML = "new value";

// Move the image
var marginLeft = 0;
function moveRight()
{
  marginLeft = marginLeft + 10;
  image.style.marginLeft= marginLeft + 'px';
}

var image = document.getElementById("madi");
image.onclick = function(){
    var interval = setInterval(moveRight ,200);
};