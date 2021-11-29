import React, {useState, useEffect} from 'react';
import Article from "./Article";
import {tags as Tags} from "../data/tags";
import resolve from "resolve";

// assing values to tags
const checkTags = (Main, Checked) => {
    return Main.map(tag => {
        (tag in Checked)? tag.sub.value.push(1): tag.sub.value.push(0);
        return tag;
    })
}


// takes feed back after users reads article and updates value
const updateValue = feedback => {

}



export default function Generator() {
    let search = 'Movies';
    let url = 'https://newsapi.org/v2/everything?' +
              'q='+ search +'&' +
              'from=2021-11-29&' +
              'sortBy=popularity&' +
              'apiKey=a2a33e38fcb54b189b8930f09af7bfc2';

    let req = new Request(url);
    let myArticles;
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
            myArticles = myObj.articles;
            myArticles.forEach(function(article) { console.log(article.title)})
        })
        .catch(function(err) {console.log(err)});

    const [userTags, setUserTags] = useState(localStorage.getItem('userTags').split(','));
    console.log("-->" + userTags);


    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
      };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    return (
        <>
            <div className="container">
                {(myArticles)?myArticles.map(item => <Article likes={likes} dislike={dislike} action={action} data={item}/>): <h1>Nothing here</h1>}
                <section id="debug"></section>
            </div>
        </>
    );
}
 
