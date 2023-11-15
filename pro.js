let textNumber = 1;
let cycleInterval;

const spans = document.querySelectorAll('.first-column button');

spans.forEach((span, index) => {
    span.style.animationDelay = `${(index + 1) * 0.5}s`; // Sets the animation delay dynamically
});

function displayText(textNumber) {
    const displayArea = document.getElementById("displayArea");
    displayArea.classList.remove('custom-slide-in');
    displayArea.classList.add('custom-slide-out');

    setTimeout(function() {
        const textElement = document.getElementById("text" + textNumber).innerHTML;
        displayArea.innerHTML = textElement;
        displayArea.classList.remove('custom-slide-out');
        displayArea.classList.add('custom-slide-in');

        const buttons = document.querySelectorAll('.box button');
        buttons.forEach((button, index) => {
            if (index === textNumber) {
                button.style.backgroundColor = '#320683';
                button.style.borderColor = '#320683';
            } else {
                button.style.backgroundColor = 'rgb(0, 0, 42)';
                button.style.borderColor = 'rgb(0, 0, 42)';
            }
        });
    }, 400); // Adjust the delay according to the slide-out animation time
}

function checkForWord() {
    const contentDivs = document.querySelectorAll('.circle');

    contentDivs.forEach(contentDiv => {
        const dot = contentDiv.querySelector('.dot');
        const text = contentDiv.textContent;

        if (text.toLowerCase().includes('close')) {
            dot.style.backgroundColor = 'red';
        }
    });
}

window.onload = function() {
    let textNumber = 1;
    displayText(textNumber);

    const totalTexts = 5; // Total number of texts

    function autoCycleText() {
        cycleInterval = setInterval(function() {
            textNumber++;
            if (textNumber > totalTexts) {
                textNumber = 1;
            }
            displayText(textNumber);
        }, 9000); // Assign the interval to the cycleInterval variable
    }

    autoCycleText();
    checkForWord();

    const buttons = document.querySelectorAll('.box button');

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            clearInterval(cycleInterval); // Clear the existing interval
            textNumber = index; // Set the textNumber based on the clicked button index
            displayText(textNumber);
            autoCycleText(); // Start a new interval
        });
    });
}
