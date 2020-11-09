'use strict';

var highscore = 0

var random_num = null;

var number = document.querySelector('.number');
var message_label = document.querySelector('.message');
var score_label = document.querySelector('.score');
var highscore_label = document.querySelector('.highscore');

var body = document.querySelector('.body');
var score = null;


function init() {
    score = 20;
    random_num = Math.floor(Math.random() * 21);
    if (random_num == 0) {
        random_num += 1;
    }
    console.log(random_num);
    message_label.textContent = "Start guessing...";
    number.textContent = "?";
    score_label.textContent = score;
    body.style.backgroundColor = "#222";
    var guess = document.querySelector('.guess').value = null;
}

init();

document.querySelector('.check').addEventListener('click', function() {
    var guess = document.querySelector('.guess').value;
    
    if (!guess) {
        message_label.textContent = "No number!"
    } else {
        if (guess > 20) {
        
        }
    
        if (guess == random_num) {
            message_label.textContent = '🥳🥳 Correct Number!';
            body.style.backgroundColor = "#60b347";
            if (score > highscore) {
                highscore = score;
                highscore_label.textContent = highscore;
            } else {
               highscore_label = highscore.value;
            } 
    
            number.textContent = random_num;
    
        } else {
            if (guess < random_num) {
                if (score_label.textContent <= 0) {
                    
                } else {
                    message_label.textContent = '↙️↙️ Too Low';
                }
            } else if (guess > random_num) {
                if (score_label.textContent <= 0) {
    
                } else {
                    message_label.textContent = '↗️↗️ Too High';
                }
            }
    
            score = score_label.textContent - 1;
            if (score == 0) {
                message_label.textContent = "You Lose!";
                score_label.textContent = score;
                body.style.backgroundColor = "#ff0066";
            } else if (score > 0) {
                score_label.textContent = score;
            } console.log(score);
        }
    }
});

    

var again = document.querySelector('.again').addEventListener('click', function() {
    init();
    
});
