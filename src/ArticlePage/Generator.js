import React, {useState, useEffect, useRef} from 'react';
import Article from "./Article";
import {message, PageHeader, Result} from 'antd'
import {Button, Image} from "react-bootstrap";
import Empty from "../images/emptytag.svg";
import {Link, useNavigate} from "react-router-dom";
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


            } else if(renderCount === 0){
                if(articles.length === 0 ){
                    return(()=>setArticles([]))
                }
            }
        }
    }, [articles, props, renderCount])

   const like = (tagName, id) => {
        console.log("You just liked "+ tagName)
        props.handleUpdate(tagName, 1)
        console.log(`we just updated ${tagName} by 1`)
        setRenderCount(prev => prev + 1)
        setArticles(prev => prev.filter(item => item[0].id !== id))
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
    const history = useNavigate();

    return (
        <>
            <div className="container-fluid">
                <PageHeader
                className="site-page-header border-bottom border-warning"
                onBack={() => history(-1)}
                title="Not seeing what you like?"
                subTitle="You can always go back and change your preferences if you'd like!"
              />
            {(articles.length !== 0)? (
                articles.map((item, key) => (
                    (item[0] === "e")? DataNotThere(item[1]):  <Article key={"article"+key} id={item[0].id} data={item} handleLike={like} handleDislike={dislike} />
                    // <Article  data={item} handleLike={like} handleDislike={dislike} />
                ))
            ):(
                <>
                    <Result
                        icon={<Image src={Empty} className="h-25 w-25 mt-5"/>}
                        title="No article to show!"
                        subTitle="Looks like We're out of articles right now, thanks for exploring our site!"
                        extra={<Button onClick={props.handleRefresh} className=" btn btn-lg  btn-outline-info" >Refresh Page</Button>}
                      />
                </>
            )}
            </div>
        </>
    );
}
 
