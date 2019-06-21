import React from 'react'
import axios from "axios";
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import './notifications.css'
import { navigate } from "gatsby"
import { isLoggedIn, getToken } from "../services/auth"
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

const SERVER_URL = 'http://173.255.212.65:8080';

function passData(first, second, third) {
	return { first, second, third };
}
const odata = [
	passData('Date', 'Message', 'Sort By'),
];


class NotificationsPage extends React.Component {
    constructor(props) {
      	super(props);
		this.state = {
			open: false,
			tableData: [],
			scheduleSendingTime: new Date(),
			message: "",
			isSuccessful: false,
		};
		this.handleDateChange = this.handleDateChange.bind(this);
	}

	getNotifications = async () => {
		const NOTIFICATIONS_ENDPOINT = SERVER_URL+'/v1/api/app/admin/client-app/notifications';
		console.log(getToken());
		
		let config = {
			headers: {
				"client-key":"julklsjdmmaludnm01#",
				"Authorization": "Bearer "+getToken().token
			}
		}
		
		try {
			let response = await axios.get(NOTIFICATIONS_ENDPOINT, config);
			
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

	postNotifications = async () => {
		const POST_NOTIFICATIONS_ENDPOINT = SERVER_URL+'/v1/api/app/admin/client-app/notification/create';
		
		let config = {
			headers: {
				"client-key":"julklsjdmmaludnm01#",
				"Authorization": "Bearer "+getToken().token
			}
		}
		
		var sendNow = true;
		// if(!this.state.scheduleSendingTime==Date.now()){
		// 	sendNow=false;
		// }

		let ndata = {
			"message": this.state.message,
			"scheduleSendingTime": this.state.scheduleSendingTime,
			"sendNow": sendNow
		}
		
		try {
			let response = await axios.post(POST_NOTIFICATIONS_ENDPOINT, ndata, config);
			
			if (response.status === 200) {
				console.log(response)
				return response;
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

	handleDateChange(date) {
		this.setState({
			scheduleSendingTime: date
		});
	}

	handleNotificationInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleSend = event => {
		this.postNotifications().then(response => {
			if(response.status === 200){
				this.setState({
					isShowing: false,
					isSuccessful: true
				});
			}
		});
	}

	componentDidMount(){
		console.log("component mounted");
		
		if (!this.state.tableData.length) {
			this.getNotifications()
			.then(tableData => this.setState({tableData}))
			.catch(err => { /*...handle the error...*/});

			console.log("who is called");

			console.log(this.state.tableData);
			
        } else {
			console.log(this.state.tableData);
			
		}
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
	
	closeSuccessfulModalHandler = () => {
        this.setState({
            isSuccessful: false
        });
    }
	
	render () {

		const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
		
		console.log("called");
		console.log(this.state.tableData);

		/**auth();*/

		if (this.state.tableData.length == 0) {
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
					<p className="n-headtext">NOTIFICATIONS ({this.state.tableData.length})</p>
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
								<DatePicker
									name="scheduleSendingTime"
									className="datepicker"
									todayButton={"Today"}
									placeholderText="Pick Date"
									minDate={new Date()}
									dateFormat="dd/MM/yyyy"
									selected={this.state.scheduleSendingTime}
									onChange={this.handleDateChange}
								/>
								<div className="right">
									<p className="type">Type</p>
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
								<textarea
									name="message"
									className="textarea"
									rows="10"
									placeholder="Type your message here"
									onChange={this.handleNotificationInputChange}
								></textarea>
							</div>

							<button className="btn-continue" onClick={this.handleSend}>SEND</button>
						</Modal>
					</div>

					<div>
						{ this.state.isSuccessful ? <div onClick={this.closeSuccessfulModalHandler} className="back-drop"></div> : null }
						<ModalSub
							className="modal"
							show={this.state.isSuccessful}
							close={this.closeSuccessfulModalHandler}
						>
							<div className="info">
								<img src="/images/checkmark.png" className="check-img" />
								<p className="p-text">Notification successfully sent</p>
							</div>
						</ModalSub>
					</div>
	
					<PageTables
						headers={odata}
						rows={this.state.tableData}>
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