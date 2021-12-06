import React, {useState, useEffect, useRef} from 'react';
import Article from "./Article";
import {message, Result} from 'antd'
import {Image} from "react-bootstrap";
import Empty from "../images/emptytag.svg";
import {Link} from "react-router-dom";
import use from "use";
// assing values to tags
const checkTags = (Main, Checked) => {
    return Main.map(tag => {
        (tag in Checked)? tag.sub.value.push(1): tag.sub.value.push(0);
        return tag;
    })
}

export default function Generator(props) {
    const [userTags, setUserTags] = useState(localStorage.getItem('userTags').split(','));
    //console.log("-->" + userTags);
    const call = () => props.articles
    const [articles, setArticles] = useState([])
    // const [check, setCheck] = useState(props.articles)
    //console.log( typeof call)
    const [renderCount, setRenderCount] = useState(0)
    const mounted = useRef()
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            if(renderCount === 0){
                setArticles(props.articles);
            }
        } else {
            if(renderCount === 5) {

                setArticles(prev => [...props.articles(), ...prev])
                console.log( articles.length)
                setRenderCount(0)


            }if(articles.length === 0){
                setArticles("empty")
            }

        }
    }, [articles, renderCount])

    const like = (tagName, id) => {
        console.log("You just liked "+ tagName)
        props.handleUpdate(tagName, 1)
        console.log(`we just updated ${tagName} by 1`)
        setRenderCount(prev => prev + 1)
        setArticles(prev => prev.filter(item => item[3] !== id))
        // const test = articles.filter(item => item[0].title !== title)
        // console.log(test)
      };

    const dislike = (tagName, id) => {
        console.log("You just disliked "+ tagName)
        props.handleUpdate(tagName, 0)
        console.log(`we just updated ${tagName} by 0`)
        setRenderCount(prev => prev++)
        // setArticles(prev => prev.filter(item => title !== item[0].title ))
        // console.log(articles.filter(item => item[0].title !== title))
    };
    const [emptyTags, setEmptyTags] = useState([])
    const DataNotThere = (tagname) => {
      if(!emptyTags.includes(tagname)){
          message.warning(`We are currently out of articles related to ${tagname}.`);
          emptyTags.push(tagname)
      }
    };

    return (
        <>
            <div className="container-fluid">

            {(articles !== "empty")? (
                articles.map((item) => (
                    (item[0] === "empty")? DataNotThere(item[1]):  <Article  data={item} handleLike={like} handleDislike={dislike} />
                    // <Article  data={item} handleLike={like} handleDislike={dislike} />
                ))
            ):(
                <>
                    <Result
                        icon={<Image src={Empty} className="h-25 w-25 mt-5"/>}
                        title="No article to show!"
                        subTitle="Looks like We're out of articles right now, thanks for exploring our site!"
                        extra={<Link to="/" className=" btn btn-lg  btn-outline-info" >Back to Home-Page</Link>}
                      />
                </>
            )}
            </div>
        </>
    );
}
 
