// Write your code here.
const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/refs/heads/master/customer.json"

document.addEventListener("DOMContentLoaded", async function(){
    const response = await axios.get(url);
    document.querySelector("#name").textContent = response.data.name;
    
    const addressList = document.querySelector("#address-list");
    // addressList.innerHTML =`
    //  <li class="list-group-item">${response.data.address.street}</li>
    //  <li class="list-group-item">${response.data.address.city}</li> 
    //  <li class="list-group-item">${response.data.address.state}</li> 
    //  <li class="list-group-item">${response.data.address.zip}</li> 
    //`

    // const addressParts = [
    //     response.data.address.street,
    //     response.data.address.city,
    //     response.data.address.state,
    //     response.data.address.zip
    // ];
    // for (const part of addressParts) {
    //     const liElement = document.createElement('li');
    //     liElement.textContent = part;
    //     liElement.className = "list-group-item";
    //     addressList.appendChild(liElement);
    // }
    // const liElement = document.createElement("li");
    // liElement.innerHTML = response.data.address.street;
    // addressList.appendChild(liElement);

    // example: https://onecompiler.com/html/455bym2yw
    for (let key in response.data.address) {
        const liElement = document.createElement('li');
        const dataValue = response.data.address[key];
        liElement.textContent = dataValue;
        liElement.className="list-group-item";
        addressList.appendChild(liElement);
    }

})
// Use axios + async/await to fetch the customer.json file from the
// URL above. Then update #name with the customer's name, and append
// one <li> per address part to #address-list.