// 1. The purpose of this component is to recieve some text and display it to the page.
// 2. The purpose is to "translate" the text and display it as UPPERCASE.
import React from 'react';

function Output(props){
    return (
        <div>{props.text}</div>
    );
}



export default Output;