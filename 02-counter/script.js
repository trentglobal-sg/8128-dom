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