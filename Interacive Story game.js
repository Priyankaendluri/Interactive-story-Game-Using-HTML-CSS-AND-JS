// Store the story data (text and choices)
const storyData = {
    start: {
        text: "You wake up in a mysterious forest. What do you do?",
        choices: [
            { text: "Look around", next: "lookAround" },
            { text: "Walk forward", next: "walkForward" }
        ]
    },
    lookAround: {
        text: "You see a path leading deeper into the forest. Do you follow it?",
        choices: [
            { text: "Yes, follow the path", next: "followPath" },
            { text: "No, go back", next: "start" }
        ]
    },
    walkForward: {
        text: "You walk into the forest but stumble upon a hidden trap. You fall into a pit.",
        choices: [
            { text: "Try to climb out", next: "climbOut" },
            { text: "Wait for help", next: "waitForHelp" }
        ]
    },
    followPath: {
        text: "The path leads you to an old cottage. Do you enter?",
        choices: [
            { text: "Yes, knock on the door", next: "knockDoor" },
            { text: "No, keep walking", next: "keepWalking" }
        ]
    },
    // More story branches go here...
};

// Function to start the game
function startGame() {
    showStory('start');
}

// Function to display story and choices
function showStory(scene) {
    const story = storyData[scene];
    document.getElementById("story-text").innerText = story.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; // Clear existing choices

    story.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => showStory(choice.next); // Go to the next scene
        choicesDiv.appendChild(button);
    });
}

// Start the game when the page is loaded
window.onload = startGame;

