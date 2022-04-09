import RandomNumberGenerator from "./randomNumberGenerator.js";
import EqualityChecker from "./equalityChecker.js";

const button = document.getElementById('submit');
console.log(button);
button.addEventListener('click',() => {
    return new Promise((resolve, reject) => {
      const guessNumber = Number(document.getElementById('guessNumber').value); 
      let randomNumber = new RandomNumberGenerator();
      randomNumber = randomNumber.randomNumber();
      console.log(guessNumber);
      if (guessNumber>6) {
        reject("Wrong Input Type"); 
      }
      else{
        resolve(guessNumber,randomNumber);{      
         let score = new EqualityChecker();
         score = score.isEqualToRandomNumber(guessNumber, randomNumber);
         console.log(score);
          let div = document.getElementById('output');
        //  console.log(div)
          div.innerHTML = `<h5>Random Number Generator : ${randomNumber}</h5>
          <h5> Guessed Number : ${guessNumber}</h5>
          <h5> Score : ${score}<h5>`;
          console.log(div.innerHTML)
        }
      }
    });
  }
)

  
  