import packageJson from "../../../../package.json";
import Copyrights from "../../generics/Copyrights";
import SocialNetworks from "../../generics/SocialNetworks";
import styles from "./Footer.module.scss";

const { version } = packageJson;

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.info}>
			<Copyrights />
			<span className={styles.version}>v{version}</span>
		</div>
		<div className={styles.socials}>
			<SocialNetworks context="footer" />
		</div>
	</footer>
);

export default Footer;
