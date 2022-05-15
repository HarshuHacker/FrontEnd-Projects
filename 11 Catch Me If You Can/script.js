var box=document.getElementById("box")
console.log("Hi Its Harsh")

var screenWidth=window.innerWidth
var screenHeight=window.innerHeight

box.addEventListener("mouseover",function(event)
{
  var boxsize=box.getBoundingClientRect()
  var pos=getNewPos(boxsize.width,boxsize.height)
  box.style.top=pos.y+"px"
  box.style.left=pos.x+"px"
})

function getNewPos(boxWidth, boxHeight)
{
  var newX = (Math.random() * screenWidth) + 1 - boxWidth;
    var newY = (Math.random() * screenHeight) + 1 - boxHeight;
  if(newX < 0 || newX>screenWidth-boxWidth-20) 
  {
    newX = 0
  }
  if(newY < 0 || newY>screenHeight-boxHeight-20) 
  {
      newY = 0
  }
  return {x: newX, y: newY};
}