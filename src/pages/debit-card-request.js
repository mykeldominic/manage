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
import PageTables from 'components/Table/d-table'
import Button from '@material-ui/core/Button'

/**function auth() {
	{isLoggedIn() ? (
			navigate(`/notifications`)
	) : (
		navigate(`/app/login`)
	)}
}**/

function passData(first, second, third, fourth, fifth, sixth) {
	return { first, second, third, fourth, fifth, sixth };
}
const odata = [
	passData('Date', 'Customer', 'Card type', 'Pickup Branch', 'Status', 'Action'),
];

function createData(date, customername, customerphone, card, branch, status, action) {
	return { date, customername, customerphone, card, branch, status, action };
}

const tdata = [
	createData('2nd Jun, 2019', 'Tochi Onuchukwu', '0149988767', 'Mastercard', 'Ikeja', 'Pending', 'Start Process'),
    createData('2nd Jul, 2019', 'Alex Iwobi', '0149988767', 'Verve', 'Ikorodu', 'Processing', 'Mark as done'),
    createData('2nd Aug, 2019', 'Anthony Joshua', '0149988767', 'Visa', 'Ajah', 'Pending', 'Start Process'),
];


class DebitCardRequestPage extends React.Component {
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
						<p className="n-headtext">DEBIT CARD REQUESTS (0)</p>
						<p>Handle all debit card requests from your customers</p>
						
						<div className="n-box">
							<img src="/images/safebox.png" className="n-img" />
							
							<p className="n-headtext">NO DEBIT CARD REQUEST</p>
							<p className="n-center">You haven’t received any debit card request from <br></br>your customers.</p>
						</div>
					</div>
				</Layout>
			)
		}

        return (
			<Layout location={location} title={pageTitle}>
				<div className="n-container">
					<p className="n-headtext">DEBIT CARD REQUESTS ({tdata.length})</p>
                    <p>Handle all debit card requests from your customers</p>
					
					<div className="n-filterrow">
						
						<Button className="n-primarybutton" onClick={this.openModalHandler}>SEND A NOTIFICATION</Button>
					</div>
	
					<PageTables
						headers={odata}
						rows={tdata}>
					</PageTables>
				</div>
			</Layout>
		);
    }
};

DebitCardRequestPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}

export default DebitCardRequestPage