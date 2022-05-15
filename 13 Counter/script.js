var start=document.getElementById("start-button")
start.addEventListener("click",startCounter)
start.addEventListener("mousedown",function(){
  start.style.opacity="0.5"
})
start.addEventListener("mouseup",function(){
  start.style.opacity="1"
})

var flag=true
var countInterval
var resetbutton=document.getElementById("reset-button")
resetbutton.addEventListener("mousedown",function(){
  resetbutton.style.opacity="0.5"
})
resetbutton.addEventListener("mouseup",function(){
  resetbutton.style.opacity="1"
})
resetbutton.addEventListener("click",function(){
  var curr=document.getElementsByClassName("curr")
  var next=document.getElementsByClassName("next")
  flag=false
  reset(curr,next)
})


window.addEventListener("keydown",function(){
  if(event.key==="Enter")
  {
    event.preventDefault()
    startCounter()
  }
  else if(event.key==="Escape")
  {
    var curr=document.getElementsByClassName("curr")
    var next=document.getElementsByClassName("next")
    flag=false
    reset(curr,next)
  }
})

function startCounter()
{
  start.style.display="none"
  var number=parseInt(document.querySelector("#number-input input").value)
  if(isNaN(number))
  {
    start.style.display="block"
    alert("Please Enter A Number")
    clearInterval(countInterval);
    return
  }

  if(number<1 || number>99999)
  {
    start.style.display="block"
    alert("Please Enter The Number Within 1 To 99999")
    clearInterval(countInterval);
    return
  }
  var curr=document.getElementsByClassName("curr")
  var next=document.getElementsByClassName("next")
  var count=0

  countinterval=setInterval(function(){
    if(number===count)
    {
      start.style.display="block"
      alert("Times Up")
      reset(curr,next)
      clearInterval(countinterval)
      return
    }
    if(flag==false)
    {
      start.style.display="block"
      clearInterval(countinterval)
      for(i=0;i<5;i++)
      {
        curr[i].innerText=0
        next[i].innerText=1
      }
      flag=true
      return
    }
    increaseCount(curr,next,4)
    count+=1
  },1000)

}

function increaseCount(curr,next,index)
{
  let current=curr[index]
  let nextno=next[index]

  if(current.innerText==9)
  {
    increaseCount(curr,next,index-1)
  }

  nextno.classList.add("animate")

  setTimeout(function(){
    current.innerText=nextno.innerText
    nextno.classList.remove("animate")
    nextno.innerText=parseInt(nextno.innerText)+1
    if(nextno.innerText>9)
    {
      nextno.innerText=0
    }
  },500)
}

function reset(curr,next)
{
  clearInterval(countInterval)
  for(i=0;i<5;i++)
  {
    curr[i].innerText=0
    next[i].innerText=1
  }
  document.querySelector("#number-input input").value=""
  alert("Counter Reset Sucessfully !!")
}