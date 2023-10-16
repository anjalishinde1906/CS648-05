
var Flipno;
var i;
for(i=1;i<=10;i++){
    Flipno=Math.round(Math.random());
    if(Flipno===0){
        window.document.write("Heads<br>");
    }
    else if(Flipno===1){
        window.document.write("Tails<br>");
    }
}