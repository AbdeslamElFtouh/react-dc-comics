import FooterBanner from "./micro-components/FooterBanner.jsx";
import FooterLinks from "./micro-components/FooterLinks.jsx";
import SocialBar from "./micro-components/SocialBar.jsx";

function Footer() {
    return (
        <footer>
            <FooterBanner />
            <FooterLinks />
            <SocialBar />
        </footer>
    )
}

export default Footer;