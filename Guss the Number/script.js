let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#submitGuess');
const userInput = document.querySelector('#guessInput');
const guessSlot = document.querySelector('#previousGuesses');
const remaining = document.querySelector('#guessesRemaining');
const lowORhigh = document.querySelector('.lowORhigh');

const startOver =document.querySelector('.restart');

let prevGuess = [];
let numGuesses = 1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number !!')
    }
    else if(guess<1){
        alert('Please enter a number greater than 1')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess);
        if(numGuesses===11){
            displayGuess(guess);
            displayMessage(`Game over !!! number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`YOU GUSSED IT RIGHT :)`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage('Number is too Low...')
    }
    else if(guess > randomNumber){
        displayMessage('Number is too High...')
    }
}

function displayGuess(guess){
    userInput.value='' //clean up 
    guessSlot.innerHTML+=`${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${11-numGuesses}`
}

function displayMessage(message){
    lowORhigh.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    playGame=false;
    newGame();

}

function newGame(){
    startOver.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuesses=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuesses}`;
        userInput.removeAttribute('disabled');
        playGame=true;
    })
}
