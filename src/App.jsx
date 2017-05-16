import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import Detail from './Detail'
import './App.css'
import axios from 'axios'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			shows: {}
		}
		this.componentDidMount = this.componentDidMount.bind(this)
	}

	componentDidMount(){
		axios.get('http://www.omdbapi.com/?i=tt0944947&Season=1')
		 .then(function(response){
		 		debugger;
		 		this.setState( state => { shows: response.data } )
		 })
		 .catch(function(error){

		 		alert("OOOOPPPPSSSS, eeeh who care!")
		 })
	}

  render () {
    return (
      <div className='app'>
        <Route exact path="/" component={Landing}/>
        <Route path="/search" component={(props) => {
        	return <Search shows={this.state.shows} {...props}/>
        }}/>
        <Route path="/details/:id" component={(props) => {
        	const show = this.state.shows.filter((show) => show.imdbID === props.match.params.id)
        	return <Detail show={show[0]} {...props}/>
        }} />
      </div>
    )
  }
}

export default App
