import React from 'react'
import PropTypes from 'prop-types'
import './notifications.css'
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import Layout from 'components/Layout'
import Modal from 'components/Modal/modal'
import ModalSub from 'components/Modal/modalsub'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import PageTables from 'components/Table/n-table'
import Button from '@material-ui/core/Button'

/**function auth() {
	{isLoggedIn() ? (
			navigate(`/notifications`)
	) : (
		navigate(`/app/login`)
	)}
}**/

function passData(first, second, third) {
	return { first, second, third };
}
const odata = [
	passData('Date', 'Message', 'Sort By'),
];

function createData(date, message, initials, sortby) {
	return { date, message, initials, sortby };
}

function createInitials(firstName, lastName){
	var a = firstName.split("")[0];
	var b = lastName.split("")[0];
	return a+b;
}

const tdata = [
	createData('2nd Jun, 2019', 'Enjoy this festive season as with us as we are giving away N1000,000 to 10 lucky owners of surrent account', createInitials('Jonathan', 'Dumebi'), 'Jonathan Dumebi'),
	createData('25th May, 2019', 'Fraud Alert - Dear customer please do not disclose your internet banking pin, your ATM pin or your Bank verification number BVN to anyone to avoid been scammed', createInitials('Tochi', 'Onuchukwu'), 'Tochi Onuchukwu'),
	createData('8th Jan, 2019', 'Enjoy this festive season as with us as we are giving away N1000,000 to 10 lucky owners of surrent account', createInitials('Emeka', 'Azonobi'), 'Emeka Azonobi'),
];


class NotificationsPage extends React.Component {
    constructor(props) {
      	super(props);
        	this.state = {
				open: false,
			};
	}

	openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
	
	render () {

		const pageTitle = location ? location.pathname.replace(/\//g, '') : ''

		/**auth();*/

		if (!tdata) {
			return (
				<Layout location={location} title={pageTitle}>
					<div className="n-container">
						<p className="n-headtext">NOTIFICATIONS (0)</p>
						<p>Send notifications to all customers using this channel</p>
						
						<div className="n-box">
							<img src="/images/safebox.png" className="n-img" />
							
							<p className="n-headtext">EMPTY NOTIFICATION</p>
							<p className="n-center">You haven’t sent any notification, click the <br></br>button below to send one now</p>

							<Button className="n-primarybutton" onClick={this.openModalHandler}>SEND A NOTIFICATION</Button>
						</div>
					</div>
				</Layout>
			)
		}

        return (
			<Layout location={location} title={pageTitle}>
				<div className="n-container">
					<p className="n-headtext">NOTIFICATIONS ({tdata.length})</p>
					<p>Send notifications to all customers using this channel</p>
					
					<div className="n-filterrow">
						
						<Button className="n-primarybutton" onClick={this.openModalHandler}>SEND A NOTIFICATION</Button>
					</div>

					<div>
						{ this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<Modal
							className="modal"
							show={this.state.isShowing}
							close={this.closeModalHandler}
							header="Send a Notification"
						>
							<div className="row">
								<select>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
								<div className="right">
									<p>Type</p>
									<Tooltip title="Sends Notification within the app">
										<button className="link-btn">In app</button>
									</Tooltip>
									<Tooltip title="Sends Notification within the app">
										<button className="link-btn">External</button>
									</Tooltip>
								</div>
							</div>
							<div className="formgroup">
								<p className="p">Notification Message</p>
								<textarea className="textarea" rows="10" placeholder="Type your message here"></textarea>
							</div>

							<button className="btn-continue" onClick={this.closeModalHandler}>SEND</button>
						</Modal>
					</div>

					{/**<div>
						{ this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<ModalSub
							className="modal"
							show={this.state.isShowing}
							close={this.closeModalHandler}
						>
							<div className="info">
								<img src="/images/checkmark.png" className="check-img" />
								<p className="p-text">Notification successfully sent</p>
							</div>
						</ModalSub>
					</div>*/}
	
					<PageTables
						headers={odata}
						rows={tdata}>
					</PageTables>
				</div>
			</Layout>
		);
    }
};

NotificationsPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}

export default NotificationsPage