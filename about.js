const changingText = document.getElementById('changing-text');
const words = ['Daisy', 'a Student', 'a Developer', 'a Cybersecurity Enthusiast', 'a Violinist', 'a Nature Lover', 'a Lifelong Learner'];
let index = 0;

function typeText(word, i, callback) {
    if (i < word.length) {
        changingText.textContent += word.charAt(i);
        setTimeout(function () {
            typeText(word, i + 1, callback);
        }, 80); // Adjusted delay to match cursor's blink animation
    } else {
        setTimeout(callback, 1000); // Delay before starting to delete the word
    }
}

function deleteText(i) {
    if (i >= 0) {
        changingText.textContent = changingText.textContent.slice(0, -1);
        setTimeout(function () {
            deleteText(i - 1);
        }, 80); // Adjusted delay to match cursor's blink animation
    } else {
        setTimeout(changeText, 1000); // Delay before starting to type the next word
    }
}

function changeText() {
    const currentWord = words[index];
    changingText.textContent = '';
    typeText(currentWord, 0, function () {
        setTimeout(function () {
            deleteText(currentWord.length - 1);
        }, 1000); // Delay before switching to the next word
    });
    index = (index + 1) % words.length;
}

// Call changeText to start the animation
changeText();
