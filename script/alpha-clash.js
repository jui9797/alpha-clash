// step-1 hide the home screen. to hide the screen add the class hidden to the home section
// show the playground
// function play(){
//     // console.log('play start now')
//     const homeSection= document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection)
//     const playgroundSection=document.getElementById('play-ground')
//     // console.log(playgroundSection.classList)
//     playgroundSection.classList.remove('hidden')

// }


// function handleKeyboardPress(){
//     console.log('button pressed')
// }
function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);

//   stop the game if pressed "Esc"
if(playerPressed==='Escape'){
    gameOver();
}

  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  // console.log(currentAlphabetElement)
  console.log(playerPressed, expectedAlphabet);
  // checked match or not
  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");

    const currentScore =getTextElementValueById('current-score')
    console.log(currentScore);
    const updatedScore= currentScore +1;
    setTextElementValueById('current-score', updatedScore)


    // .........................................
    // console.log('you have pressed correctly', expectedAlphabet)

    // updated score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // const newScore = currentScore + 1;
    //  currentScoreElement.innerText=newScore;
    
    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you lost a life");
    const currentLife =getTextElementValueById('current-life')
    const updatedLife=currentLife-1;
    setTextElementValueById('current-life', updatedLife)

    if(updatedLife===0){
        gameOver();
    }

    // ............................................
    // update life
    // const currentLifeElement =document.getElementById('current-life')
    // const currentLifeText =currentLifeElement.innerText
    // const currentLife =parseInt(currentLifeText)
    // console.log(currentLife)
    // const newLife=currentLife-1;
    // currentLifeElement.innerText=newLife;
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  // step-1 generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("your random alphabet", alphabet);
  // display the random alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  // set background color
  setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only play ground
    hiddenElementById("home-screen");
    hiddenElementById('final-score')
    showElementById("play-ground");

    // reset score and life after game over
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score',0)
    continueGame();
}

function gameOver(){
    hiddenElementById('play-ground');
    showElementById('final-score')
    // update final score
    // get the last score
    const lastScore =getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet=getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
