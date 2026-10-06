// fetch the content of an external asset
// as long it is accessible by the HTTP protcol
// and is available via the internet

// fetch is an example of an asynchronous operation
// when we called fetch, JavaScript returns a promise (function that is executing in the background)
// we can call a function when the promise finishes
// const promise = fetch("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt");

// // call a function when the promises has finished executing
// promise.then(function(response){
//     console.log(response);
//     return response.text()
// }).then(function(data){
//     console.log(data);
// })
// console.log("Just after calling fetch:")
// console.log(promise);

const promise = axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt");
promise.then(function(response){
    console.log(response.data);
    const mainDiv = document.querySelector("#main");
    mainDiv.innerHTML = response.data;
})