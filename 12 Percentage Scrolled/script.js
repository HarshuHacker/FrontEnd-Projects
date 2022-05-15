var scrolledBar = document.getElementById("scrolled");

function getDocHeight() 
{
    var D = document;
    return Math.max(D.body.scrollHeight, D.body.offsetHeight, D.body.clientHeight);
}

function setScrolled() 
{
    var scrolled = Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    scrolledBar.innerText = scrolled;
}

var docHeight = getDocHeight();
var windowHeight = window.innerHeight;
window.addEventListener("scroll", setScrolled);