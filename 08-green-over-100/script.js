const NUMBERS = [50, 150, -20, 80, -5, 200, 0];
const numberList = document.querySelector("#list");
for (let n of NUMBERS) {
    const liElement = document.createElement('li');
    liElement.innerHTML = n;

    if (n > 100) {
        liElement.style.color = "green";
    } else if (n < 0) {
        liElement.style.color = "red";
    }

    numberList.appendChild(liElement);
}