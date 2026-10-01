const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function(){

    // it works for input type: text, password, email, number
    const emailEl = document.querySelector("#email");
    const email = emailEl.value;
    console.log("email =", email);

    // query selector all radio buttons with the same name
    // const ageGroupRadioButtons = 
    //     document.querySelectorAll("[name='age-group']");

    // get the selected radio button
    const selectedAgeGroupRadioButton = document.querySelector(".age-group:checked");
    const ageGroup = selectedAgeGroupRadioButton.value; 
    console.log("age group=", ageGroup);

    const selectedHobbyCheckboxes = document.querySelectorAll(".hobbies:checked");
    console.log("selected hobbies =", selectedHobbyCheckboxes);

    // let hobbies = [];
    // for (let c of selectedHobbyCheckboxes) {
    //     hobbies.push(c.value);
    // }

    // selectedHobbyCheckboxes is a NodeList object, and it does not support .map()
    // to convert to array, we use Array.from()
    let hobbies = Array.from(selectedHobbyCheckboxes).map(c => c.value);

    console.log("hobbies =", hobbies);

})