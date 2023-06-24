const start=document.getElementById("button");

start.addEventListener("click",() => {

    sound();
    let player1=Math.floor(Math.random()*6+1);
    let player2=Math.floor(Math.random()*6+1);
    document.getElementById("p1-image").src=`images/${player1}.png`;
    document.getElementById("p2-image").src=`images/${player2}.png`;

    if(player1>player2){
       var result=document.querySelector("h1")
       result.textContent="🥳 🎊Player 1 is win🎊 🥳";
    }
    else if(player1<player2){
        var result=document.querySelector("h1");
        result.textContent="🥳 🎊Player 2 is win🎊 🥳";
    }
    else{
        var result=document.querySelector("h1");
        result.textContent="😟 Oops!! Game is Draw  😟";
    }
    
});
  
  function sound() {
    let Audio_ = new Audio("sound.mp3");
    Audio_.play();
  }