curr=false

var but=document.getElementById("toggle-circle")
var togle=document.getElementById("toggle")
var bodyColor=document.getElementsByTagName("body")[0]
var heading=document.getElementsByTagName("h1")[0]
console.log(bodyColor)
but.addEventListener("click",toggle)
function toggle()
{
  if(curr==false)
  {
    bodyColor.classList.add("colour-black");
    heading.classList.add("colour-white")
    togle.style.backgroundColor="white"
    togle.style.border="3px solid white"
    but.style.backgroundColor="black"
    but.style.marginLeft="30px"
    curr=true
  }
  else
  {
    bodyColor.classList.remove("colour-black");
    heading.classList.remove("colour-white")
    togle.style.backgroundColor="black"
    togle.style.border="3px solid black"
    but.style.backgroundColor="white"
    but.style.marginLeft="0px"
    curr=false
  }
}