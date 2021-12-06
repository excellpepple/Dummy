import React, {useState, useEffect} from 'react';
import EmptyTags from "../global/EmptyTags";
import Generator from "./Generator";
// import {updateValue} from "../data/tags";

export default function ArticlePage(props) {
    const [userTags, setUserTags] = useState(localStorage.getItem('userTags'));

    return (
        <>

            {(!userTags)? <EmptyTags/>: <Generator articles={props.articles} handleUpdate={props.handleUpdate}/>}
        </>
    );
}
 
