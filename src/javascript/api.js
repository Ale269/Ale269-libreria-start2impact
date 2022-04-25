import axios from "axios";

export default class GetBook {
    static getList = async function(url) {
        /*return fetch(url)
        .then(response => {
            if (!response.ok) {
                return Promise.reject()
            }else {
                return response.json()
            }
            })
        .then(data => {
            return data.works;
        }).catch(() => {
            return "error";
        })*/

        return axios.get(url)
        .then(response => response.data.works)
        .catch(error => "error");
    };

    static getDescription = async function(url) {
        /*return fetch(url)
        .then(response => response.json())
        .then(data => {
            if(typeof data.description == "object" || data.description == undefined){
                return "Description is not available for this book";
            }
            return data.description;
        })*/

        return axios.get(url)
        .then((response) => {
            if(typeof response.data.description == "object" || response.data.description == undefined){
                return "Description is not available for this book";
            }
            return response.data.description;
        })
    }
};