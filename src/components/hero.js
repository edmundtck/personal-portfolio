import React, { useEffect } from 'react';
import * as styles from '../styles/hero.module.scss';
import { useInView } from 'react-intersection-observer';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { heading1, btn, img } from '../styles/common-styles.module.scss';
import photo from '../assets/photo2.jpg';

const Hero = ({ toggleNavbar, isToggleNavbar }) => {
	const { ref, inView } = useInView({
		threshold: 0.05
	});

	useEffect(
		() => {
			if (inView) isToggleNavbar(false);
			if (!inView) isToggleNavbar(true);
		},
		[ inView, isToggleNavbar ]
	);

	return (
		<header className={styles.hero} ref={ref} id="home">
			<div className={styles.heroContainer}>
				<div className={styles.content}>
					<h2 className={styles.subtitle}>Hi there!</h2>
					<h1 className={`${heading1} ${styles.title}`}>
						I'm <span className={styles.titleHighlight}>Edmund</span> Teo.
					</h1>
					<p>
						I'm a <strong>web developer</strong>. Always on a lookout to learn new things and upgrade my
						skills. I find joy in helping people to solve problems.
					</p>
					<AnchorLink className={btn} to="/#about" title="More about me" />
				</div>
				<div className={styles.imageWrapper}>
					<img className={img} src={photo} alt="Myself" />
				</div>
			</div>
		</header>
	);
};

export default Hero;
