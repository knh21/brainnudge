const prompts = [
    "Hey, just start with ONE tiny part of the task. That's enough for now", 
    "You don't have to finish it - just open the tab and look at it",
    "Set a 5-minute timer and pretend you're just 'previewing' the task",
    "What would 'future you' want you to do right now? Do that.",
    "Pause. Drink water. Now try again",
    "Break it into a list of ridiculously small steps. Like 'open laptop' small",
    "Can you do it badly on purpose? That still counts",
    "Text a friend and tell them what you're about to start. Instant accountability",
    "Play a song you love. That's your focus soundtrack now",
    "You can stop after 10 minutes. But give it a go first."
];

// Get elements from the DOM
const nudgeButton = document.getElementById('nudge-btn');
const nudgePrompt = document.getElementById('nudge-prompt');
const doneButton = document.getElementById('done-btn');
const completedMessage = document.getElementById('completed-message');

// Get today's date in the correct format
const today = new Date().toISOString().split('T')[0];

// Get saved data from localStorage
const savedDate = localStorage.getItem('savedDate');
let currentPromptIndex = parseInt(localStorage.getItem('currentPromptIndex')) || 0; // Default to 0 if no index is found

// Check if the user has already completed the nudge today
if (savedDate === today) {
    // Hide the Get Nudge button, show the completed message
    nudgeButton.classList.add('hidden');
    completedMessage.classList.remove('hidden');

    // Optionally, hide the nudge prompt and Done button if you don't need them
    nudgePrompt.classList.add('hidden'); 
    doneButton.classList.add('hidden');
} else {
    // It's a new day, show the Get Nudge button and hide everything else
    nudgeButton.classList.remove('hidden');
    completedMessage.classList.add('hidden');
    nudgePrompt.classList.add('hidden');
    doneButton.classList.add('hidden');
}

// Add an event listener for the Get Nudge button click
nudgeButton.addEventListener('click', getNudge);

function getNudge() {
    // Hide the Get Nudge button
    nudgeButton.classList.add('hidden');
    
    // Show the prompt and Done button
    nudgePrompt.classList.remove('hidden');
    doneButton.classList.remove('hidden');

    // Display the current prompt
    nudgePrompt.textContent = prompts[currentPromptIndex];

    // Save today's date and the current prompt index in localStorage
    localStorage.setItem('savedDate', today);
    localStorage.setItem('currentPromptIndex', currentPromptIndex);
}

// Add an event listener for the Done button click
doneButton.addEventListener('click', doneNudge);

function doneNudge() {
    // Hide the prompt and Done button
    nudgePrompt.classList.add('hidden');
    doneButton.classList.add('hidden');
    
    // Show the Get Nudge button again (optional)
    nudgeButton.classList.remove('hidden');

    // Increment the current prompt index for the next day
    currentPromptIndex++;

    // If we've reached the end of the prompts, reset the index to 0
    if (currentPromptIndex >= prompts.length) {
        currentPromptIndex = 0;
    }

    // Save the updated index in localStorage
    localStorage.setItem('currentPromptIndex', currentPromptIndex);
}
