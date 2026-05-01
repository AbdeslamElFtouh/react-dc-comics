import style from './SocialBar.module.css'

function SocialBar() {
    return (
        <section className={style.footerSocial}>
            <div className={style.footerSocialContainer}>
                <button className={style.footerSocialBtn}>SIGN-UP NOW!</button>

                <div className={style.footerSocialChannels}>
                    <h3 className={style.footerSocialTitle}>FOLLOW US</h3>

                    <a href="#" className={style.footerSocialIcon} aria-label="Facebook">
                        <img src="/img/footer-facebook.png" alt="Facebook" />
                    </a>

                    <a href="#" className={style.footerSocialIcon} aria-label="Twitter">
                        <img src="/img/footer-twitter.png" alt="Twitter" />
                    </a>

                    <a href="#" className={style.footerSocialIcon} aria-label="YouTube">
                        <img src="/img/footer-youtube.png" alt="YouTube" />
                    </a>

                    <a href="#" className={style.footerSocialIcon} aria-label="Pinterest">
                        <img src="/img/footer-pinterest.png" alt="Pinterest" />
                    </a>

                    <a href="#" className={style.footerSocialIcon} aria-label="Location">
                        <img src="/img/footer-periscope.png" alt="Location" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SocialBar;