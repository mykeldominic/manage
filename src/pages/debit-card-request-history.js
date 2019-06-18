import React from 'react'
import PropTypes from 'prop-types'
import './notifications.css'
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import Layout from 'components/Layout'
import Typography from '@material-ui/core/Typography'
import PageTables from 'components/Table/history-table'
import Button from '@material-ui/core/Button'

/**function auth() {
	{isLoggedIn() ? (
			navigate(`/notifications`)
	) : (
		navigate(`/app/login`)
	)}
}**/

function passData(first, second, third, fourth, fifth) {
	return { first, second, third, fourth, fifth };
}
const odata = [
	passData('Date', 'Customer', 'Card type', 'Pickup Branch', 'Handled by'),
];

function createData(date, customername, customeraccount, card, branch, initials, handled) {
	return { date, customername, customeraccount, card, branch, initials, handled };
}

function createInitials(firstName, lastName){
	var a = firstName.split("")[0];
	var b = lastName.split("")[0];
	return a+b;
}

const tdata = [
	createData('2nd Jun, 2019', 'Tochi Onuchukwu', '0149988767', 'Mastercard', 'Ikeja', createInitials('Jonathan', 'Dumebi'), 'Jonathan Dumebi'),
    createData('2nd Jul, 2019', 'Alex Iwobi', '0149988767', 'Verve', 'Ikorodu', createInitials('Tochi', 'Onuchukwu'), 'Tochi Onuchukwu'),
    createData('2nd Aug, 2019', 'Anthony Joshua', '0149988767', 'Visa', 'Ajah', createInitials('Emeka', 'Azonobi'), 'Emeka Azonobi'),
];


class DebitCardRequestPage extends React.Component {
    constructor(props) {
      	super(props);
        	this.state = {
				open: false,
			};
	}
	
	render () {

		const pageTitle = location ? location.pathname.replace(/\//g, '') : ''

		/**auth();*/

		if (tdata.length == 0) {
			return (
				<Layout location={location} title={pageTitle}>
					<div className="n-container">
						<p className="n-headtext">DEBIT CARD HISTORY (0)</p>
						<p>All handled debit card requests</p>
						
						<div className="n-box">
							<img src="/images/safebox.png" className="n-img" />
							
							<p className="n-headtext">NO DEBIT CARD REQUEST</p>
							<p className="n-center">No debit card request has been handled</p>
						</div>
					</div>
				</Layout>
			)
		}

        return (
			<Layout location={location} title={pageTitle}>
				<div className="n-container">
					<p className="n-headtext">DEBIT CARD HISTORY ({tdata.length})</p>
                    <p>All handled debit card requests</p>
					
					<div className="n-filterrow">
						
						<Button className="n-primarybutton">SEND A NOTIFICATION</Button>
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