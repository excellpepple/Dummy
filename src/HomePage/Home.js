import React, {useState, useEffect} from 'react';
import Header from "../global/Header";
import Start from "./Start";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Result} from "antd";
import PrefrencePage from "./PrefrencePage";
import {
    tags as Tags,

} from '../data/tags'
// here is the database
import {GetArticles} from "../data/ArticleDb";
import ArticlePage from "../ArticlePage/ArticlePage";





export default function Home() {
    const [tags, setTags] = useState(Tags)
    const [userTags, setUserTags] = useState([])
    console.log(GetArticles())
    const updateValues = (tagname, value) =>{
        let message = "";
        // const shifter = (target) =>{
        //     if (target.length <= 5){
        //         console.log(`we just added 1 with no issue`)
        //         target.value.push(value)
        //     }
        //     else {

        //         target.value.shift()
        //         console.log(`we just shifted the first index of ${target.tag}`)
        //         target.value.push(value)
        //         console.log(`we just added a new value ${target.tag}`);
        //     }
        // }
        tags.forEach(tag => tag.tag === tagname? target.value.push(value): message = "Tag can not be found!");
        tags.forEach(tag => {
            if (tag.value.length > 5) {
                tag.value.shift()
            }
        })

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
 
