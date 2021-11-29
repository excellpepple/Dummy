import React, {useState, useEffect} from 'react';
import EmptyTags from "../global/EmptyTags";
import Generator from "./Generator";

export default function ArticlePage() {
    const [userTags, setUserTags] = useState(localStorage.getItem('userTags'));

    return (
        <>
            {(!userTags)? <EmptyTags/>: <Generator/>}
        </>
    );
}
 
