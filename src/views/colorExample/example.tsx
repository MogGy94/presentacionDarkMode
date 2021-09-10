import * as React from 'react';
import './example.css';

const getImage = (seed: string) => (`https://picsum.photos/seed/${seed}/200/300`);
const Example = (props: any) => {
    const { useState } = React;
    const [brillo, setBrillo] = useState(90);

    return (
        <>
            <button onClick={()=> setBrillo(brillo+5)}> Aumentar Brillo</button>
            <button onClick={() => setBrillo(brillo - 5)}> Disminuir Brillo</button>
            <section style={ "--Light":brillo } className="Example">
            <div className="box1 "></div>
            <div className="box2 "></div>
            <div className="box3 "></div>
            <div className="box4 "></div>
            </section>
        </>
    )
}

Example.defaultProps = {
}


export default Example;