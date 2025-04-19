const nudgeButton = document.getElementById('nudge-btn');
const nudgePrompt = document.getElementById('nudge-prompt');
const doneButton = document.getElementById('done-btn');

// Add an event listener for the Get Nudge button click
nudgeButton.addEventListener('click', getNudge);

function getNudge() {
    // Hide the Get Nudge button
    nudgeButton.classList.add('hidden');
    
    // Show the prompt and the Done button
    nudgePrompt.classList.remove('hidden');
    doneButton.classList.remove('hidden');
}

// Add an event listener for the Done button click
doneButton.addEventListener('click', doneNudge);

function doneNudge() {
    // Hide the prompt and Done button
    nudgePrompt.classList.add('hidden');
    doneButton.classList.add('hidden');
    
    // Show the Get Nudge button again (optional)
    nudgeButton.classList.remove('hidden');
}
