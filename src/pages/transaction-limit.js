import React from 'react'
import PropTypes from 'prop-types'
import './notifications.css'
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import Layout from 'components/Layout'
import Modal from 'components/Modal/modal'
import Typography from '@material-ui/core/Typography'
import PageTables from 'components/Table/t-table'
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
	passData('Date', 'Customer', 'Initial limit', 'New limit', 'Action'),
];

function createData(date, customername, customerphone, initiallimit, newlimit) {
	return { date, customername, customerphone, initiallimit, newlimit };
}

const tdata = [
	createData('2nd Jun, 2019', 'Tochi Onuchukwu', '0149988767', 'N100,000', 'N500,000'),
    createData('2nd Jul, 2019', 'Alex Iwobi', '0149988767', 'N200,000', 'N800,000'),
    createData('2nd Aug, 2019', 'Anthony Joshua', '0149988767', 'N100,000', 'N200,000'),
    createData('2nd Jun, 2019', 'Tochi Onuchukwu', '0149988767', 'N300,000', 'N600,000'),
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

		if (tdata.length == 0) {
			return (
				<Layout location={location} title={pageTitle}>
					<div className="n-container">
						<p className="n-headtext">TRANSACTION LIMIT (0)</p>
						<p>Handle all transaction limit request from your customers</p>
						
						<div className="n-box">
							<img src="/images/safebox.png" className="n-img" />
							
							<p className="n-headtext">NO TRANSACTION LIMIT REQUEST</p>
							<p className="n-center">You haven’t received any transaction limit request from <br></br>your customers.</p>
						</div>
					</div>
				</Layout>
			)
		}

        return (
			<Layout location={location} title={pageTitle}>
				<div className="n-container">
					<p className="n-headtext">TRANSACTION LIMIT ({tdata.length})</p>
                    <p>Handle all transaction limit request from your customers</p>
					
					<div className="n-filterrow">
						
						<Button className="n-primarybutton" onClick={this.openModalHandler}>SEND A NOTIFICATION</Button>
					</div>

                    <div>
						{ this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<Modal
							className="modal"
							show={this.state.isShowing}
							close={this.closeModalHandler}
							header="Decline limit"
						>
							<div className="formgroup">
								<p className="p">Reason for decline</p>
								<textarea className="textarea" rows="8" placeholder="Type your message here"></textarea>
							</div>

                            <div className="t-buttons">
                                <button className="btn-cancel" onClick={this.closeModalHandler}>CANCEL</button>
                                <button className="btn-continue" onClick={this.closeModalHandler}>SEND</button>
                            </div>
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
								<p className="p-text">Decline successful</p>
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

DebitCardRequestPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}

export default DebitCardRequestPage