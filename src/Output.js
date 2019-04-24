// 1. The purpose of this component is to recieve some text and display it to the page.
// 2. The purpose is to "translate" the text and display it as UPPERCASE.
import React from 'react';

function Output(props){
    return (
        <h1>{props.text.toUpperCase()}</h1>
    );
}



export default Output;