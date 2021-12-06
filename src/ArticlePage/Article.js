import React, {useState, useEffect} from 'react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import "./Article.css"
import "./Fader.css"

import voca from "voca"
import Current from "../images/bg-images/CurrentEvents.jpg";
import Econ from "../images/bg-images/Economy.jpg";
import Movies from "../images/bg-images/Movies.jpg";
import Music from "../images/bg-images/Music.jpg";
import Pop from "../images/bg-images/PopCulture.jpg";
import Politics from "../images/bg-images/Politics.jpg";
import Science from "../images/bg-images/Science.jpg";



export default function Article(props) {

    // const { summary} = props.data[0]
    const tagname = props.data[1]
    const id = props.data[3]
    // const subtags = [...props.data[2]]
    const bg_img = () => {
        // eslint-disable-next-line default-case
        switch (tagname) {
            case "Movies": return Movies;
            case "Music": return Music;
            case "Pop Culture": return Pop;
            case "Science": return Science;
            case "Current Events": return Current;
            case "Politics": return Politics;
            case "Economy": return Econ;
        }
    }
    const bg_color = () => {
        // eslint-disable-next-line default-case
        switch (tagname) {
            case "Movies": return "bg-warning";
            case "Music": return "bg-danger";
            case "Pop Culture": return "bg-secondary";
            case "Science": return "bg-info";
            case "Current Events": return "bg-secondary";
            case "Politics": return "bg-warning";
            case "Economy": return "bg-danger";
        }
    }
    const [visible, setVisible] = useState(true)

    return (
        <>
            <section className={visible?'fadeIn':'fadeOut'}>
                <div className="container py-4">


                    <article className={"postcard   blue " + bg_color()}>
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src={bg_img()} alt="Image Title"/>
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title blue"><a href="#">{(props.data[0].title !== null)? voca.titleCase(props.data[0].title): "N/A"}</a></h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Author: {(props.data[0].author !== null)? voca.titleCase(props.data[0].author): "N/A"}
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">{(props.data[0].summary !== null)? voca.titleCase(props.data[0].summary): "N/A"}
                            </div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"/>Tag: {tagname}</li>
                                {/*<li className="tag__item"><i className="fas fa-tag mr-2"/>Sub-tags: {subtags.map(subtag => subtag)}</li>*/}

                                <li className=" tag__item play  bluefas">
                                    <a  onClick={()=> {
                                        props.handleLike(tagname, id);
                                        setVisible(false);
                                    }}><LikeOutlined className=" fa-play mr-2" /></a>
                                </li>
                                <li className=" tag__item play  bluefas">
                                    <a  onClick={()=> {
                                        props.handleLike(tagname, id);
                                        setVisible(false);
                                    }}><DislikeOutlined  className=" fa-play mr-2" /></a>
                                </li>
                            </ul>
                        </div>
                    </article>


                </div>
            </section>
        </>
    );
}
 
