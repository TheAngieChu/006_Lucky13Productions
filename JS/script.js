/*QUIZ SCRIPT*/

const quizData = [
    {
        question: "What is the most important step of publishing a book?",
        options: ["Outlining", "Writing", "Editing", "Marketing"],
        correctAnswer: "Writing"
    },
    {
        question: "Which of these is not a term for a writing style?",
        options: ["Planner", "Pantser", "Plantser", "Prancer"],
        correctAnswer: "Prancer"
    },
    {
        question: "Which is the most popular distribution platform?",
        options: ["Amazon", "Barnes & Noble", "Apple", "Kobo"],
        correctAnswer: "Amazon"
    },
    {
        question: "What is the most popular genre for readers?",
        options: ["Mystery", "Nonfiction", "Romance", "SciFi"],
        correctAnswer: "Romance"
    },
    {
        question: "Which of these is not a formatting program for books?",
        options: ["Microsoft Word", "PowerShell", "Vellum", "Atticus"],
        correctAnswer: "PowerShell"
    }
];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null; // To keep track of the currently selected option

function startQuiz() {
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(e) {
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }

    selectedOption = e.target;
    selectedOption.classList.add('selected');

    nextButton.disabled = false;
}

function resetState() {
    nextButton.disabled = true;
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    selectedOption = null; // Reset the selected option
}

function showNextQuestion() {
    if (selectedOption && selectedOption.innerText === quizData[currentQuestionIndex].correctAnswer) {
        score++;
    }

    resetState();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.innerText = `Your Score: ${score} out of ${quizData.length}`;
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", showNextQuestion);

startQuiz();



/*COUNTDOWN SCRIPT*/

// Get the target date (April 1st, 2024)
const targetDate = new Date("2024-04-01T00:00:00Z");

function calculateDaysRemaining() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display the number of days remaining on the webpage
    const daysRemainingElement = document.getElementById("countdown-number");
    daysRemainingElement.textContent = `${daysRemaining} days remaining until April 01st, 2024!!`;
}

// Call the function to calculate and display days remaining
calculateDaysRemaining();



/*BORED SCRIPT*/

document.addEventListener('DOMContentLoaded', function () {
    const activityContainer = document.getElementById('activity-container');
    const getActivityButton = document.getElementById('get-activity-btn');

    async function fetchActivity() {
        try {
            const response = await fetch('https://www.boredapi.com/api/activity');
            const data = await response.json();
            return data.activity;
        } catch (error) {
            console.error('Error fetching activity:', error);
            return null;
        }
    }

    async function displayActivity() {
        const activity = await fetchActivity();
        if (activity) {
            activityContainer.textContent = activity;
        } else {
            activityContainer.textContent = 'Failed to fetch activity. Please try again.';
        }
    }

    getActivityButton.addEventListener('click', displayActivity);
});




/*CONTACT SCRIPT*/

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send the form data to an external API endpoint using fetch
    fetch("https://getform.io/f/62337e16-e08c-42a4-bc15-0fa00951632e", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Network response was not ok.");
    })
    .then(jsonResponse => {
        // Handle the API response as needed
        console.log(jsonResponse);
        alert("Form submitted successfully!");
        contactForm.reset();
    })
    .catch(error => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
        alert("Form submission failed. Please try again later.");
    });
});
