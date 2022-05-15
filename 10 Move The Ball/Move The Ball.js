var ball=document.getElementById("ball")

ball.style.top=ball.offsetTop
ball.style.left=ball.offsetLeft

ballHeight=ball.offsetHeight
ballWidth=ball.offsetWidth

window.addEventListener("keydown",function()
{
  if(event.key==="w" || event.key==="W" || event.key==="ArrowUp")
  {
    if(ball.offsetTop>5)
    {
      console.log(ball.offsetTop)
      ball.style.top=(ball.offsetTop-5)+"px"
    }
  }
  else if(event.key==="s" || event.key==="S" ||event.key==="ArrowDown")
  {
    if(ball.offsetTop<window.innerHeight-ballHeight-5)
    {
      console.log(ball.offsetTop)
      ball.style.top=(ball.offsetTop+5)+"px"
    }
  }
  else if(event.key==="a" || event.key==="A" ||event.key==="ArrowLeft")
  {
    if(ball.offsetLeft>5)
    {
      console.log(ball.offsetLeft)
      ball.style.left=(ball.offsetLeft-5)+"px"
    }
  }
  else if(event.key==="d" || event.key==="D" ||event.key==="ArrowRight")
  {
    if(ball.offsetLeft<window.innerWidth-ballWidth-5)
    {
      console.log(ball.offsetLeft)
      ball.style.left=(ball.offsetLeft+5)+"px"
    }
  }
})