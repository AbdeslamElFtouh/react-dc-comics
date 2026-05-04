import FooterBanner from "./micro-components/FooterBanner.jsx";
import FooterLinks from "./micro-components/FooterLinks.jsx";
import SocialBar from "./micro-components/SocialBar.jsx";

function Footer() {
    return (
        <footer>
            <FooterBanner
                lista_banner_items={[
                    {
                        id: 1,
                        src: "/img/buy-comics-digital-comics.png",
                        text: "DIGITAL COMICS"
                    },
                    {
                        id: 2,
                        src: "/img/buy-comics-merchandise.png",
                        text: "DC MERCHANDISE"
                    },
                    {
                        id: 3,
                        src: "/img/buy-comics-subscriptions.png",
                        text: "SUBSCRIPTION"
                    },
                    {
                        id: 4,
                        src: "/img/buy-comics-shop-locator.png",
                        text: "COMIC SHOP LOCATOR"
                    },
                    {
                        id: 5,
                        src: "/img/buy-dc-power-visa.svg",
                        text: "DC POWER VISA"
                    }
                ]}
            />
            <FooterLinks />
            <SocialBar />
        </footer>
    )
}

export default Footer;