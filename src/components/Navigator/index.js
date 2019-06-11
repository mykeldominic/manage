import React from 'react'
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NotificationIcon from '@material-ui/icons/Email'
import DnsRoundedIcon from '@material-ui/icons/DnsRounded'
import HistoryIcon from '@material-ui/icons/History'
import AssignmentIcon from '@material-ui/icons/Assignment'
import PeopleIcon from '@material-ui/icons/People'
import SettingsIcon from '@material-ui/icons/Settings'
import SignoutIcon from '@material-ui/icons/PhotoSizeSelectActual'

const styles = theme => ({
	categoryHeader: {
		paddingTop: 16,
		paddingBottom: 16,
	},
	categoryHeaderPrimary: {
		color: theme.palette.common.white,
	},
	lists: {
		marginTop: 50,
	},
	nested: {
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 55,
	},
	item: {
		marginTop: 15,
		marginBottom: 15,
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 20,
		color: '#5E5E5E',
	},
	text: {
		fontSize: '0.9em',
	},
	itemCategory: {
		backgroundColor: '#fff',
		boxShadow: '0 -1px 0 #404854 inset',
		paddingTop: 12,
		paddingBottom: 12,
		marginTop: 0,
		marginBottom: 0,
	},
	itemActionable: {
		'&:hover': {
			backgroundColor: 'rgba(179, 140, 10, 0.1)',
		},
	},
	itemActiveItem: {
		color: '#B38C0A',
		backgroundColor: 'rgba(179, 140, 10, 0.1)',
		fontWeight: 600,
		paddingLeft: 17,
		borderLeft: '3px solid #B38C0A',
	},
	decoration: {
		textDecoration: 'none',
		color: '#5E5E5E',
	},
	textDense: {},
})

function Navigator({ classes, location = null, ...rest }) {
	const matchPath = location ? location.pathname.replace(/\//g, '') : null

	const [open, setOpen] = React.useState(true);

	function handleClickRequest() {
		setOpen(!open);
	}

	function handleClickHistory() {
		setOpen(!open);
	}
	
	return (
		<Drawer variant="permanent" {...rest}>

			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				className={classes.root}
				>
				<ListItem className={classes.lists}>
					<ListItemText></ListItemText>
				</ListItem>

				<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/notifications">
					<ListItem
						button
						dense
						className={classNames(
							classes.item,
							classes.itemActionable
						)}>
						<ListItemIcon>
							<NotificationIcon />
						</ListItemIcon>
						<ListItemText className={classes.text} primary="Notifications" />
					</ListItem>
				</Link>

				<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/adverts">
					<ListItem
						button
						dense
						className={classNames(
							classes.item,
							classes.itemActionable,
							classes.itemActiveItem
						)}>
						<ListItemIcon>
							<DnsRoundedIcon />
						</ListItemIcon>
						<ListItemText className={classes.text} primary="Adverts" />
					</ListItem>
				</Link>

				<ListItem
					button
					dense
					onClick={handleClickRequest}
					className={classNames(
						classes.item,
						classes.itemActionable
					)}>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText className={classes.text} primary="Requests" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/debit-card-request">
							<ListItem
								button
								dense
								className={classNames(
									classes.itemActionable,
									classes.nested
								)}>
								<ListItemText className={classes.text} primary="Debit card request" />
							</ListItem>
						</Link>
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/notifications">
							<ListItem
								button
								dense
								className={classNames(
									classes.itemActionable,
									classes.nested
								)}>
								<ListItemText className={classes.text} primary="Cheque book request" />
							</ListItem>
						</Link>
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/notifications">
							<ListItem
								button
								dense
								className={classNames(
									classes.itemActionable,
									classes.nested
								)}>
								<ListItemText className={classes.text} primary="Transaction Limit" />
							</ListItem>
						</Link>
					</List>
				</Collapse>

				<ListItem
					button
					dense
					onClick={handleClickHistory}
					className={classNames(
						classes.item,
						classes.itemActionable
					)}>
					<ListItemIcon>
						<HistoryIcon />
					</ListItemIcon>
					<ListItemText className={classes.text} primary="Request History" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/notifications">
							<ListItem
								button
								dense
								className={classNames(
									classes.itemActionable,
									classes.nested
								)}>
								<ListItemText className={classes.text} primary="Debit card request" />
							</ListItem>
						</Link>
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/notifications">
							<ListItem
								button
								dense
								className={classNames(
									classes.itemActionable,
									classes.nested
								)}>
								<ListItemText className={classes.text} primary="Cheque book request" />
							</ListItem>
						</Link>
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/notifications">
							<ListItem
								button
								dense
								className={classNames(
									classes.itemActionable,
									classes.nested
								)}>
								<ListItemText className={classes.text} primary="Transaction Limit" />
							</ListItem>
						</Link>
					</List>
				</Collapse>
				
				<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/admins">
					<ListItem
						button
						dense
						className={classNames(
							classes.item,
							classes.itemActionable
						)}>
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText className={classes.text} primary="Admins" />
					</ListItem>
				</Link>

				<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/settings">
					<ListItem
						button
						dense
						className={classNames(
							classes.item,
							classes.itemActionable
						)}>
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText className={classes.text} primary="Profile Settings" />
					</ListItem>
				</Link>

				<ListItem
					button
					dense
					className={classNames(
						classes.item,
						classes.itemActionable
					)}>
					<ListItemIcon>
						<SignoutIcon />
					</ListItemIcon>
					<ListItemText className={classes.text}>
						{isLoggedIn() ? (
							<a
								href="/"
								style={{ textDecoration: 'none', color: 'inherit', width: '100px' }}
								onClick={event => {
								event.preventDefault()
								logout(() => navigate(`/app/login`))
								}}
							>
								Logout
							</a>
						) : null}
					</ListItemText>
				</ListItem>
			</List>
		</Drawer>
	)
}

Navigator.propTypes = {
	classes: PropTypes.object.isRequired,
	location: PropTypes.object,
}

export default withStyles(styles)(Navigator)
