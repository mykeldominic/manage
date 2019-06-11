import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import ContentGraphic from './ContentGraphic'
const styles = theme => ({
	container: {
		padding: '50px',
	},
})

function Content({ classes }) {
	return (
		<div className={classes.container}></div>
	)
}

Content.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content)
