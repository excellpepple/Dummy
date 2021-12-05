import React, {useState, useEffect} from 'react';
import Header from "../global/Header";
import Start from "./Start";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Result} from "antd";
import PrefrencePage from "./PrefrencePage";
import {
    tags as Tags,

} from '../data/tags'
import {articles as Articles} from "../global/FetchArticles"
import ArticlePage from "../ArticlePage/ArticlePage";





export default function Home() {
    const [tags, setTags] = useState(Tags)
    const [userTags, setUserTags] = useState([])

    // Creates an Array to store the chosen articles
    const render = [];
    // Creates an Array to store the averages from tags IN ORDER
    const averages = [];
    const offset = 0.1;

    // loops the code 5 times
    // while (render.length < 5) {
    //     // Actually assigns the averages to the averages array
    //     Tags.forEach(tag => averages.push(tag.getAverage()));
    //
    //     // Creates a variable to hold the sum of all of the averages
    //     const sum = averages.reduce((a, b)=> a + b)
    //
    //     // randomly picks a number between 0 and the sum
    //     let pick = Math.random() * sum
    //
    //     // Checks to see if pick is between 0 and averages[0]
    //     if (pick >= 0) {
    //         if (pick < (averages[0] + offset)) {
    //             // adds the first article in Article index 0 to render
    //             render.push(Articles[0][0].pop())
    //         } else {
    //             // Iterates through all of the array averages except for averages[0] and averages[-1]
    //             for (let i = 1; i < (averages.length - 1); i++) {
    //                 // Checks if the pick is between the sum of all of the averages up to index i and the sum of all of the averages up to index i + 1
    //                 if (pick >= (averages.slice(0, i).reduce((a, b) => a + b) + (i * offset)) && pick >= (averages.slice(0, i + 1).reduce((a, b) => a + b)) + ((i + 1) * offset)) {
    //                     // adds the first article in Article index i to render
    //                     render.push(Articles[i][0].pop());
    //                     // Breaks out of the for loop
    //                     break;
    //                 }
    //             }
    //             // Checks to see if pick is above the sum of all of the averages up to index -1
    //             if (pick > Articles.slice(0, -1) + ((averages.length - 1) * offset)) {
    //                 // adds the first article in Article index -1 to render
    //                 render.push(Articles[-1][0].pop());
    //             }
    //         }
    //     } else {
    //         // Iterates through all of the array averages except for averages[0] and averages[-1]
    //         for (let i = 1; i < (averages.length - 1); i++) {
    //             // Checks if the pick is between the sum of all of the averages up to index i and the sum of all of the averages up to index i + 1
    //             if (pick >= (averages.slice(0, i).reduce((a, b) => a + b) + (i * offset)) && pick >= (averages.slice(0, i + 1).reduce((a, b) => a + b)) + ((i + 1) * offset)) {
    //                 // adds the first article in Article index i to render
    //                 render.push(Articles[i][0].pop());
    //                 // Breaks out of the for loop
    //                 break;
    //             }
    //         }
    //         // Checks to see if pick is above the sum of all of the averages up to index -1
    //         if (pick > Articles.slice(0, -1) + ((averages.length - 1) * offset)) {
    //             // adds the first article in Article index -1 to render
    //             render.push(Articles[-1][0].pop());
    //         }
    //     }
    // }



    const updateValues = (tagname, value) =>{
        let message = "";

        tags.forEach(tag => tag.tag === tagname? tag.value.push(value): message = "Tag can not be found!");

        // const update = [...tags[tagname]]

        console.log(`updated ${tagname} and added ${value}`)
        return message;


    }


    return (
        <BrowserRouter basename="/">
            <Header/>
            <main>
                <Routes>
                    <Route exact path="/" element={<Start/>}/>
                    <Route path="/preference" element={<PrefrencePage tags={userTags} handleUpdate={updateValues}/>}/>
                    <Route path="/articles" element={<ArticlePage handleUpdate={updateValues}/>}/>
                    <Route
                  path="*"
                  element={
                     <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Link to="/" className="btn btn-outline-warning" type="primary">Back Home</Link>}
                      />
                  }
                />
                </Routes>
            </main>


        </BrowserRouter>
    );
}
 
