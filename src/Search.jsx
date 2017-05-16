import React, { Component } from 'react'
import ShowCard from './ShowCard'
import { string, arrayOf, shape } from 'prop-types'
import Header from './Header'

class Search extends Component{
	constructor(props){
		super(props)
		this.state = {
			searchTerm: ''
		}

		this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
	}

	handleSearchTermChange() {
		this.setState( state => {
			return { searchTerm: event.target.value }
		})
	}

	render(){
		return(
			<div className="search">
				<Header handleSearchTermChange={this.handleSearchTermChange}
								showSearch={true}
								searchTerm={this.state.searchTerm}/>
				<div>
					{
						this.props.shows
							.filter((show) => {
								return(
									`${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
								)	
							}).map((show) => {
							return (
								<ShowCard show={show} key={show.imdbID} {...show} />
							)
						})
					}
				</div>
			</div>
		)
	}
}

Search.propTypes = {
	shows: arrayOf(shape({
		title: string,
		description: string
	}))
}

export default Search