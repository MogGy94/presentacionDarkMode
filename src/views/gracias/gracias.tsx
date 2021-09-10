import React, { useState, useEffect } from 'react'

import CustomCard from '../../components/Card/customCard';
import TextLogo from '../../components/textLogo/TextLogo';
import './gracias.css'

function GraciasView(props: any) {
    const cardContent ={
        number: "01",
        title: `Gracias`,
        content: "",
        buttonLabel: "Explore",
    }
    return (
        <div className="gracias__container">
            <CustomCard {...cardContent}/>
            <TextLogo></TextLogo>
        </div>
    )
}

export default GraciasView
