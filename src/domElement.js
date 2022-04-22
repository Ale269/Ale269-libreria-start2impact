import image from "./img/background-image.svg";

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
};


export default domElement;