var Flip=Math.floor(Math.random() * 10);
var select=window.prompt("select your preference(Heads or Tails)");

if((Flip < 5)){
        if(select==="Heads"){
            window.alert("That's correct flip of heads...win!");
        }
        else{
            window.alert("That's wrong flip was heads but you chose tails..lose!");
        }
}

else if(Flip > 5){
        if(select==="Tails"){
        window.alert("That's correct flip of tails...you win!");
        }
        else{
        window.alert("Thats wrong flip tails but you chose heads...you lose!");
        }
}

window.document.write("Coin Flip Number was: "+Flip);