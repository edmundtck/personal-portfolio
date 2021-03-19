import React from 'react';
import * as styles from '../styles/footer.module.scss';

const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<p className={styles.copyright}>&copy; {date} Edmund Teo. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
