document.addEventListener("DOMContentLoaded", function () {

    let books = [];

    async function main() {
        // getBin and BIN_ID is from data.js
        books = await getBin(BIN_ID);
        renderList();
    }

    function renderList() {
        const bookList = document.querySelector("#bookList");
        bookList.innerHTML = "";
        for (let b of books) {
            const liElement = document.createElement('li');
            liElement.innerHTML = `${b.title} by ${b.author}, pages:${b.pages}`
            liElement.className = "list-group-item";
            bookList.appendChild(liElement);
        }
    }

    document.querySelector("#addBtn")
        .addEventListener("click", async function () {
            const title = document.querySelector("#title").value;
            const author = document.querySelector("#author").value;
            const pages = parseInt(document.querySelector("#pages").value);
            if (title && author && pages) {
                const newBook = {
                    id: Math.floor(Math.random() * 1000000 + 1),
                    title, author, pages
                }
                books.push(newBook);
                renderList();
            }
        })

    document.querySelector("#saveBtn")
            .addEventListener("click", function(){
                saveBin(BIN_ID, books);
            })


    main();
})