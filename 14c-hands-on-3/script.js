const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/refs/heads/master/book.json";
document.addEventListener("DOMContentLoaded", async function(){
    const bookInfo = await fetchData(url);
    
    document.querySelector("#title").textContent = bookInfo.title;
    document.querySelector("#author").textContent = bookInfo.author;
    document.querySelector("#year").textContent = bookInfo.year;
    
    const tagList = document.querySelector("#tags-list");

    // const tags = [];
    // for (let t of bookInfo.tags) {
    //     const liElement = document.createElement('li');
    //     liElement.textContent = t;
    //     tags.push(liElement);
    // }

    const tagElements = bookInfo.tags.map(function(t){
        const liElement = document.createElement('li');
        liElement.className = "list-group-item";
        liElement.textContent = t;
        return liElement;
    });
    tagElements.forEach(function(tagElement){
        tagList.appendChild(tagElement)
    });

    const characterList = document.querySelector("#characters-list");
    for (let c of bookInfo.characters) {
        const liElement = document.createElement('li');
        liElement.className = "list-group-item";
        liElement.innerText = `${c.name} - ${c.role} (${c.race})`;
        characterList.appendChild(liElement);
    }
    
});

async function fetchData(url) {
    const response= await axios.get(url);
    return response.data;
}