import style from './FooterLinks.module.css'

function FooterLinks() {
    return (
        <section className={style.footerLinks}>
            <div className={style.footerLinksContainer}>

                <div>
                    <h3 className={style.footerLinksTitle}>DC COMICS</h3>
                    <ul className={style.footerLinksList}>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className={style.footerLinksTitle}>DC</h3>
                    <ul className={style.footerLinksList}>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className={style.footerLinksTitle}>SITES</h3>
                    <ul className={style.footerLinksList}>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className={style.footerLinksTitle}>SHOP</h3>
                    <ul className={style.footerLinksList}>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DC Collectibles</a></li>
                    </ul>
                </div>
                <div>
                    <img src="/img/dc-logo-bg.png" alt="" className={style.logoBgFooter}/>
                </div>
            </div>
        </section>
    )
}

export default FooterLinks;