import React, { useState } from 'react';
import '../styles/index.scss';
import Navbar from '../components/navbar';
import About from '../components/about';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Works from '../components/works';
import Contact from '../components/contact';
import SEO from '../components/seo';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faExternalLinkAlt);

export default function Home() {
	const [ toggleNavbar, isToggleNavbar ] = useState(false);

	return (
		<div className="wrapper">
			<SEO />
			<Navbar toggleNavbar={toggleNavbar} />
			<Hero isToggleNavbar={isToggleNavbar} toggleNavbar={toggleNavbar} />
			<About />
			<Works />
			<Contact />
			<Footer />
		</div>
	);
}
