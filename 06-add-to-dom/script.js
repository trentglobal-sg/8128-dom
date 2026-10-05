document.querySelector("#addBtn")
        .addEventListener("click", function(){
           const newNumber = Number(document.querySelector("#newNumber").value);
           const numberList = document.querySelector("#numberList");
           // "<li>" + newNumber + "</li>";
           numberList.innerHTML = numberList.innerHTML + `<li>${newNumber}</li>`;

        })

document.querySelector("#addBtnAppendChild")
        .addEventListener("click", function(){

            // extract the number entered by the user
            const newNumber = Number(document.querySelector("#newNumber").value);

            // 1. create a new <li> element, but is detached from the body (not in the DOM)
            const liElement = document.createElement('li');
            liElement.innerHTML = newNumber;

            // 2. add the new <li> elemebt as a child of an existing element in the DOM
            const numberList = document.querySelector("#numberList");
            // add the new <li> as the new last child element of <ul>
            numberList.appendChild(liElement);
        })