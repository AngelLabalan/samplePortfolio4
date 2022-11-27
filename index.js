let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImg1 = "images/" + "dice" + randomNumber1 + ".png";
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImg2 = "images/" + "dice" + randomNumber2 + ".png";
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2);

if(randomImg1 > randomImg2){
	document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
} else if (randomImg2 > randomImg1){
	document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
} else {
	document.querySelector("h1").innerHTML = "TIE 🫰"
}

