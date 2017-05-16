import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { func, bool, string } from 'prop-types'

class Header extends Component {
	render(){
		const { showSearch, handleSearchTermChange, searchTerm } = this.props

		let utilSpace
		if(showSearch){
			utilSpace = <input type='text' 
				 								 placeholder='Search' 
				 								 value={searchTerm}
				 								 onChange={handleSearchTermChange}/>
		}else{
		  utilSpace = <h2 className='header-back'>
        <Link to='/search'>
          Back
        </Link>
      </h2>
		}

		return(
			<header>
				<h1><Link to="/">sVideo</Link></h1>
				{utilSpace}
			</header>
		)
	}
}

Header.propTypes = {
	handleSearchTermChange: func,
	showSearch: bool,
	searchTerm: string
}

export default Header