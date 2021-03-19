import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from '../styles/contact.module.scss';
import { heading2, btn, linkIcon } from '../styles/common-styles.module.scss';

const Contact = () => {
	const [ form, setForm ] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
	};
	return (
		<section className={styles.contact} id="contact">
			<div className={styles.contactContainer}>
				<div className={styles.content}>
					<h2 className={heading2}>Contact Me</h2>
					<p>If you would like to connect with me, you can fill in the form or reach me via LinkedIn.</p>
					<ul className={styles.actions}>
						<li>
							<a
								href="https://www.linkedin.com/in/edmundtck/"
								rel="noreferrer"
								target="_blank"
								className={linkIcon}
							>
								<FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} size="2x" />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/edmundtck"
								rel="noreferrer"
								target="_blank"
								className={linkIcon}
							>
								<FontAwesomeIcon icon={[ 'fab', 'github' ]} size="2x" />
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.formWrapper}>
					<form
						action="https://getform.io/f/a33ba00a-9d7a-41d4-b505-62ce9aee9eda"
						method="POST"
						className={styles.form}
					>
						<div className={styles.formGroup}>
							<label htmlFor="form-name" className={styles.formLabel}>
								Name
							</label>
							<input
								className={styles.formField}
								type="text"
								name="name"
								id="form-name"
								onChange={handleFormChange}
								value={form.name}
								required
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="form-email" className={styles.formLabel}>
								Email
							</label>
							<input
								className={styles.formField}
								type="email"
								name="email"
								id="form-email"
								onChange={handleFormChange}
								value={form.email}
								required
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="form-message" className={styles.formLabel}>
								Message
							</label>
							<textarea
								className={styles.formTextarea}
								name="message"
								id="form-message"
								onChange={handleFormChange}
								value={form.message}
								required
							/>
						</div>
						<button className={`${btn} ${styles.formBtn}`} type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
