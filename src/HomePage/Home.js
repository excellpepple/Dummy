import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Start from "./Start";

export default function Home() {
    const greeting = 'Hello Function Component!';

    return (
        <main>
            <Header/>
            <Start/>
        </main>
    );
}
 
