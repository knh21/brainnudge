
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

// Get elements from the DOM aka html
const nudgeButton = document.getElementById('nudge-btn');
const nudgePrompt = document.getElementById('nudge-prompt');
const doneButton = document.getElementById('done-btn');
const completedMessage = document.getElementById('completed-message');
const nudgeMessage = document.getElementById('nudge-message');


// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Get saved data from localStorage
const savedDate = localStorage.getItem('savedDate');
let currentPromptIndex = parseInt(localStorage.getItem('currentPromptIndex')) || 0;
const completedToday = localStorage.getItem('completedToday') === 'true';

// Check if it's a new day and reset
if (savedDate !== today) {
    // It's a new day, reset everything
    localStorage.setItem('savedDate', today);
    localStorage.setItem('completedToday', 'false');  // reset completion status
    
    if (savedDate) {
        // Only move to next prompt if this isn't the first time ever
        currentPromptIndex = (currentPromptIndex + 1) % prompts.length;
        localStorage.setItem('currentPromptIndex', currentPromptIndex);
    }
}

// If the user has completed the nudge, show the completed message
if (completedToday) {
    nudgeButton.classList.add('hidden');
    completedMessage.classList.remove('hidden');
    nudgePrompt.classList.add('hidden');
    doneButton.classList.add('hidden');
} else {
    // If the user hasn't completed the nudge, show the "Get Nudge" button
    nudgeButton.classList.remove('hidden');
    completedMessage.classList.add('hidden');
    nudgePrompt.classList.add('hidden');
    doneButton.classList.add('hidden');
}

// Event listener for the "Get Nudge" button
nudgeButton.addEventListener('click', () => {
    nudgeButton.classList.add('hidden');  // Hide the "Get Nudge" button
    nudgePrompt.classList.remove('hidden');  // Show the prompt
    doneButton.classList.remove('hidden');  // Show the "Done" button

    // Display the current prompt
    console.log(`Displaying prompt at index: ${currentPromptIndex}`);
    nudgeMessage.textContent = prompts[currentPromptIndex];
});

// Event listener for the "Done" button
doneButton.addEventListener('click', () => {
    // Mark as completed for today
    localStorage.setItem('completedToday', 'true');
    
    nudgePrompt.classList.add('hidden');  // Hide the prompt
    doneButton.classList.add('hidden');  // Hide the "Done" button
    completedMessage.classList.remove('hidden');  // Show the "Completed" message

    // Move to the next prompt for tomorrow
    currentPromptIndex = (currentPromptIndex + 1) % prompts.length;  // Loop through prompts
    localStorage.setItem('currentPromptIndex', currentPromptIndex);  // Save the updated index
});



























































// const prompts = [
//     "Hey, just start with ONE tiny part of the task. That's enough for now", 
//     "You don't have to finish it - just open the tab and look at it",
//     "Set a 5-minute timer and pretend you're just 'previewing' the task",
//     "What would 'future you' want you to do right now? Do that.",
//     "Pause. Drink water. Now try again",
//     "Break it into a list of ridiculously small steps. Like 'open laptop' small",
//     "Can you do it badly on purpose? That still counts",
//     "Text a friend and tell them what you're about to start. Instant accountability",
//     "Play a song you love. That's your focus soundtrack now",
//     "You can stop after 10 minutes. But give it a go first."
// ];

// // Get elements from the DOM aka html
// const nudgeButton = document.getElementById('nudge-btn');
// const nudgePrompt = document.getElementById('nudge-prompt');
// const doneButton = document.getElementById('done-btn');
// const completedMessage = document.getElementById('completed-message');
// const nudgeMessage = document.getElementById('nudge-message');

// // const devOverrideDate = '2025-04-26';  // Simulate tomorrow

// // const today = devOverrideDate || new Date().toISOString().split('T')[0];


// // Get today's date in YYYY-MM-DD format
// const today = new Date().toISOString().split('T')[0];

// // Get saved data from localStorage
// const savedDate = localStorage.getItem('savedDate');
// let currentPromptIndex = parseInt(localStorage.getItem('currentPromptIndex')) || 0;
// const completedToday = localStorage.getItem('completedToday') === 'true';

// // Check if it's a new day and reset
// if (savedDate !== today) {
//     // currentPromptIndex = ( currentPromptIndex + 1) % prompts.length;
//     localStorage.setItem('savedDate', today);
//     localStorage.setItem('completedToday', 'false');  // reset completion status
    
// }

// // If the user has completed the nudge, show the completed message
// if (completedToday) {
//     nudgeButton.classList.add('hidden');
//     completedMessage.classList.remove('hidden');
//     nudgePrompt.classList.add('hidden');
//     doneButton.classList.add('hidden');
// } else {
//     nudgeButton.classList.remove('hidden');
//     completedMessage.classList.add('hidden');
//     nudgePrompt.classList.add('hidden');
//     doneButton.classList.add('hidden');
// }

// // Event listener for the "Get Nudge" button
// nudgeButton.addEventListener('click', () => {
//     nudgeButton.classList.add('hidden');  // Hide the "Get Nudge" button
//     nudgePrompt.classList.remove('hidden');  // Show the prompt
//     doneButton.classList.remove('hidden');  // Show the "Done" button

//     // Display the current prompt
//     nudgeMessage.textContent = prompts[currentPromptIndex];
// });

// // Event listener for the "Done" button
// doneButton.addEventListener('click', () => {
//     // Mark as completed for today
//     localStorage.setItem('completedToday', 'true');
    
//     nudgePrompt.classList.add('hidden');  // Hide the prompt
//     doneButton.classList.add('hidden');  // Hide the "Done" button
//     completedMessage.classList.remove('hidden');  // Show the "Completed" message

//     // Move to the next prompt for tomorrow
//     currentPromptIndex = (currentPromptIndex + 1) % prompts.length;  // Loop through prompts
//     localStorage.setItem('currentPromptIndex', currentPromptIndex);  // Save the updated index
// });

