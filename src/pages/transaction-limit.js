import React from 'react'
import axios from "axios";
import PropTypes from 'prop-types'
import './notifications.css'
import { navigate } from "gatsby"
import { isLoggedIn, getToken } from "../services/auth"
import Layout from 'components/Layout'
import Modal from 'components/Modal/modal'
import Typography from '@material-ui/core/Typography'
import PageTables from 'components/Table/t-table'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

/**function auth() {
	{isLoggedIn() ? (
			navigate(`/notifications`)
	) : (
		navigate(`/app/login`)
	)}
}**/

const SERVER_URL = 'http://173.255.212.65:8080';


function passData(first, second, third, fourth, fifth) {
	return { first, second, third, fourth, fifth };
}
const odata = [
	passData('Date', 'Customer', 'Initial limit', 'New limit', 'Action'),
];

// function createData(date, customername, customerphone, initiallimit, newlimit) {
// 	return { date, customername, customerphone, initiallimit, newlimit };
// }

// const tdata = [
// 	createData('2nd Jun, 2019', 'Tochi Onuchukwu', '0149988767', 'N100,000', 'N500,000'),
//     createData('2nd Jul, 2019', 'Alex Iwobi', '0149988767', 'N200,000', 'N800,000'),
//     createData('2nd Aug, 2019', 'Anthony Joshua', '0149988767', 'N100,000', 'N200,000'),
//     createData('2nd Jun, 2019', 'Tochi Onuchukwu', '0149988767', 'N300,000', 'N600,000'),
// ];


class TransactionLimitRequestPage extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			open: false,
			tableData: []
		};
	}

	getTransactionLimit = async () => {
		const TRANSACTIONLIMIT_ENDPOINT = SERVER_URL+'/v1/api/app/admin/customer-request/limit-update//pending-request';
		console.log(getToken());
		
		let config = {
			headers: {
				"client-key":"julklsjdmmaludnm01#",
				"Authorization": "Bearer "+getToken().token
			}
		}
		
		try {
			let response = await axios.get(TRANSACTIONLIMIT_ENDPOINT, config);
			
			if (response.status === 200) {
				console.log(response)
				return response.data.data.records;
			} else {
				//display error
				console.log('error');
				return [];
			}
		} catch (error) {
			console.log("the error")
			console.log(error);
			return [];
		}
	}

	componentDidMount(){
		console.log("component mounted");
		
		if (!this.state.tableData.length) {
			this.getTransactionLimit()
			.then(tableData => this.setState({tableData}))
			.catch(err => { /*...handle the error...*/});

			console.log("who is called");

			console.log(this.state.tableData);
			
        } else {
			console.log(this.state.tableData);
			
		}
	}

	const [open, setOpen] = React.useState(false);

	function handleClick() {
		setOpen(true);
	}

	function handleClose(event, reason) {
		if (reason === 'clickaway') {
		return;
		}

		setOpen(false);
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

		console.log("called");
		console.log(this.state.tableData);

		if (this.state.tableData.length == 0) {
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
					<p className="n-headtext">TRANSACTION LIMIT ({this.state.tableData.length})</p>
                    <p>Handle all transaction limit request from your customers</p>
					
					<div className="n-filterrow">
						
						<Button className="n-primarybutton" onClick={this.openModalHandler}>DECLINE LIMIT</Button>
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

TransactionLimitRequestPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}

export default TransactionLimitRequestPage