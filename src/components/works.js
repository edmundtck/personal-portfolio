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
				<p>
					Some of the things that I am working on.
					<br />
					Creating applications that make life a little easier.
				</p>
			</div>
			<div className={styles.list}>
				<div className={styles.item}>
					<div className={styles.content}>
						<h3 className={heading3}>Expiry Tracker</h3>
						<p>
							This application tracks the expiry date of products sorted in sequence. When a product is
							within 1 week to expiry, the card will indicate in yellow. Red card represents that a
							product has expired. Green card means that a product is still in good condition.
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
							This application helps user to calculate what time he/she needs to sleep, wake up and leave
							their place so they are able to reach their destination on time. User can refer to the time
							schedule after the calculation is completed.
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
							This application helps user to keep track of their tasks with an option to set reminder. A
							pop-up reminder will appear to remind user of the task to be completed.
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
