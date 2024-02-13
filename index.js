array = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
random = Math.floor(Math.random() * array.length);
target1 = document.getElementById("img1");
target1.src = `${array[random]}`;

random2 = Math.floor(Math.random() * array.length);
target2 = document.getElementById("img2");
target2.src = `${array[random2]}`;
// console.log("img1 = "+ target1.src+ " img2 = "+target2.src );

if(random>random2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}else if(random<random2){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}