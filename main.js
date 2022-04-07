

const inputNumber = () => {
    return new Promise((resolve, reject) => {
      const number = Number(prompt("Enter a number (1 - 6):")); 
      const randomNumber = Math.floor(Math.random() * 6 + 1); 
  
      if (isNaN(number)) {
        reject(new Error("Wrong Input Type")); 
      }
  
      if (number === randomNumber) { 
        resolve({
          score: 2,
          randomNumber,
        });
      } else if (number === randomNumber - 1 || number === randomNumber + 1) { 
        resolve({
          score: 1,
          randomNumber,
        });
      } else { 
        resolve({
          score: 0,
          randomNumber,
        });
      }
    });
  };
  
  const continueGame = () => {
    return new Promise((resolve) => {
      if (window.confirm("Do you want to continue?")) { 
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };
  
  const resultScore = async () => {
    try {
      const result = await inputNumber(); 
  
      alert(`Guess: ${result.randomNumber} -> Score ${result.score} score`);
  
      const toContinue = await continueGame();
  
      if (toContinue) {
        handleGuess();
      } else {
        alert("Game ends");
      }
    } catch (error) { 
      alert(error);
    }
  };
  
  resultScore();