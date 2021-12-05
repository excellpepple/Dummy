import React, {useState, useEffect} from 'react';
import Article from "./Article";
import {tags as Tags} from "../data/tags";
import resolve from "resolve";
import {GetArticles} from "../global/FetchArticles";

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

    // let url = 'https://newsapi.org/v2/everything?' +
    //           'q='+ search +'&' +
    //           'from=2021-11-29&' +
    //           'sortBy=popularity&' +
    //           'apiKey=a2a33e38fcb54b189b8930f09af7bfc2';
    //
    // // const [articles, setArticles] = useState([{}])
    // //
    // let req = new Request(url);
    // GetArticles("movies")
    useEffect(() => {

    })


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
                {console.log(`your object has ${typeof myArticles}`)}
                {/*{myArticles.map(item => <Article likes={likes} dislike={dislike} action={action} data={item}/>)}*/}
                <section id="debug"></section>
            </div>
        </>
    );
}
 
