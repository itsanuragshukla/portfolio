import React from 'react'
import './App.css';
import AboutMe from './AboutMe'
import Intro from './Intro'
import NavBar from './NavBar'
import ContactMe from './ContactMe'
class App extends React.Component {

	constructor(props) {
		super()
		this.state = {
			visible: true,
		}
	}


	render() {
		return (
			<div>
   <NavBar />
    <div className="App">
    <header className="App-header">
    		<Intro />
			</header>
			<AboutMe />
			<ContactMe/>
			</div>
			</div>
		);
	}
}
export default App;