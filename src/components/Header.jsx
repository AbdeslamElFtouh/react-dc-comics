import style from './Header.module.css';

function render_links(links) {
    return links.map(({ id, name }) => {
        
            return (
                <li key={id}>
                    <a href="#">{name}</a>
                </li>
            );
        }
    );
}
function Header({links}) {
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