let randomNum = Math.round(Math.random());
let choice = prompt("Pick heads or tails.");
if (randomNum < 1) {
   randomNum = "heads";
   if (choice === randomNum) {
       window.alert("The flip was heads and you chose heads...you win!");
   } else
   window.alert("The flip was heads and you chose tails...you lost!");

} else {
    randomNum = "tails";
    if (choice === randomNum) {
        window.alert("The flip was tails and you chose tails...you win!");
    } else
    window.alert("The flip was tails and you chose heads...you lost!");
}