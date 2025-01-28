import { listado } from './listado.js';
 import { palabra } from './script.js';  
/* export let palabra; */

const inputs = document.querySelector('.inputs');
const suggestion = document.createElement('div');
suggestion.className = 'suggestion';
inputs.parentNode.insertBefore(suggestion, inputs.nextSibling);

export const handleSuggestion = () => {
 palabra;
 const letters = inputs.children;
 const letterCount = {};
 let suggestedLetter = '';

 letters.forEach(letter => {
    const letterText = letter.querySelector('.lletra').value;
    letterCount[letterText] = (letterCount[letterText] || 0) + 1;
 });

 listado.forEach(entry => {
    if (entry.toLowerCase().startsWith(palabra.toLowerCase())) {
      let count = {};
      let matched = true;
      entry.split('').forEach(char => {
        count[char] = (count[char] || 0) + 1;
        if (count[char] > letterCount[char]) {
          matched = false;
        }
      });
      if (matched) {
        suggestedLetter = entry[palabra.length];
      }
    }
 });

 if (suggestedLetter) {
    suggestion.textContent = `Sugerencia: ${suggestedLetter}`;
 } else {
    suggestion.textContent = '';
 }
};

inputs.addEventListener('input', handleSuggestion);


// When a letter is added, set a timer to wait for a bit before updating suggestions
inputs.addEventListener('change', (e) => {
 const letter = e.target;
 setTimeout(() => {
    letter.classList.remove('recent-change');
 }, 1000);
});

// Add a class to newly changed letters
inputs.addEventListener('input', (e) => {
 const letter = e.target;
 letter.classList.add('recent-change');
});

// Remove the 'recent-change' class from any letters that are still marked as recent changes
setInterval(() => {
 const recentChanges = document.querySelectorAll('.recent-change');
 recentChanges.forEach(change => {
    change.classList.remove('recent-change');
 });
}, 1000);
