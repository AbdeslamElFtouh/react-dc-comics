import style from './FooterBanner.module.css';

function FooterBanner() {
    return (
        <section className={style.footerBanner}>
            <div className={style.footerBannerContainer}>
                <div className={style.footerBannerItem}>
                    <img src="/img/buy-comics-digital-comics.png" alt="Digital Comics" className={style.footerBannerIcon}/>
                    <span>DIGITAL COMICS</span>
                </div>

                <div className={style.footerBannerItem}>
                    <img src="/img/buy-comics-merchandise.png" alt="DC Merchandise" className={style.footerBannerIcon}/>
                    <span>DC MERCHANDISE</span>
                </div>

                <div className={style.footerBannerItem}>
                    <img src="/img/buy-comics-subscriptions.png" alt="Subscription" className={style.footerBannerIcon}/>
                    <span>SUBSCRIPTION</span>
                </div>

                <div className={style.footerBannerItem}>
                    <img src="/img/buy-comics-shop-locator.png" alt="Comic Shop Locator" className={style.footerBannerIcon}/>
                    <span>COMIC SHOP LOCATOR</span>
                </div>

                <div className={style.footerBannerItem}>
                    <img src="/img/buy-dc-power-visa.svg" alt="DC Power Visa" className={style.footerBannerIcon}/>
                    <span>DC POWER VISA</span>
                </div>
            </div>
        </section>
    )
}

export default FooterBanner;