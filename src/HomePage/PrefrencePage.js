import React, {useState, useEffect} from 'react';
import {Button} from "react-bootstrap";
import {tags as Tags} from "../data/tags";

export default function PrefrencePage(props) {
    const [category, setCategory] = useState(Tags);

    return (
        <section id="pref" className="container-fluid m-5 p-3 justify-content-center w-100">
            {category.map(item => <Button variant={"outline-info"}>{item.tag}</Button>)}
        </section>
    );
}
 
