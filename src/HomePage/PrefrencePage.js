import React, {useState, useEffect} from 'react';
import {Button, Form} from "react-bootstrap";
import {tags as Tags} from "../data/tags";
import {Link} from "react-router-dom";
import { Radio} from "antd"

export default function PrefrencePage(props) {
    const [category, setCategory] = useState(Tags);

    const onChange = ({target}) => {
        console.log(target.value)
    }

    const handleSubmit = () => {};
    return (
        <section id="pref" className="container-fluid m-5 p-3 justify-content-center w-100">
             <Form onSubmit={handleSubmit}>
              {category.map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check

                    label={type.tag}
                    name="group1"
                    type="checkbox"
                    id={`inline-${type.tag}-1`}
                  />
                </div>
              ))}

                 <Link to="/" className="btn btn-outline-dark">Next</Link>
            </Form>

        </section>
    );
}
 
