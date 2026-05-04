import style from './FooterBanner.module.css';

function render_banner_items(items) {
    return (items.map(({ src, text, id }) => {
        return (
            <div key={id} className={style.footerBannerItem}>
                <img src={src} alt={text.toLowerCase()} className={style.footerBannerIcon} />
                <span>{text}</span>
            </div>
        );
    }))
};

function FooterBanner({ lista_banner_items }) {

    let banner_items = render_banner_items(lista_banner_items);

    return (
        <section className={style.footerBanner}>
            <div className={style.footerBannerContainer}>
                {banner_items}
            </div>
        </section>
    )
}

export default FooterBanner;