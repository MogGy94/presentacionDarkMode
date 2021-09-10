import * as React from 'react';
import './Home.css'
const getImage = (seed:string) => (`https://picsum.photos/seed/${seed}/200/300`);
const Home = (props: any) => {

    const {
        subtitle, //Discover your Place
        title, //Explore the <br/> best beautful <br/> Beashes
        buttonLabel, 
    } = props; 
   const seed = "picsum";

    return (
        <section className="home" id="home">
            <img src={getImage(seed)} alt="" className="home__img" />
            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__data-subtitle">{subtitle}</span>
                    <h1 className="home__data-title"><pre>{title}</pre></h1>
                    <a href="" className="butoion">{buttonLabel}</a>
                </div>
            </div>
        
        </section>
    )
}

Home.defaultProps={
    subtitle:"Discover your Place",
    title:`
        Explore the 
        best beautful 
        Beashes
    `,
    buttonLabel:"Explore",
}
export default Home;