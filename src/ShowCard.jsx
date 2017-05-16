import React, { Component } from 'react'
import { string, shape } from 'prop-types'
import { Link } from 'react-router-dom'

class ShowCard extends Component {
	render () {
		const { imdbID, poster, title, year, description } = this.props.show

		return (
			<Link to={`/details/${imdbID}`}>
				<div className="show-card">
					<img src={`/img/posters/${poster}`}
							 alt={`${this.title}`} />
	        <div>
	          <h3>{title}</h3>
	          <h4>({year})</h4>
	          <p>{description}</p>
	        </div>
				</div>
			</Link>
		)
	}
}

ShowCard.propTypes = {
	show: shape({
		title: string,
		year: string,
		description: string,
		poster: string,
		imdbID: string
	})
}

export default ShowCard