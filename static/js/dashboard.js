document.getElementById("guidanceForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Collecting basic details
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const group = document.getElementById("group").value;

    // Initializing an array to hold all the form data
    const formData = [
        { field: "Name", value: name },
        { field: "Age", value: age },
        { field: "Email", value: email },
        { field: "Group", value: group }
    ];

    // Collecting dynamically generated questions
    const questionsContainer = document.getElementById("questionsContainer");
    const questionInputs = questionsContainer.querySelectorAll("input[type='number']");

    questionInputs.forEach((input, index) => {
        formData.push({
            field: `Question ${index + 1}`,
            value: input.value
        });
    });

    // Display the collected data on the screen
    const outputContainer = document.getElementById("outputContainer");
    outputContainer.innerHTML = "<h3>Submitted Data:</h3>"; // Title for the output

    formData.forEach(item => {
        const dataParagraph = document.createElement("p");
        dataParagraph.innerText = `${item.field}: ${item.value}`;
        outputContainer.appendChild(dataParagraph);
    });
});

function loadQuestions() {
    const group = document.getElementById("group").value;
    const questionsContainer = document.getElementById("questionsContainer");

    // Clear previous questions
    questionsContainer.innerHTML = "";

    // Define questions for each group
    const questions = {
        MPC: [
            "How much do you like Maths out of 10?",
            "How much do you like Physics out of 10?",
            "How much do you like Chemistry out of 10?",
            "How much do you like Engineering out of 10?",
            "How much do you like Military out of 10?",
            "How much do you like Commerce out of 10?",
            "How much do you like Legal Studies out of 10?",
            "How much do you like Management out of 10?",
            "How much do you like Computing out of 10?",
            "How much do you like Technology out of 10?",
            "How much do you like Business out of 10?",
            "How much do you like Healthcare out of 10?"
        ],
        BIPC: [
            "How much do you like Biology out of 10?",
            "How much do you like Physics out of 10?",
            "How much do you like Chemistry out of 10?"
        ]
        // Add other groups and their questions if needed
    };

    // Load the questions for the selected group
    if (group in questions) {
        questions[group].forEach((question, index) => {
            const questionLabel = document.createElement("label");
            questionLabel.innerText = question;
            
            const questionInput = document.createElement("input");
            questionInput.type = "number";
            questionInput.name = `question${index + 1}`;
            questionInput.min = 0;
            questionInput.max = 10;
            questionInput.required = true;

            questionsContainer.appendChild(questionLabel);
            questionsContainer.appendChild(questionInput);
        });
    }
}
