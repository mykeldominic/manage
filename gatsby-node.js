// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions
  
	// page.matchPath is a special key that's used for matching pages
	// only on the client.
	if (page.path.match(/^\/app/)) {
	  page.matchPath = "/app/*"
  
	  // Update the page.
	  createPage(page)
	}
}


const path = require('path')
exports.onCreateWebpackConfig = ({ actions, stage }) => {
	// enable sourcemaps on dev
	// https: //github.com/gatsbyjs/gatsby/issues/6278
	if (stage === 'develop') {
		actions.setWebpackConfig({
			devtool: 'cheap-module-source-map',
		})
	}

	actions.setWebpackConfig({
		resolve: {
			modules: [path.join(__dirname, 'src'), 'node_modules'],
			alias: {
				'~components': path.resolve(__dirname, 'src/components'),
				'~utils': path.resolve(__dirname, 'src/utils'),
			},
		},
	})
}