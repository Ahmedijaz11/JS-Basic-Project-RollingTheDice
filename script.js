'use strict';

//Selecting Elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');


const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');

const diceEL = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');


//starting Conditions
score0EL.textContent= 0;
score1EL.textContent= 0;
diceEL.classList.add('hidden');

const scores = [0 , 0];
let currentScore = 0;
let activePlayer = 0;

btnroll.addEventListener('click', function () {

    // 1. Genrating A Random Dice Roll

    const diceNum = Math.trunc(Math.random() * 6) + 1;


    // 2. Display Dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${diceNum}.png`; 


    // 3. Check for rolled, if not 1, add score to current score and if rolle become 1 then switch player

    if(diceNum != 1) {

        //Add dice number to current score
        
     currentScore = currentScore + diceNum;
     
    document.getElementById(`current--${activePlayer}`).textContent= currentScore;

        //current0EL.textContent = currentScore;
    }

    
    else {
        // switch the player
        document.getElementById(`current--${activePlayer}`).textContent= 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
        

    }



    });