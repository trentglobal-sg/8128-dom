async function fetchData() {
    // when we use relative URL, the starting point
    // where the script is
    const response = await axios.get("books.json");

    // return the retrieved data as the result of the function
    return response.data;
}

document.addEventListener("DOMContentLoaded", async function(){
    const books = await fetchData();
    const bookContainer = document.querySelector("#books");
    for (let b of books) {
        const div =  document.createElement('div');
        div.className="col card"; // div.classList.add('card')
        div.style.width = "18rem";
        div.innerHTML = `
          <img src="${b.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${b.title}</h5>
                <p class="card-text">
                    <ul>
                        <li>Author: ${b.author}</li>
                        <li>Pages: ${b.pages}</li>
                    </ul>
                </p>
        `
        bookContainer.appendChild(div);
        
    }

})