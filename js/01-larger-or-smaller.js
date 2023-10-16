var first= parseInt(window.prompt("Enter the First Number: "));
var second= parseInt(window.prompt("Enter the Second Number: "));


if (second>first){
    window.document.write(second+" is larger.<br>");
}
else if (first>second){
    window.document.write(frist+" is larger.<br>");
}
else if(first===second){
    window.document.write("Integer1 and integer2 are equal");
}