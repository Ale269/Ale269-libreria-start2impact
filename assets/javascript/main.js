class GetBook {
    static getList = async function(url) {
        return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.works;
        })
    };

    static getDescription = async function(url) {
        return fetch(url)
        .then(response => response.json())
        .then(data => {
            if(typeof data.description == "object" || data.description == undefined){
                return "Description is not available for this book";
            }
            return data.description;
        })
    }
};


class DisplayResult {

    body = document.querySelector("body");
    libraryContainer = document.querySelector(".library-container");
    inputField = document.getElementById("libro");
    searchBtn = document.querySelector("button");
    form =  document.querySelector("form");
    logo =  document.querySelector(".logo");
    container = document.querySelector(".container-for-description-element");
    image = document.querySelector(".background-image");

    static displayBooks = function (arrayResult) {

        DisplayResult.clearPage();

        if(arrayResult.length === 0){

            let div = document.createElement("div");
            domElement.libraryContainer.append(div);

            let alert = document.createElement("h3");
            alert.classList.add("alert");
            alert.textContent = "No book matches";

            let suggestion = document.createElement("h5");
            suggestion.classList.add("suggestion");
            suggestion.textContent = "Please try looking for another category";       

            div.append(alert);
            alert.after(suggestion);
        }

        for(let i=0; i<arrayResult.length; i++){

            let div = document.createElement("div");
            div.classList.add("book-container");
            div.setAttribute("data-book", arrayResult[i].key);
            domElement.libraryContainer.append(div);

            let title = document.createElement("h3");
            title.textContent = arrayResult[i].title;
            div.append(title);

            let numberOfAuthor = arrayResult[i].authors.length;
            if(numberOfAuthor>8){numberOfAuthor=8};

            for(let j=0; j<numberOfAuthor; j++){
                let author = document.createElement("h5");
                author.textContent = arrayResult[i].authors[j].name;
                title.after(author);
                
                if(j == 7){
                    let endPoint = document.createElement("h5");
                    endPoint.textContent = "...";
                    div.append(endPoint);
                    break;
                }
            }
        }
    };

    static displayDescription = function (bookDescription) {
        let cover = document.createElement("div");
        cover.classList.add("cover");

        let descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("book-description-container");

        let descriptionTitle = document.createElement("h3");
        descriptionTitle.textContent = "Description";
        let description = document.createElement("p");
        description.textContent = bookDescription;

        domElement.container.prepend(cover);
        domElement.body.classList.add("block");
        cover.before(descriptionContainer);
        descriptionContainer.append(descriptionTitle);
        descriptionTitle.after(description);
    };

    static resetDescription = function(event) {
        if(event.target.classList.contains("cover")){
            domElement.container.innerHTML = '<img class="background-image remove-image" src="./assets/image/background-image.svg">';
            domElement.body.classList.remove("block"); 
        }else{return};
        
    }


    static loading = function() {
        let loading = document.createElement("h5");
        loading.textContent = "Loading..."; 
        loading.classList.add("suggestion");
        domElement.libraryContainer.append(loading);
    }

    static clearPage = function () {
        domElement.libraryContainer.innerHTML = "";
    }

    static removeImage = function() {
        domElement.image.classList.add("remove-image");
    }

    static addImage = function() {
        domElement.getImage();
        domElement.image.setAttribute("class", "background-image");
    }
}


let domElement = {
    body: document.querySelector("body"),
    libraryContainer: document.querySelector(".library-container"),
    inputField: document.getElementById("libro"),
    searchBtn: document.querySelector("button"),
    form: document.querySelector("form"),
    logo: document.querySelector(".logo"),
    container: document.querySelector(".container-for-description-element"),
    image: document.querySelector(".background-image"),
    getImage(){domElement.image = document.querySelector(".background-image")},
}


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
