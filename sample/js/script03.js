$(function(){
    let hako=0;

    $("button01").on("click",function(){
        for(let i=0;i<13;i++){
            hako=hako+5;
        }
    $("#content").text(hako);
})

$("#button02").on("click",function(){
    for(let i=0;i<12;i++){
    hako=hako+1;
    }
    $("#content").text(hako);
})
$("button03").on("click",function(){
    setInterval(function(){
        hako=hako+2;
        $("#content").text(hako);
    },1000)
})

$("button04").on("click",function(){
    hako=0;
    $("#content").text(hako);
})


  
})