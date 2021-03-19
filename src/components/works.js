import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { heading2, heading3, linkIcon } from '../styles/common-styles.module.scss';
import expiryTracker from '../assets/expiry-tracker.png';
import sleepTimePlanner from '../assets/sleep-time-planner.png';
import taskTracker from '../assets/task-tracker.png';
import * as styles from '../styles/works.module.scss';

const Works = () => {
	return (
		<section className={styles.works} id="works">
			<div className={styles.header}>
				<h2 className={heading2}>My Works</h2>
				<p>Some of the things that I'm working on. Creating applications that make life a little easier.</p>
			</div>
			<div className={styles.list}>
				<div className={styles.item}>
					<div className={styles.content}>
						<h3 className={heading3}>Expiry Tracker</h3>
						<p>
							This application is to track the expiry date of products. When product is within 1 week to
							expiration, the card will indicate in yellow color.
						</p>
						<ul className={styles.stack}>
							<li className={styles.stackItem}>React</li>
							<li className={styles.stackItem}>Redux</li>
							<li className={styles.stackItem}>Material UI</li>
							<li className={styles.stackItem}>Node.js</li>
							<li className={styles.stackItem}>MongoDB</li>
						</ul>
						<ul className={styles.action}>
							<li className={styles.actionItem}>
								<a
									href="https://github.com/edmundtck/expiry-tracker"
									target="_blank"
									rel="noreferrer"
									className={linkIcon}
								>
									<FontAwesomeIcon icon={[ 'fab', 'github' ]} size="lg" />
								</a>
							</li>
							<li className={styles.actionItem}>
								<a
									href="https://expiry-tracker.netlify.app/"
									rel="noreferrer"
									target="_blank"
									className={linkIcon}
								>
									<FontAwesomeIcon icon="external-link-alt" size="lg" />
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.imageWrapper}>
						<img className={styles.image} src={expiryTracker} alt="Application" />
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.content}>
						<h3 className={heading3}>Sleep Time Planner</h3>
						<p>
							This application is to help user to calculate what time he/she needs to sleep, wake up,
							leave the house so that they are able to reach their destination on the specfic timing.
						</p>
						<ul className={styles.stack}>
							<li className={styles.stackItem}>React</li>
						</ul>
						<ul className={styles.action}>
							<li className={styles.actionItem}>
								<a
									href="https://github.com/edmundtck/sleep-time-planner"
									target="_blank"
									rel="noreferrer"
									className={linkIcon}
								>
									<FontAwesomeIcon icon={[ 'fab', 'github' ]} size="lg" />
								</a>
							</li>
							<li className={styles.actionItem}>
								<a
									href="https://edmundtck.github.io/sleep-time-planner/"
									target="_blank"
									rel="noreferrer"
									className={linkIcon}
								>
									<FontAwesomeIcon icon="external-link-alt" size="lg" />
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.imageWrapper}>
						<img className={styles.image} src={sleepTimePlanner} alt="Application" />
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.content}>
						<h3 className={heading3}>Task Tracker</h3>
						<p>
							This application helps people to keep track of their tasks and remind them on the date set
							of the task. If the tasks has the same date as today, a pop up reminder will appear to
							notify the user.
						</p>
						<ul className={styles.stack}>
							<li className={styles.stackItem}>React</li>
						</ul>
						<ul className={styles.action}>
							<li className={styles.actionItem}>
								<a
									href="https://github.com/edmundtck/task-tracker-app"
									target="_blank"
									rel="noreferrer"
									className={linkIcon}
								>
									<FontAwesomeIcon icon={[ 'fab', 'github' ]} size="lg" />
								</a>
							</li>
							<li className={styles.actionItem}>
								<a
									href="https://edmundtck.github.io/task-tracker-app/"
									target="_blank"
									rel="noreferrer"
									className={linkIcon}
								>
									<FontAwesomeIcon icon="external-link-alt" size="lg" />
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.imageWrapper}>
						<img className={styles.image} src={taskTracker} alt="Application" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Works;
