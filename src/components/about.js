import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { btn, heading2 } from '../styles/common-styles.module.scss';
import photo from '../assets/photo1.jpg';
import * as styles from '../styles/about.module.scss';

const About = () => {
	return (
		<section className={styles.about} id="about">
			<div className={styles.aboutContainer}>
				<div className={styles.imageWrapper}>
					<img className={styles.image} src={photo} alt="Myself" />
				</div>
				<div className={styles.content}>
					<h2 className={heading2}>About Me</h2>
					<p>
						A web developer that is motivated by helping people and doing meaningful things. Like to look at
						things from different perspective to solve problems. Always curious to figure out how thing
						works.
					</p>
					<AnchorLink className={btn} to="/#contact" title="Contact Me" />
				</div>
			</div>
			<div className={styles.technologies}>
				<h2 className={heading2}>Technologies</h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<FontAwesomeIcon className={styles.icon} icon={[ 'fab', 'js-square' ]} size="4x" />
						<span>JavaScript</span>
					</li>
					<li className={styles.item}>
						<FontAwesomeIcon className={styles.icon} icon={[ 'fab', 'html5' ]} size="4x" />
						<span>HTML</span>
					</li>
					<li className={styles.item}>
						<FontAwesomeIcon className={styles.icon} icon={[ 'fab', 'css3-alt' ]} size="4x" />
						<span>CSS</span>
					</li>
					<li className={styles.item}>
						<FontAwesomeIcon className={styles.icon} icon={[ 'fab', 'react' ]} size="4x" />
						<span>React</span>
					</li>
					<li className={styles.item}>
						<FontAwesomeIcon className={styles.icon} icon={[ 'fab', 'sass' ]} size="4x" />
						<span>Sass</span>
					</li>
					<li className={styles.item}>
						<FontAwesomeIcon className={styles.icon} icon={[ 'fab', 'node-js' ]} size="4x" />
						<span>Node.js</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default About;
