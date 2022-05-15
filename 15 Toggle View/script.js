// var p1=document.querySelector("body>p")
// p1.textContent="<i><b>Hi &ensp; fejf</b></i>"

// // $('#p2').html("Harsh")



// var d=$("div")

// d.css({
//     width:"100px",
//     height:"100px",
//     backgroundColor:"red"
// })

// console.log(d.width())


function fetchImage()
{
    var req=new XMLHttpRequest()
    req.onload=function(){
        var jsonResponse=JSON.parse(req.response)
        console.log(jsonResponse.message)
        $("#dog-image").attr("src",jsonResponse.message)
    }

    req.open("get","https://dog.ceo/api/breeds/image/random")
    req.send()
}

$("#fetch-button").click(fetchImage)