import React, {useState, useEffect} from 'react';
import Header from "../global/Header";
import Start from "./Start";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Result} from "antd";
import PrefrencePage from "./PrefrencePage";
import {
    tags as Tags,

} from '../data/tags'
import ArticlePage from "../ArticlePage/ArticlePage";


export default function Home() {
    const [tags, setTags] = useState(Tags)
    const [userTags, setUserTags] = useState([])
    const updateValues = (tagname, value) =>{
        let message = "";
        setTags()
        // tags.forEach(tag => tag.tag === tagname? tag.value.push(value): message = "Tag can not be found!");
        alert(`updated ${tagname}`)
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
 
