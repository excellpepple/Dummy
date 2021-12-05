import {React, useState} from "react";

function GetArticles(filter){

    let url = 'https://newsapi.org/v2/everything?' +
              'q='+ filter +'&' +
              'from=2021-11-29&' +
              'sortBy=popularity&' +
              'apiKey=a2a33e38fcb54b189b8930f09af7bfc2';



    const req = new Request(url);
    fetch(req)
    .then(function(response) {
        return response;
    })
    .then(function(response) {
            return response.text().then(function(text) {
              return text;
            });
        })
        .then(function(response) {
            const myObj = JSON.parse(response)
            console.log(myObj)
            const myArticles = myObj.articles.map(article => article);
            console.log("--->" + typeof myArticles);
            // setArticles(() => myArticles);
            // myArticles.forEach(function(article) { console.log(article)})
        })
        .catch(function(err) {console.log(err)});
}
GetArticles("apple")
