import React from 'react'
import PropTypes from 'prop-types'
import { getUser } from "../../services/auth"
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import HelpIcon from '@material-ui/icons/Help'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const lightColor = '#131212'

const styles = theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		padding: 4,
		background: '#fff',
		borderTop: '3px solid #58966A',
		borderBottom: '1.5px solid #EDEDED',
	},
	secondaryBar: {
		zIndex: 0,
	},
	menuButton: {
		marginLeft: -theme.spacing.unit,
	},
	iconButtonAvatar: {
		padding: 4,
	},
	link: {
		color: lightColor,
		'&:hover': {
			color: '#131212',
		},
		fontWeight: 500,
	},
	button: {
		borderColor: lightColor,
	},
	avatar: {
		img: {
			margin: 0,
		},
	},
})

function Header({ classes, onDrawerToggle, title }) {
	return (
		<>
			<AppBar color="primary" position="sticky" className={classes.appBar} elevation={0}>
				<Toolbar>
					<Grid container spacing={8} alignItems="center">
						<Hidden smUp>
							<Grid item>
								<IconButton
									color="inherit"
									aria-label="Open drawer"
									onClick={onDrawerToggle}
									className={classes.menuButton}
								>
									<MenuIcon />
								</IconButton>
							</Grid>
						</Hidden>
						<Grid item xs>
							<img src="/images/logo.png" />
						</Grid>
						<Grid item>
							<Tooltip title="Alerts • No alters">
								<IconButton color="inherit">
									<NotificationsIcon />
								</IconButton>
							</Tooltip>
						</Grid>
						<Grid item>
							<Grid container alignItems="center" spacing={16} direction="row">
								<Avatar className={classes.avatar} src="/images/user.png" />
								<Grid item className={classes.link}>{getUser().name}</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			{/*
			<AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
				<Toolbar>
					<Grid container alignItems="center" spacing={8}>
						<Grid item xs>
							<Typography style={{ textTransform: 'capitalize' }} color="inherit" variant="h5">
								{title}
							</Typography>
						</Grid>
						<Grid item>
							<Button className={classes.button} variant="outlined" color="inherit" size="small">
								Web setup
							</Button>
						</Grid>
						<Grid item>
							<Tooltip title="Help">
								<IconButton color="inherit">
									<HelpIcon />
								</IconButton>
							</Tooltip>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			yjn*/}
		</>
	)
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	onDrawerToggle: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
}

export default withStyles(styles)(Header)
