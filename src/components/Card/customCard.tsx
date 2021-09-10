import React, { useState, useEffect } from 'react'

import './customCard.css'

function CustomCard(props:any) {
    console.log(props);
    
    const {
        number,
        content, //Discover your Place
        title, //Explore the <br/> best beautful <br/> Beashes
        buttonLabel,
    } = props;

    return (
        <div className="custom__Card">
            <div className="icon">{number}</div>
            <div className="content">
                <h3>{title}</h3>
                <p>{content}</p>
                <a className="custom__Card--anchor" href="">{buttonLabel}</a>
            </div>
        </div>
    )
}

CustomCard.defaultProps = {
    number: "01",
    title: `Service Name `,
    content: "Discover your Place",
    buttonLabel: "Explore",
}
export default CustomCard
