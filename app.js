const nudgeButton = document.getElementById('nudge-btn')
const nudgePrompt = document.getElementById('nudge-prompt')
const doneButton = document.getElementById('done-btn')


function getNudge(){
    nudgeButton.classList.add('hidden')
    nudgePrompt.classList.remove('hidden')
    doneButton.classList.remove('hidden')
}

function doneNudge(){
    nudgePrompt.classList.add('hidden') // Hide the nudge prompt
    nudgeButton.classList.remove('hidden')  // Show the "Get Nudge" button
    doneButton.classList.add('hidden') // Hide the "Done" button
}