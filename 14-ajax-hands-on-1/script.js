document.addEventListener("DOMContentLoaded", async function(){
    const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/refs/heads/master/messages.txt");
    console.log(response.data);
    document.querySelector("#output").textContent =  response.data;
});

