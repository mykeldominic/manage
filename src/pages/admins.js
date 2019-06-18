import React from 'react'
import PropTypes from 'prop-types'
import './adverts.css'
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
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

function createData(initials, name, email) {
	return { initials, name, email };
}

function createInitials(firstName, lastName){
	var a = firstName.split("")[0];
	var b = lastName.split("")[0];
	return a+b;
}

const data = [
	createData(createInitials('Jonathan', 'Dumebi'), 'Jonathan Dumebi', 'pet@jaizbankplc.com'),
	createData(createInitials('Adekunle', 'Bidemi'), 'Adekunle Bidemi', 'adebi@jaizbankplc.com'),
	createData(createInitials('Oye', 'Adekpotu'), 'Oye Adekpotu', 'oyeade@jaizbankplc.com'),
	createData(createInitials('Ivyonne', 'Okija'), 'Ivyonne Okija', 'ivyoki@jaizbankplc.com'),
	createData(createInitials('Femi', 'Udenna'), 'Femi Udenna', 'femude@jaizbankplc.com'),
	createData(createInitials('Mark', 'Daniel'), 'Mark Daniel', 'marda@jaizbankplc.com'),
	createData(createInitials('Johnson', 'Dumebi'), 'Johnson Dumebi', 'johdu@jaizbankplc.com'),
	createData(createInitials('Emeka', 'Azonobi'), 'Emeka Azonobi', 'emeazo@jaizbankplc.com'),
];


class AdvertsPage extends React.Component {
    constructor(props) {
      	super(props);
        	this.state = {
				open: false,
			};
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
	
	render () {

		const pageTitle = location ? location.pathname.replace(/\//g, '') : ''

		/**auth();*/

		if (!data) {
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
					<p className="n-headtext">ADMINS ({data.length})</p>
					<p>Easily manage all admins within this app</p>
					
					<div className="n-filterrow">
						
						<Button className="n-primarybutton" onClick={this.openSendModalHandler}>CREATE ADMIN</Button>
						<Button className="n-primarybutton" onClick={this.openFeedbackModalHandler}>FEEDBACK</Button>
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
									<p className="a-p">Admin name</p>
									<input className="input-field" placeholder="John Doe" />
								</div>
								<div className="c-inputgroup">
									<p className="a-p">Admin email</p>
									<input className="input-field" placeholder="email@domain.com" />
								</div>
								
								<div className="c-buttons">
									<button className="btn-cancel" onClick={this.closeModalHandler}>CANCEL</button>
									<button className="btn-post" onClick={this.closeModalHandler}>CREATE</button>
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
						{ this.state.isFeedbackShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
						<ModalSub
							className="modal"
							show={this.state.isFeedbackShowing}
							close={this.closeModalHandler}
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
						cardinfo={data}
						open={this.openViewModalHandler}
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