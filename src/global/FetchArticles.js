// import {React, useState} from "react";

function GetArticles(filter){
    let url = "https://free-news.p.rapidapi.com/v1/search?q="+ filter +"%20Musk&lang=en"
    let url2 = 'https://newsapi.org/v2/everything?' +
              'q='+ filter +'&' +
              'from=2021-11-29&' +
              'sortBy=popularity&' +
              'apiKey=a2a33e38fcb54b189b8930f09af7bfc2';
   let url3 = "https://api.newscatcherapi.com\n" +
       "/v2/search?q=Tesla&page_size=2"

    let req = new Request(url3);
   fetch(req, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": "51868f4f02msh8f58539a18f70dbp11f2f8jsnc97e24498721"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}
// GetArticles("apple")

const articles = [];
 export {articles}