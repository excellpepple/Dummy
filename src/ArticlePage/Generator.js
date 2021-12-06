import React, {useState, useEffect} from 'react';
import Article from "./Article";

// assing values to tags
const checkTags = (Main, Checked) => {
    return Main.map(tag => {
        (tag in Checked)? tag.sub.value.push(1): tag.sub.value.push(0);
        return tag;
    })
}

export default function Generator(props) {
    const [userTags, setUserTags] = useState(localStorage.getItem('userTags').split(','));
    console.log("-->" + userTags);



    const like = (tagName) => {
        console.log("You just liked "+ tagName)
        // props.handleUpdate(tagName, 1)
        console.log(`we just updated ${tagName} by 1`)
      };

    const dislike = (tagName) => {
        console.log("You just disliked "+ tagName)
        // props.handleUpdate(tagName, 0)
        console.log(`we just updated ${tagName} by 0`)

    };

    return (
        <>
            <div className="container-fluid">

                <Article  data={[{author: "excell", title: "Testing Article"}, "Music"]} handleLike={like} handleDislike={dislike}/>
                <Article  data={[{author: "excell", title: "Testing Article"}, "Pop Culture"]} handleLike={like} handleDislike={dislike}/>
                <Article  data={[{author: "excell", title: "Testing Article"}, "Movies"]} handleLike={like} handleDislike={dislike}/>
            </div>
        </>
    );
}
 
