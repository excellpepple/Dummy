import React, {useState, useEffect} from 'react';
import {Container, Navbar} from "react-bootstrap";
import Logo from "../logo.svg";
export default function Header() {
    const greeting = 'Hello Function Component!';

    return (
        <Navbar bg="dark" variant="dark" className="border-4 text-secondary border-bottom border-info">
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={Logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
              Dont Be A Dummy
              </Navbar.Brand>
            </Container>
          </Navbar>
    );
}
 
