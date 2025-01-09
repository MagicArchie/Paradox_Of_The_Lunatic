  // math
        const problems = [
            { question: "27/5 - 24/5", answer: "3/5" },
            { question: "((30/6)^2)/3 - 20/6 ", answer: "5" },
            { question: "18/5 - 14/5", answer: "4/5" },
            { question: "(31/5 + 27/5) - 8/5", answer: "10" },
            { question: "22/5 - 17/5", answer: "1" },
            { question: "21 - (20/5)", answer: "17" },
            { question: "10/6 - 1/6", answer: "3/2" },
            { question: "13 - (12 - 6)", answer: "7" },
            { question: "((31 - 13) + 14)/4", answer: "8" },
            { question: "(29/5 - 12/5) + 3/5", answer: "4" },
            { question: "(29/5 - 11/5) - ((16/2)/5)", answer: "2" },
            { question: "(23 + 10 - 17 + 2)/2", answer: "9" }    
        ];

        // Shuffle array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        let shuffledProblems;
        let currentProblemIndex = 0;

        const startButton = document.getElementById('startButton');
        const inputContainer = document.getElementById('inputContainer');
        const problemElement = document.getElementById('problem');
        const answerInput = document.getElementById('answerInput');
        const submitAnswerButton = document.getElementById('submitAnswer');
        const feedbackElement = document.getElementById('feedback');

        // Start button
        startButton.addEventListener('click', () => {
            startButton.style.display = 'none';
            inputContainer.style.display = 'block';

            shuffledProblems = shuffleArray([...problems]);
            currentProblemIndex = 0;
            displayNextProblem();
        });

        // display next problem
        function displayNextProblem() {
            if (currentProblemIndex < shuffledProblems.length) {
                const currentProblem = shuffledProblems[currentProblemIndex];
                problemElement.textContent = currentProblem.question;
                answerInput.value = "";
                answerInput.focus();
                feedbackElement.textContent = ""; // Clear feedback
            } else {
                endGame();
            }
        }

        // Submit answer button
        submitAnswerButton.addEventListener('click', () => {
            const userAnswer = answerInput.value.trim();
            const currentProblem = shuffledProblems[currentProblemIndex];

            if (userAnswer === currentProblem.answer) {
                currentProblemIndex++;
                displayNextProblem();
            } else {
                feedbackElement.textContent = "Incorrect";
				//endGame();
            }
        });

        // End game
        function endGame() {
            inputContainer.style.display = 'none';
            feedbackElement.textContent = 'Good job! Next hint: rows/columns';
			
			setTimeout(function () {
				localStorage.setItem('MiniGameN1', true);
				window.location.href = "../../../index.html";
			}, 3000);
        }
		
let fullscreenActivated = false;

function mousePressed() {
  if (!fullscreenActivated && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
    fullscreenActivated = true; // Mark as activated
  }
}