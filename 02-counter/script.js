// try
// 1. make sure that the number in the counter cannot go above 10 and cannot go below -10
// 2. when the number is even, the counter is green, and when the number is odd, the counter is red
// 3. explore on what localstorage is, add a button to save the counter's value to localstorage
// and a button to read the counter value saved in localstorage

// Student's solution
function studentSolution() {
    // Implement the counter functionality
    const incrementBtnEl = document.querySelector("#incrementBtn");
    incrementBtnEl.addEventListener("click", function () {
        const counterEl = document.querySelector("#countDisplay");
        counterEl.innerHTML = Number(counterEl.innerHTML) + 1;
    })

    const decrementBtnEl = document.querySelector("#decrementBtn");
    decrementBtnEl.addEventListener("click", function () {
        const counterEl = document.querySelector("#countDisplay");
        counterEl.innerHTML = Number(counterEl.innerHTML) - 1;
    })
}

function betterSolution() {
    let counterValue = 0;
    const incrementBtnEl = document.querySelector("#incrementBtn");
    const decrementBtnEl = document.querySelector("#decrementBtn");
    const counterEl = document.querySelector("#countDisplay");

    function updateCounter() {
        counterEl.innerHTML = counterValue;
    }

    incrementBtnEl.addEventListener("click", function(){
        counterValue++;
        updateCounter();
    })

    decrementBtnEl.addEventListener("click", function(){
        counterValue--;
        updateCounter();
    })

}

// Call the student's solution
betterSolution();