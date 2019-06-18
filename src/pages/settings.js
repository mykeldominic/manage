import React from 'react'
import PropTypes from 'prop-types'
import './settings.css'
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import Layout from 'components/Layout'
import NavTabs from 'components/TabBar'
import ModalSub from 'components/Modal/modalsub'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

/**function auth() {
	{isLoggedIn() ? (
			navigate(`/notifications`)
	) : (
		navigate(`/app/login`)
	)}
}**/


class SettingsPage extends React.Component {
    constructor(props) {
      	super(props);
        	this.state = {
				open: false,
			};
	}

	openFeedbackModalHandler = () => {
        this.setState({
			isFeedbackShowing: true
        });
	}

    closeModalHandler = () => {
        this.setState({
			isFeedbackShowing: false,
        });
	}
	
	render () {

		const pageTitle = location ? location.pathname.replace(/\//g, '') : ''

		/**auth();*/

		return (
			<Layout location={location} title={pageTitle}>
				<div className="s-container">
					<p className="s-headtext">Profile Settings</p>

					<Button className="n-primarybutton" onClick={this.openFeedbackModalHandler}>FEEDBACK</Button>

					<NavTabs />
					
					<div>
						{ this.state.isFeedbackShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<ModalSub
							className="modal"
							show={this.state.isFeedbackShowing}
							close={this.closeModalHandler}
						>
							<div className="info">
								<img src="/images/checkmark.png" className="check-img" />
								<p className="p-text">Profile Updated</p>
							</div>
						</ModalSub>
					</div>

				</div>
			</Layout>
		);
    }
};

SettingsPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}

export default SettingsPage