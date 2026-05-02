import style from './Header.module.css';
import { links } from '../data/header_links.js';


function render_links(links) {
    return links.map(link => {
        const { id, name, active } = link;
        if (active === false) {
            return (
                <li key={id} className={style.active}>
                    <a href="#">{name}</a>
                </li>
            );
        } else {
            return (
                <li key={id}>
                    <a href="#">{name}</a>
                </li>
            )
        };
    });
}
function Header() {

    const links_jsx = render_links(links);

    return (
        <header>
            <nav className={style.headerContainer}>

                {/* Icona NavBar */}
                <div className={style.headerLogo}>
                    <img src="/img/dc-logo.png" alt="DC Comics logo" />
                </div>

                {/* Menu NavBar */}
                <ul className={style.headerMenu}>
                    {links_jsx}
                </ul>

            </nav>
        </header>
    );
}

export default Header;