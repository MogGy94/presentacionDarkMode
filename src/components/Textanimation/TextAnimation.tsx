import * as React from 'react';
import './TextAnimation.css'
const getImage = (seed: string) => (`https://picsum.photos/seed/${seed}/200/300`);
const TextAnimation = (props: any) => {

    const {
        l_main,
        l_sub,
        d_main,
        d_sub
    } = props;
    const seed = "picsum";

    return (
        <section className="text__animation">
            <div className="box box1">
                <h2>
                    <span>
                        {l_sub}
                    </span>
                    <span>
                        {l_main}
                    </span>
                </h2>
            </div>

            <div className="box box2">
                <h2>
                    <span>
                        {d_sub}
                    </span>
                    <span>
                       {d_main}
                    </span>
                </h2>
            </div>
        </section>
    )
}

TextAnimation.defaultProps = {
    l_main: "Light Mode",
    l_sub: "Css con el",
    d_main: "Dark Mode",
    d_sub: "Css con el"
}


export default TextAnimation;