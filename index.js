var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var diceName;
var diceName2;
if(randomNumber1==1){
  diceName="images/dice1.png";
}
else if(randomNumber1==2){
  diceName="images/dice2.png";
}
else if(randomNumber1==3){
  diceName="images/dice3.png";
}
else if(randomNumber1==4){
  diceName="images/dice4.png";
}
else if(randomNumber1==5){
  diceName="images/dice5.png";
}
else if(randomNumber1==6){
  diceName="images/dice6.png";
}
var img1=document.querySelector(".img1");
img1.setAttribute("src",diceName);//as both are not fileName ,they are variable name so its not written between Double Quotes

if(randomNumber2==1){
  diceName2="images/dice1.png";
}
else if(randomNumber2==2){
  diceName2="images/dice2.png";
}
else if(randomNumber2==3){
  diceName2="images/dice3.png";
}
else if(randomNumber2==4){
  diceName2="images/dice4.png";
}
else if(randomNumber2==5){
  diceName2="images/dice5.png";
}
else if(randomNumber2==6){
  diceName2="images/dice6.png";
}

var img2=document.querySelector(".img2");
img2.setAttribute("src",diceName2);//as both are not fileName ,they are variable name so its not written between Double Quotes


var h1_Prop=document.querySelector("h1");
if(randomNumber1>randomNumber2){
 h1_Prop.innerHTML="🚩Player 1 Wins!";
}
else  if(randomNumber1<randomNumber2){
  h1_Prop.innerHTML="Player 2 Wins!🚩";
}
else if(randomNumber1==randomNumber2){
  h1_Prop.innerHTML="Draw!";
}
