import style from './SocialBar.module.css'
import { socials } from '../../data/footer_socials.js';

function render_socials_icons(socials) {
    return socials.map((social) => {
        const { src, alt, id } = social;
        return (
            <a href="#" key={id} className={style.footerSocialIcon} aria-label={alt} >
                <img src={src} alt={alt} />
            </a>
        )
    });
}

function SocialBar() {

    let social_icons = render_socials_icons(socials);

    return (
        <section className={style.footerSocial}>
            <div className={style.footerSocialContainer}>
                <button className={style.footerSocialBtn}>SIGN-UP NOW!</button>

                <div className={style.footerSocialChannels}>
                    <h3 className={style.footerSocialTitle}>FOLLOW US</h3>

                    {social_icons}
                </div>
            </div>
        </section>
    )
}

export default SocialBar;