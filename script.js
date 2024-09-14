let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
  const form = document.getElementById("form");
  let userInput = document.getElementById("user-input");
  let btn = document.getElementById("btn");
  let newBtn = document.getElementById("newBtn");
  let result = document.getElementById("message");
  let attempt = document.getElementById("attempt");
  let attemptNumber = 10;
  let previous = document.getElementById("prevGuess");
 let prevGuess = [];
 
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let guess = parseInt(userInput.value);
  
  prevGuess.push(guess);
  console.log(prevGuess)
  
 previous.innerHTML = prevGuess.join(', ');
 userInput.value = ""
  
  if (isNaN(guess)) {
    alert("Please Enter A Valid Number!");
  } else if (guess < 1) {
    alert("Please Enter A Number More Than 1!");
  } else if (guess > 100) {
    alert("Please Enter A Number Less Than 100!");
  } else if (guess === randomNumber) {
    result.innerHTML = `Congratulations! <br> You guessed the correct number: ${randomNumber}`
    endGame();
    
  } else if (guess < randomNumber) {
    attemptNumber--
    result.innerHTML = "Too Low!"
    attempt.innerHTML = attemptNumber;
  } else if (guess > randomNumber) {
    attemptNumber--
    result.innerHTML = "Too High!"
    attempt.innerHTML = attemptNumber;
  };
  
  if (attemptNumber === 0 && guess !== randomNumber) {
    result.innerHTML = `Game Over! <br> The correct number was ${randomNumber}.`
    endGame()
  };
  })
  
  function endGame() {
    userInput.disabled = true;
    btn.disabled = true;
    newBtn.style.display = 'block';
  }
  
  function newGame() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber)
    attemptNumber = 10;
    userInput.disabled = false;
    btn.disabled = false;
    userInput.value = "";
    result.innerHTML = "";
    previous.innerHTML = "";
    prevGuess = [];
    newBtn.style.display = 'none';
  }