var x=5; var y=7; var z=x+y; console.log(z);
var A="Hello "; var B="world!"; var C= A+B; console.log(C)

function SumNPrint(x1,x2){
    var x3=x1+x2;
    console.log(x3);
}
SumNPrint(x,y);
SumNPrint(A,B);

if (C.length>z) {
    console.log(C);
} else if (C.length=z) {
    console.log("Good Job!");
} else {console.log(z);}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
    array.forEach((item) => {
      if (item === "Banana") {
        alert("Banana found!");
      }});
}

findTheBanana(L1);
findTheBanana(L2);

function greetingFunc() {
    let d = new Date(); //date
    let h = d.getHours(); //hour
    let greetingMessage = "";
  
    if (6>= h && h < 12) {
      greetingMessage = "Good morning";
    } else if (h >= 12 && h < 18) {
      greetingMessage = "Good afternoon";
    } else if (h >= 18 && h < 22) {
      greetingMessage = "Good evening";
    } else {greetingMessage = "Fancy seeing you here at this hour";}

    greetingMessage += ", my name is Moyo Akoma";
  
    let greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.innerHTML = greetingMessage;
    }
  }

  if (window.location.href.includes("index.html")) {
    greetingFunc();}

  window.addEventListener("load", greetingFunc);

function addYear(){
  document.getElementById("copyYear").innerText = `© ${new Date().getFullYear()} Moyo Akoma`;
}

