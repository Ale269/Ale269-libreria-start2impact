import domElement from "./domElement.js";
import DisplayResult from "./displayer.js";
import GetBook from "./api.js";


let DomControll = (() => {

    domElement.libraryContainer.addEventListener("click", callApi);
    domElement.searchBtn.addEventListener("click", searchCategory);
    document.onkeydown = function (e) {
        if(domElement.inputField.value == ""){return};
        if(e.key === "Enter"){
            searchCategory();
        }
    }
    domElement.form.addEventListener("submit", (e) => {e.preventDefault()});
    domElement.logo.addEventListener("click", () => {
        DisplayResult.clearPage();
        DisplayResult.addImage();
    });
    document.addEventListener("click", (event) => {DisplayResult.resetDescription(event)});

    function searchCategory() {
        DisplayResult.removeImage();
        DisplayResult.clearPage();
        DisplayResult.loading();

        let field = domElement.inputField.value;
        field = field.toLowerCase();
        field = field.replace(/\s/g, '');
        GetBook.getList(`https://openlibrary.org/subjects/${field}.json`).then((data) => {DisplayResult.displayBooks(data);});  
        domElement.inputField.value = null;
    }

    function callApi(event) {
        if(event.target.classList.contains("book-container")){
            let key = event.target.dataset.book;
            GetBook.getDescription(`https://openlibrary.org${key}.json`).then((result) => {DisplayResult.displayDescription(result)});
            
        }
        else if(event.target == undefined || event.target.classList.contains("library-container") ){
            return;
        }else{
            let key = event.target.parentNode.dataset.book;
            GetBook.getDescription(`https://openlibrary.org${key}.json`).then((result) => {DisplayResult.displayDescription(result)});
        }
    }

    return {
        domElement,
    }
})();