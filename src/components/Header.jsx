import style from './Header.module.css';

function Header() {
    return (
        <header>
            <nav className={style.headerContainer}>
                {/* Icona NavBar */}
                <div className={style.headerLogo}>
                    <img src="/img/dc-logo.png" alt="DC Comics logo" />
                </div>
                {/* Menu NavBar */}
                <ul className={style.headerMenu}>
                    <li><a href="#">CHARACTERS</a></li>
                    <li><a href="#" className={style.active}>COMICS</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">COLLECTIBLES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">FANS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">SHOP</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;