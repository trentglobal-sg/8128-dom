
// we can add event listeners to DOM elements
// ie., we can react to user's events
const changeBtn = document.querySelector("#changeBtn");
changeBtn.addEventListener("click", function () {
    const h1Element = document.querySelector("#title");
    h1Element.innerHTML = "Taste of Singapore"
    h1Element.style.fontFamily = "Verdana";

    const h2Element = document.querySelector("#subtitle");
    // add a class to an element
    h2Element.classList.add('lead');

    // to select more than one, use document.querySelectorAll
    const sellingPointEl = document.querySelectorAll(".selling-point");
    for (let eachSellingPoint of sellingPointEl) {
        eachSellingPoint.style.backgroundColor = "yellow";
    }

})