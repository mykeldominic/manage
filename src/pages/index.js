import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

function DashboardIndex({ data, location }) {
	const { title } = data.site.siteMetadata
	return (
		<div>
			{isLoggedIn() ? (
					navigate(`/notifications`)
			) : (
				navigate(`/app/login`)
			)}
		</div>
	)
}
DashboardIndex.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}
export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
export default DashboardIndex