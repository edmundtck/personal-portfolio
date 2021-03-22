/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: `Edmund Teo`,
		description: `Edmund Teo is a web developer. Always on a lookout to learn new things and upgrade his skills. He find joy in helping people to solve problems.`,
		author: `Edmund Teo`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Edmund Teo`,
				short_name: `Edmund Teo`,
				start_url: `/`,
				background_color: `#3e4357`,
				theme_color: `#3e4357`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `src/assets/icon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-anchor-links`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [ `lato\:400,700,900,700` ],
				display: 'swap'
			}
		}
	]
};
