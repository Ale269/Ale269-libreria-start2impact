let inputContainer = document.querySelector('.input-container');
let button = document.getElementById('button');
let firstSearh = true;

button.addEventListener("click" , startOperation);

function startOperation() {
    let name = document.getElementById('search-for-city').value;
    getCorrectName(name);
}