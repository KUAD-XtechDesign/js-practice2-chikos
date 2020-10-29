$(function(){

    let hako=0;

    function checkBox(){
        if(hako>5){
            $("#content").text(hako+ "つです〜。箱はいっぱいいっぱいお腹つらい。ちょっとお手洗い行きます。");
            hako=0;
        }else if(hako<=0){
            hako=0;
            $("#content").text(hako+"つです〜。じ・つ・は・入ってないんですよ〜。");

        }else{
            $("#content").text(hako+"つですねえ。まだ食べてもいいですか?");

        }
    }

    $("#button01").on("click",function(){
        checkBox()
    })

    $("#button02").on("click",function(){
        hako=hako+1;
        checkBox()
    })

    $("#button03").on("click",function(){
        hako=hako-1;
        checkBox()
    })
})