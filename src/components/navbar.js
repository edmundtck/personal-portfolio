import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import logo from '../assets/logo.svg';
import { img } from '../styles/common-styles.module.scss';
import * as styles from '../styles/navbar.module.scss';

const MainNavbar = ({ toggleNavbar }) => {
	return (
		<nav className={`${styles.navbar} ${toggleNavbar ? styles.navbarActive : ''}`}>
			<div className={styles.logoWrapper}>
				<AnchorLink className={styles.link} to="/#home" title="Home">
					<img className={img} src={logo} alt="Logo" />
				</AnchorLink>
			</div>
			<ul className={styles.nav}>
				<li>
					<AnchorLink className={styles.link} to="/#about" title="About" />
				</li>
				<li>
					<AnchorLink className={styles.link} to="/#works" title="Works" />
				</li>
				<li>
					<AnchorLink className={styles.link} to="/#contact" title="Contact" />
				</li>
			</ul>
		</nav>
	);
};

export default MainNavbar;
