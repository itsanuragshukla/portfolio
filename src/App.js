import React from 'react'
import './App.css';
import AboutMe from './AboutMe'
import Intro from './Intro'
import NavBar from './NavBar'
import ContactMe from './ContactMe'
import MySkills from './MySkills'
import Projects from './Projects'
import Footer from './Footer'
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
				
				<div id="Root" className="App">
    				<header className="App-header">
    					<Intro />
			</header>
					<AboutMe />
					<MySkills />
					<Projects />
					<ContactMe />
				    <Footer/>
			</div>
			</div>
		);
	}
}
export default App;
