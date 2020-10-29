$(function(){

    let txt1="公欠！"
    let txt2="desita!気づいてましたか!!!???"
    let num1= 21;
    let num2= 55;

  function sayhello(){
      $("#content").text("ハローではない時間です。")

  }
  function saysomething(txt){
      $("#content").text(txt);

  }
  function samTwo(arg1,arg2){
      $("#content").text(arg1+arg2);
  }

  $("#button01").on("click",function(){
      sayhello();
  })

  $("#button02").on("click",function(){
      saysomething(txt1);
  })
  $("#button03").on("click",function(){
      samTwo(txt1,txt2)
  })
  $("#button04").on("click",function(){
      samTwo(num1,num2)
  })
  $("#button05").on("click",function(){
      samTwo(txt1,txt2 ,num2+num1)
  })

})