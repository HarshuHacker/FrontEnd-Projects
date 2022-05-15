count1=0
count2=0
outercircle=document.getElementById("outer-circle")
var innercircle=document.getElementById("inner-shape")
changecolour=document.getElementById("button1")
changeshape=document.getElementById("button2")

changecolour.addEventListener("click",func1)
changeshape.addEventListener("click",func2)

function func1()
{
  if(count1==0)
  {
    outercircle.style.backgroundColor=("red")
    console.log("Colour Changed To Red")
    count1=1
  }

  else if(count1==1)
  {
    outercircle.style.backgroundColor=("blue")
    console.log("Colour Changed To Blue")
    count1=2
  }
  else if(count1==2)
  {
    outercircle.style.backgroundColor=("green")
    console.log("Colour Changed To Green")
    count1=0
  }
}

function func2()
{
  if(count2==0)
  {
    innercircle.style.height=("0px")
    innercircle.style.width=("0px")
    innercircle.style.backgroundColor=("transparent")
    innercircle.classList.add("triangle-shape")
    console.log("Shape Changed To Triangle")
    count2=1
  }

  else if(count2==1)
  {
    innercircle.style.height=("190px")
    innercircle.style.width=("190px")
    innercircle.style.backgroundColor=("white")
    innercircle.classList.remove("triangle-shape")
    innercircle.classList.add("circle-shape")
    console.log("Shape Changed To Circle")
    count2=2
  }
  else if(count2==2)
  {
    innercircle.classList.remove("circle-shape")
    console.log("Shape Changed To Square")
    count2=0
  }
}