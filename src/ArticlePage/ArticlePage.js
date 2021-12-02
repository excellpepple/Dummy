import React, {useState, useEffect} from 'react';
import EmptyTags from "../global/EmptyTags";
import Generator from "./Generator";
import {updateValue} from "../data/tags";

export default function ArticlePage() {
    const [userTags, setUserTags] = useState(localStorage.getItem('userTags'));
    updateValue("Politics", 0)
    return (
        <>
            {(!userTags)? <EmptyTags/>: <Generator/>}
        </>
    );
}
 
