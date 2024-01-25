const questions = [
    {
        question: "1. When is Republic Day celebrated in India?",
        options: ["January 15", "January 26", "February 1", "March 2"],
        correctAnswer: 1 // January 26 is the correct answer
    },
    {
        question: "2. What does the term 'Republic' in Republic Day signify?",
        options: ["A day off for the public", "The head of the government", "People's rule", "A democratic system"],
        correctAnswer: 2 // People's rule is the correct answer
    },
    {
        question: "3. Who was the chief guest at the Republic Day parade in 2022?",
        options: ["Joe Biden", "Emmanuel Macron", "Scott Morrison", "Boris Johnson"],
        correctAnswer: 0 // Joe Biden was the chief guest in 2022
    },
    {
        question: "4. In which year did the first Republic Day parade take place in India?",
        options: ["1947", "1950", "1955", "1960"],
        correctAnswer: 1 // The first Republic Day parade took place in 1950
    },
    {
        question: "5. What is the significance of the 'Beating Retreat' ceremony held after Republic Day?",
        options: ["Marking the end of Republic Day celebrations", "A military exercise", "Honoring war heroes", "Symbolizing the retreat of the British Army"],
        correctAnswer: 0 // It marks the end of Republic Day celebrations
    },
];


let currentQuestion = 0;
let correctAnswers = 0;

function loadQuestion() {
    const questionElem = document.getElementById("question");
    const answersElem = document.getElementById("answers");
    const resultElem = document.getElementById("result");

    questionElem.textContent = questions[currentQuestion].question;

    answersElem.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const option = document.createElement("div");
        option.className = "option";
        option.textContent = questions[currentQuestion].options[i];
        option.onclick = () => selectAnswer(i);
        answersElem.appendChild(option);
    }

    resultElem.textContent = "";
}

function selectAnswer(index) {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;

    if (index === correctAnswerIndex) {
        correctAnswers++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElem = document.getElementById("result");
    resultElem.textContent = `You got ${correctAnswers} out of ${questions.length} correct answers.`;

    // Check if the user is considered Indian
    if (correctAnswers >= 2) {
        resultElem.textContent += " Congratulations! You are considered Indian.\n";
    } else {
        resultElem.textContent += " \nSorry, you need more knwoledge.";
    }

    // Optionally, you can add more styling or interactions based on the result
}

function submitAnswer() {
    const selectedOption = document.querySelector(".option.selected");

    if (selectedOption) {
        const selectedIndex = Array.from(selectedOption.parentNode.children).indexOf(selectedOption);
        selectAnswer(selectedIndex);
    }
}

document.addEventListener("DOMContentLoaded", loadQuestion);
