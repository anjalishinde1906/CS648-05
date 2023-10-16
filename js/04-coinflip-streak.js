var Flip;
do{
    Flip=Math.round(Math.random());
    if(Flip===0){
        window.document.write("Heads<br>");
    }
    else if(Flip===1){
        window.document.write("Tails<br>");
    }
    window.document.write("Flip number of coin was: "+Flip+"<br>");
}while(Flip!==1);