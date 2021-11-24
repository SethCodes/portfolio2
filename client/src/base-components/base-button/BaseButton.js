import React from 'react';

const BaseButton = ({text, onClick}) => {

    const buttonDiv = {
        margin: '1rem auto'
    }
    const button = {
        borderRadius: '50px',
        border: '1px solid #ccc',
        padding: '5px 25px',
        backgroundColor: "cyan",
        color: "blue",
    };

    if(text === 'Submit'){
        button.backgroundColor = 'yellow';
    }

    return (
        <div style={buttonDiv}>
            <button style={button} onClick={onClick}>{text}</button>
        </div>
    )
};

export default BaseButton;

