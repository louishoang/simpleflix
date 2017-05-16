import React, { Component } from 'react'
import { shape, string } from 'prop-types' 
import Header from './Header'

class Detail extends Component {
	render(){
		const { title, description, year, trailer } = this.props.show

		return(
			<div className='details'>
       	<Header/>
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} 
          				frameBorder='0'
          				allowFullScreen />
        </div>
      </div>
		)
	} 
}

Detail.propTypes = {
	show: shape({
		title: string,
		description: string,
		year: string,
		trailer: string
	})
}

export default Detail