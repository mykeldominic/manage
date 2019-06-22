import React from 'react'
import axios from "axios";
import PropTypes from 'prop-types'
import './adverts.css'
import { navigate } from "gatsby"
import { isLoggedIn, getToken } from "../services/auth"
import Layout from 'components/Layout'
import Modal from 'components/Modal/modal'
import ModalSub from 'components/Modal/modalsub'
import Cards from 'components/Card/a-card'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

/**function auth() {
	{isLoggedIn() ? (
			navigate(`/notifications`)
	) : (
		navigate(`/app/login`)
	)}
}**/

const SERVER_URL = 'http://173.255.212.65:8080';


class AdvertsPage extends React.Component {
    constructor(props) {
      	super(props);
		this.state = {
			open: false,
			adminData: [],
			userId: "",
			email: "",
			firstName: "",
			lastName: "",
			roleList: ["ADMINISTRATOR"],
			isSuccessful: false,
		};
	}

	getAdmins = async () => {
		const ADMIN_ENDPOINT = SERVER_URL+'/v1/api/app/admin/users';
		console.log(getToken().token);
		
		let config = {
			headers: {
				"client-key":"julklsjdmmaludnm01#",
				"Authorization": "Bearer "+getToken().token
			}
		}
		
		try {
			let response = await axios.get(ADMIN_ENDPOINT, config);
			
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

	createAdmins = async () => {
		const CREATE_ADMIN_ENDPOINT = SERVER_URL+'/v1/api/app/admin/user/create';
		
		let config = {
			headers: {
				"client-key":"julklsjdmmaludnm01#",
				"Authorization": "Bearer "+getToken().token
			}
		}

		let admindata = {
			"email": this.state.email,
			"firstName": this.state.firstName,
			"lastName": this.state.lastName,
			"roleList": this.state.roleList
		}
		
		try {
			let response = await axios.post(CREATE_ADMIN_ENDPOINT, admindata, config);
			
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

	blockAdmins = async () => {
		const BLOCK_ADMIN_ENDPOINT = SERVER_URL+'/v1/api/app/admin/user/deactivate-account';
		
		let config = {
			headers: {
				"client-key":"julklsjdmmaludnm01#",
				"Authorization": "Bearer "+getToken().token
			}
		}

		let adminid = {
			"userId": this.state.userId
		}
		
		try {
			let response = await axios.post(BLOCK_ADMIN_ENDPOINT, adminid, config);
			
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

	handleNameInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleEmailInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleCreate = event => {
		this.createAdmins().then(response => {
			if(response.status === 200){
				this.setState({
					isSendShowing: false,
					isSuccessful: true
				});
			}
			console.log(response.data.data.firstName, response.data.data.lastName);
		});
	}

	handleBlock = event => {
		this.blockAdmins().then(response => {
			if(response.status === 200){
				this.setState({
					isDeleteShowing: false,
					isSuccessful: true
				});
			}
		});
	}

	componentDidMount(){
		console.log("component mounted");
		
		if (!this.state.adminData.length) {
			
			
			this.getAdmins()
			.then(adminData => this.setState({adminData}))
			.catch(err => { /*...handle the error...*/});

			console.log("who is called");

			console.log(this.state.adminData);
			
        } else {
			console.log(this.state.adminData);
			
		}
	}

	openSendModalHandler = () => {
        this.setState({
			isSendShowing: true
        });
	}
	openFeedbackModalHandler = () => {
        this.setState({
			isFeedbackShowing: true
        });
	}
	openViewModalHandler = () => {
        this.setState({
			isViewShowing: true
        });
	}
	openDeleteModalHandler = () => {
        this.setState({
			isDeleteShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
			isSendShowing: false,
			isFeedbackShowing: false,
			isViewShowing: false,
			isDeleteShowing: false
        });
	}

	closeSuccessfulModalHandler = () => {
        this.setState({
            isSuccessful: false
        });
    }
	
	render () {

		const pageTitle = location ? location.pathname.replace(/\//g, '') : ''

		/**auth();*/

		console.log("called");
		console.log(this.state.adminData);

		if (this.state.adminData.length == 0) {
			return (
				<Layout location={location} title={pageTitle}>
					<div className="n-container">
						<p className="n-headtext">ADMINS (0)</p>
						<p>Easily manage all admins within this app</p>
						
						<div className="n-box">
							<img src="/images/safebox.png" className="n-img" />
							
							<p className="n-headtext">NO ADMINS CREATED</p>
							<p className="n-center">You haven’t created any admins, click the <br></br>button below to create one now</p>

							<Button className="n-primarybutton" onClick={this.openModalHandler}>CREATE ADMIN</Button>
						</div>
					</div>
				</Layout>
			)
		}

        return (
			<Layout location={location} title={pageTitle}>
				<div className="n-container">
					<p className="n-headtext">ADMINS ({this.state.adminData.length})</p>
					<p>Easily manage all admins within this app</p>
					
					<div className="n-filterrow">
						
						<Button className="n-primarybutton" onClick={this.openSendModalHandler}>CREATE ADMIN</Button>
						<Button className="n-primarybutton" onClick={this.openViewModalHandler}>VIEW</Button>
						<Button className="n-primarybutton" onClick={this.openDeleteModalHandler}>DELETE</Button>
					</div>

					<div>
						{ this.state.isSendShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<Modal
							className="a-modal"
							show={this.state.isSendShowing}
							close={this.closeModalHandler}
							header="Create Admin"
						>
							<div className="c-body-row">
								<div className="c-inputgroup">
									<p className="a-p">Admin first name</p>
									<input
										name="firstName"
										className="input-field"
										placeholder="John"
										onChange={this.handleNameInputChange}
									/>
								</div>
								<div className="c-inputgroup">
									<p className="a-p">Admin last name</p>
									<input
										name="lastName"
										className="input-field"
										placeholder="Doe"
										onChange={this.handleNameInputChange}
									/>
								</div>
								<div className="c-inputgroup">
									<p className="a-p">Admin email</p>
									<input
										name="email"
										className="input-field"
										placeholder="email@domain.com"
										onChange={this.handleEmailInputChange}
									/>
								</div>
								
								<div className="c-buttons">
									<button className="btn-cancel" onClick={this.closeModalHandler}>CANCEL</button>
									<button className="btn-post" onClick={this.handleCreate}>CREATE</button>
								</div>
							</div>
						</Modal>
					</div>

					<div>
						{ this.state.isViewShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<Modal
							className="a-modal"
							show={this.state.isViewShowing}
							close={this.closeModalHandler}
							header="Edit Admin"
						>
							<div className="c-body-row">
								<div className="c-inputgroup">
									<p className="a-p">Admin name</p>
									<input className="input-field" value="Peter Okafor" />
								</div>
								<div className="c-inputgroup">
									<p className="a-p">Admin email</p>
									<input className="input-field" value="peter@jaizbankplc.com" />
								</div>
								
								<div className="c-buttons">
									<button className="btn-cancel" onClick={this.closeModalHandler}>CANCEL</button>
									<button className="btn-post" onClick={this.closeModalHandler}>SAVE CHANGES</button>
								</div>
							</div>
						</Modal>
					</div>
					
					<div>
						{ this.state.isDeleteShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<Modal
							className="a-modal"
							show={this.state.isDeleteShowing}
							close={this.closeModalHandler}
							header="Delete Admin"
						>
							<div className="delete-body-row">
								<p className="proceed-text">Proceed to delete <strong>Jonathan Dumebi</strong> from your list of admins</p>
								
								<div className="buttons">
									<button className="btn-cancel" onClick={this.closeModalHandler}>CANCEL</button>
									<button className="btn-post" onClick={this.closeModalHandler}>DELETE</button>
								</div>
							</div>
						</Modal>
					</div>

					<div>
						{ this.state.isBlockShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<Modal
							className="a-modal"
							show={this.state.isBlockShowing}
							close={this.closeModalHandler}
							header="Block Admin"
						>
							<div className="delete-body-row">
								<p className="proceed-text">Proceed to block <strong>Jonathan Dumebi</strong> from your list of admins</p>
								
								<div className="buttons">
									<button className="btn-cancel" onClick={this.closeModalHandler}>CANCEL</button>
									<button className="btn-post" onClick={this.closeModalHandler}>BLOCK</button>
								</div>
							</div>
						</Modal>
					</div>
					
					<div>
						{ this.state.isSuccessful ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<ModalSub
							className="modal"
							show={this.state.isSuccessful}
							close={this.closeSuccessfulModalHandler}
						>
							<div className="info">
								<img src="/images/checkmark.png" className="check-img" />
								<p className="p-text">Admin created successfully</p>
								<br></br>
								<p className="p-sub-text">An invitation link has been sent to <br></br>
									Peter Okafor's email to enable him access his account.</p>
							</div>
						</ModalSub>
					</div>

					<Cards
						className="a-cards"
						cardinfo={this.state.adminData}
						block={this.openViewModalHandler}
					>
					</Cards>

				</div>
			</Layout>
		);
    }
};

AdvertsPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}

export default AdvertsPage