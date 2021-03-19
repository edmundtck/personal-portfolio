import React from 'react';
import { Link } from 'gatsby';

import * as styles from '../styles/404.module.scss';
import { btn } from '../styles/common-styles.module.scss';

const Error = () => {
	return (
		<div className={styles.error}>
			<h1 className={styles.title}>Page Not Found.</h1>
			<Link to="/" className={btn}>
				Go back
			</Link>
		</div>
	);
};

export default Error;
