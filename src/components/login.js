import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from "gatsby"
import { withStyles } from '@material-ui/core/styles'
import { Link } from "gatsby"
import "./login.css"
import { handleLogin, isLoggedIn } from "../services/auth"
import Button from '@material-ui/core/Button'

class Login extends React.Component {

	state = {
		email: ``,
		password: ``,
	}

	handleUpdate = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		handleLogin(this.state)
	}

	render() {
		if (isLoggedIn()) {
			navigate(`/notifications`)
		}

		return (
			<>
				<div className="container">
					<img className="back-img" src="/images/sign-in-back-img.png"/>
					<div className="rightside">
						<img className="logo" src="/images/jaiz-logo.png"/>
						<form
							className="form"
							method="post"
							onSubmit={event => {
								this.handleSubmit(event)
								navigate(`/notifications`)
							}}
						>
							<p className="sign-in-text">Sign in to your account</p>
							<p className="label">Email</p>
							<input
								className="inputfield"
								type="email"
								name="email"
								placeholder="email@jaizbankplc"
								onChange={this.handleUpdate}
							/>

							<p className="label">Password</p>
							<input
								className="inputfield"
								type="password"
								name="password"
								placeholder="Enter password here"
								onChange={this.handleUpdate}
							/>

							<Button className="button" type="submit">SIGN IN</Button>
						</form>
					</div>
				</div>
			</>
		)
	}
}

export default Login