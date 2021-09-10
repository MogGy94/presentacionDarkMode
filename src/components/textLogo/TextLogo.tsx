import * as React from 'react';
import './TextLogo.css'

const getImage = (seed: string) => (`https://picsum.photos/seed/${seed}/200/300`);

const TextLogo = (props: any) => {

    React.useEffect(()=>{

        const text = document.querySelector('.text__logo p');
        const ls =10//letter Separation
        text.innerHTML = text.innerHTML.split("").map(
            (char, i) => `<span style="transform:rotate(${i * ls}deg)"> ${char}</span>`
        ).join("")
    })

    return (
     
        <div className="text__logo">
            <div className="text__logo--circle">
                <div className="text__logo--logo"></div>
                <div className="text__logo--text">
                    <p>Edilberto Canon - UX dev Hola mundo</p>
                </div>
            </div>
        </div>
    
    )
}

export default TextLogo;