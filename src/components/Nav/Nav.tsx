import * as React from 'react';
import './Nav.css'

const Nav = (props:any) => {
    const {useEffect,useRef} = React;
    const navMenuRef = useRef(null);
   

    const { contents } = props
    const keys = Object.keys(contents);

    const handleShowMenu = (e: any) =>{
        console.log(e);
        //e.target.classList.toggle("show-menu")
        if (navMenuRef.current){
            navMenuRef.current.classList.toggle("show-menu");
        }
    }

    useEffect(() => {
        let newStyles = document.createElement("style");
        document.head.appendChild(newStyles);
        const anchorSelectorPath = ".header ";
        const rule = keys.map(
            (item, i) => (`section#${item}:hover ~ ${anchorSelectorPath} a[href*="${item}"]`));

        const newRule = `
            ${rule.join(", ")}{ 
                color: #000; 
                background: #fff; 
                border-radius: 20px; 
            }`
        newStyles.sheet.insertRule(newRule, 0);
    });   

    return (
        <>
            {keys.map((item, i) => {
                return <section className="my_section" key={i} id={item}>{contents[item]}</section>
            })}

            <header className="header">
                <nav className="nav container">
                    {/* <a href="#" className="nav__logo"> travel </a> */}
            
                    <div ref={navMenuRef} className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            {keys.map((item, i) => (
                                <li key={`el-${i}`} className="nav_item">
                                    <a onClick={handleShowMenu} className="nav__link" href={`#${item}`}>{item}</a>
                                </li>
                                ))}
                        </ul>

                       {/*  <h2 
                            onClick={handleShowMenu}
                            className="nav__close" 
                            id="nav_close"> ✖</h2> */}
                    </div>

                    <div className="nav_toggle" id="nav_toggle" onClick={handleShowMenu}>
                        <h2>🎈</h2>
                    </div>
                </nav>
            </header>
        </>
    )
}


export default Nav;