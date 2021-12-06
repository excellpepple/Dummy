import React, {useState, useEffect} from 'react';
import Header from "../global/Header";
import Start from "./Start";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Result} from "antd";
import PrefrencePage from "./PrefrencePage";
import {
    tags as Tags,

} from '../data/tags'
import {GetArticles} from "../data/ArticleDb";
import ArticlePage from "../ArticlePage/ArticlePage";



export default function Home() {
    const [tags, setTags] = useState(Tags)
    const [userTags, setUserTags] = useState([])
    //console.log(GetArticles())
    const updateValues = (tagname, value) => {
        let message = "";
        tags.forEach(tag => {
            if (tag.tag === tagname) {
                tag.value.push(value);
            } else {
                message = "Tag can not be found!";
            }
            if (tag.value.length > 20) {
                tag.value.shift()
            }
        });

        console.log(`updated ${tagname} and added ${value}`)
        return message;
    }

    // Creates a copy of the articles
    const Articles = GetArticles()
    // Creates and offset
    const offset = 0.1

    let emptyTags = []

    let article;

    let id = 0;

    const rendered_articles = () => {
        // Creates an Array to store the chosen articles
        const render = [];
        // loops the code 5 times
        while (render.length < 5) {
            let count = 0;
            Articles.forEach(articles => (articles.length === 0) ? count++ : count = 0)
            if (count === Articles.length) {
                return "empty";
            }


            // Creates an Array to store the averages from tags IN ORDER
            const averages = [];

            // Actually assigns the averages to the averages array
            tags.forEach(tag => {
                let average = tag.getAverage()
                //console.log(average)
                averages.push(average)}
                );
        
            // Creates a variable to hold the sum of all of the averages
            const sum = averages.reduce((a, b)=> a + b)
        
            // randomly picks a number between 0 and the sum
            let pick = Math.random() * (sum + (offset * averages.length))

            // Checks to see if pick is between 0 and averages[0]
            if (pick >= 0) {
                if (pick < (averages[0] + offset)) {
                    // adds the first article in Article index 0 to render
                    article = Articles[0].pop()
                    if (!(emptyTags.includes(tags[0].tag))) {
                        if (article === undefined) {
                            emptyTags.push(tags[0].tag)
                            ;
                            render.push(["empty", tags[0].tag, tags[0].sub, tags[0].id])
                            continue;
                        } else {
                            render.push([article, tags[0].tag, tags[0].sub, tags[0].id])
                            continue;
                        }
                    }
                } else {
                    // Iterates through all of the array averages except for averages[0] and averages[-1]
                    for (let i = 1; i < (averages.length - 1); i++) {
                        // Checks if the pick is between the sum of all of the averages up to index i and the sum of all of the averages up to index i + 1
                        if (pick >= (averages.slice(0, i).reduce((a, b) => a + b) + (i * offset)) && pick < (averages.slice(0, i + 1).reduce((a, b) => a + b) + ((i + 1) * offset))) {
                            // adds the first article in Article index i to render
                            article = Articles[i].pop()
                            if (!(emptyTags.includes(tags[i].tag))) {
                                if (article === undefined) {
                                    emptyTags.push(tags[i].tag)
                                    render.push(["empty", tags[i].tag, tags[i].sub, tags[0].id])
                                    continue;
                                } else {
                                    render.push([article, tags[i].tag, tags[i].sub, tags[0].id])
                                    continue;
                                }
                            }
                            // Breaks out of the for loop
                            break;
                        }
                    }
                    // Checks to see if pick is above the sum of all of the averages up to index -1
                    if (pick >= averages.slice(0, -1).reduce((a, b) => a + b) + ((averages.length - 1) * offset)) {
                        // adds the first article in Article index -1 to render
                        article = Articles[Articles.length - 1].pop()
                        if (!(emptyTags.includes(tags[tags.length - 1].tag))) {
                            if (article === undefined) {
                                emptyTags.push(tags[tags.length - 1].tag)
                                render.push(["empty", tags[tags.length - 1].tag, tags[tags.length - 1].sub, tags[0].id])
                                continue;
                            } else {
                                render.push([article, tags[tags.length - 1].tag, tags[tags.length - 1].sub, tags[0].id])
                                continue;
                            }
                        }
                    }
                }
            }
        }
        console.log(render)
        return render;
    }

    return (
        <BrowserRouter basename="/">
            <Header/>
            <main>
                <Routes>
                    <Route exact path="/" element={<Start/>}/>
                    <Route path="/preference" element={<PrefrencePage tags={userTags} handleUpdate={updateValues}/>}/>
                    <Route path="/articles" element={<ArticlePage handleUpdate={updateValues} articles={(() => rendered_articles)()}/>}/>
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
 
