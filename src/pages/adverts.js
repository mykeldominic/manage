import React from 'react'
import PropTypes from 'prop-types'
import './adverts.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import Layout from 'components/Layout'
import Modal from 'components/Modal/modal'
import ModalSub from 'components/Modal/modalsub'
import Cards from 'components/Card/card'
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

function createData(imgsrc, cardheader, carddate, initials) {
	return { imgsrc, cardheader, carddate, initials };
}

function createInitials(firstName, lastName){
	var a = firstName.split("")[0];
	var b = lastName.split("")[0];
	return a+b;
}

const data = [
	createData('/images/cardimg1.png', 'Jaiz inter school foot...', 'Jun 16 2019', createInitials('Jonathan', 'Dumebi')),
	createData('/images/cardimg2.png', 'Jaiz customer reward to get there...', 'Jul 16 2019', createInitials('Tochi', 'Onuchukwu')),
	createData('/images/cardimg3.png', 'Jaiz ramadan food fest...', 'Aug 16 2019', createInitials('Emeka', 'Azonobi')),
	createData('/images/cardimg4.png', 'Jaiz ramadan food fest...', 'Aug 16 2019', createInitials('Jonathan', 'Dumebi')),
	createData('/images/cardimg4.png', 'Jaiz ramadan food fest...', 'Aug 16 2019', createInitials('Tochi', 'Onuchukwu')),
	createData('/images/cardimg3.png', 'Jaiz ramadan food fest...', 'Aug 16 2019', createInitials('Emeka', 'Azonobi')),
	createData('/images/cardimg2.png', 'Jaiz ramadan food fest...', 'Aug 16 2019', createInitials('Tochi', 'Onuchukwu')),
	createData('/images/cardimg4.png', 'Jaiz ramadan food fest...', 'Aug 16 2019', createInitials('Tochi', 'Onuchukwu')),
	createData('/images/cardimg3.png', 'Jaiz ramadan food fest...', 'Aug 16 2019', createInitials('Emeka', 'Azonobi')),
	createData('/images/cardimg2.png', 'Jaiz ramadan food fest...', 'Aug 16 2019', createInitials('Tochi', 'Onuchukwu')),
];


class AdvertsPage extends React.Component {
    constructor(props) {
      	super(props);
        	this.state = {
				open: false,
				file: '',
				imagePreviewUrl: '',
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
	
	_handleSubmit(e) {
		e.preventDefault();
		// TODO: do something with -> this.state.file
		console.log('handle uploading-', this.state.file);
	}

	_handleImageChange(e) {
		e.preventDefault();
	
		let reader = new FileReader();
		let file = e.target.files[0];
	
		reader.onloadend = () => {
		  	this.setState({
				file: file,
				imagePreviewUrl: reader.result
		  	});
		}

		if (file) {
			reader.readAsDataURL(file)
		} 
		else {
			this.setState({
				imageUrl: ""
			})
		}
	}
	
	render () {

		const pageTitle = location ? location.pathname.replace(/\//g, '') : ''

		/**auth();*/

		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} />);
		} else {
			$imagePreview = (<img src="/images/upload.png" className="upload-img" />);
		}

		if (!data) {
			return (
				<Layout location={location} title={pageTitle}>
					<div className="n-container">
						<p className="n-headtext">ADVERTS (0)</p>
						<p>Send adverts to all customers using this channel</p>
						
						<div className="n-box">
							<img src="/images/safebox.png" className="n-img" />
							
							<p className="n-headtext">EMPTY ADVERT</p>
							<p className="n-center">You haven’t created any advert, click the <br></br>button below to create one now</p>

							<Button className="n-primarybutton" onClick={this.openModalHandler}>CREATE NEW ADVERT</Button>
						</div>
					</div>
				</Layout>
			)
		}

        return (
			<Layout location={location} title={pageTitle}>
				<div className="n-container">
					<p className="n-headtext">ADVERTS ({data.length})</p>
					<p>Send adverts to all customers using this channel</p>
					
					<div className="n-filterrow">
						
						<Button className="n-primarybutton" onClick={this.openSendModalHandler}>SEND A NOTIFICATION</Button>
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
							header="Create new Ad"
						>
							<div className="body-row">
								<div className="leftside">
									<div className="previewComponent">
										<form onSubmit={(e)=>this._handleSubmit(e)}>
										<input className="fileInput"
											type="file"
											onChange={(e)=>this._handleImageChange(e)} />
										{/** <button className="submitButton" 
											type="submit" 
											onClick={(e)=>this._handleSubmit(e)}>Upload Image</button> */}
										</form>
										<div className="imgPreview">
											{$imagePreview}
										</div>
									</div>
									<p className="tip">File must not exceed 5mb</p>
								</div>
								<div className="rightside">
									<div className="flex-row">
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
										<div className="side">
											<p className="type">Type</p>
											<Tooltip title="Sends Notification within the app">
												<button className="a-link-btn">In app</button>
											</Tooltip>
											<Tooltip title="Sends Notification within the app">
												<button className="a-link-btn">External</button>
											</Tooltip>
										</div>
									</div>
									<div className="inputgroup">
										<p className="a-p">Ad Title</p>
										<input className="input-field" placeholder="Enter a title for your advert" />
									</div>
									<div className="inputgroup">
										<p className="a-p">Ad URL Link</p>
										<input className="input-field" placeholder="Enter the URL to your ad" />
									</div>
									
									<div className="buttons">
										<button className="btn-cancel" onClick={this.closeModalHandler}>CANCEL</button>
										<button className="btn-post" onClick={this.closeModalHandler}>POST AD</button>
									</div>
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
							header="View Ad"
						>
							<div className="body-row">
								<div className="leftside">
									<img src="/images/cardimg1.png" className="viewImgPreview" />
								</div>
								<div className="rightside">
									<p className="a-view-text">27th May, 2019</p>
									<div className="inputgroup">
										<p className="a-view-label">Notification Type</p>
										<p className="a-view-text">External</p>
									</div>
									<div className="inputgroup">
										<p className="a-view-label">Ad Title</p>
										<p className="a-view-text">Smart goals & Jaiz smart savings</p>
									</div>
									<div className="inputgroup">
										<p className="a-view-label">Ad URL</p>
										<p className="a-view-text">https://www.jaizbankplc.com/smartsavings</p>
									</div>
									<div className="a-view-initials-div">
										<div className="a-view-initials">JD</div>
										<p className="a-view-name">Jonathan Dumebi</p>
									</div>
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
							header="Delete Ad"
						>
							<div className="delete-body-row">
								<p className="proceed-text">Proceed to delete <strong>Jaix Ramadan Food Fest</strong> from adverts</p>
								
								<div className="buttons">
									<button className="btn-cancel" onClick={this.closeModalHandler}>CANCEL</button>
									<button className="btn-post" onClick={this.closeModalHandler}>DELETE</button>
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
								<p className="p-text">Advert post successful</p>
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