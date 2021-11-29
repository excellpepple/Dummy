import React, {useState, useEffect} from 'react';
import {Button, Form} from "react-bootstrap";
import {tags as Tags} from "../data/tags";
import { useNavigate } from "react-router-dom";
import {PageHeader, Radio} from "antd"

export default function PrefrencePage(props) {
    const [category, setCategory] = useState(Tags);
    const [userTags, setUserTags] = useState([])
    const history = useNavigate();

    const onChange = ({target}) => {
        console.log(target.value)
    }

    const handleSubmit = (event) => {
        localStorage.setItem('userTags', userTags)
        event.preventDefault();
        history('/articles');
    };
    return (
        <>
            <PageHeader
                className="site-page-header border-bottom border-warning"
                onBack={() => history(-1)}
                title="Whats interests you!"
                subTitle="Hey, tell us what you like so we can choose content you like!"
              />
        <section id="pref" className="container-fluid m-5 p-3 justify-content-center w-100">
             <Form onSubmit={handleSubmit}>
              {category.map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check

                    label={type.tag}
                    name="group1"
                    type="checkbox"
                    id={`inline-${type.tag}-1`}
                    onChange={(event) =>{
                        (event.target.checked)? setUserTags(prev=> [...prev, type.tag]): setUserTags(next=> userTags.filter(item => item !== type.tag));
                    }}
                  />
                </div>
              ))}

                 <Button type="submit" variant="outline-dark" className="">Next</Button>
            </Form>
        </section>
        </>

    );
}
 
