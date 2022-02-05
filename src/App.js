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
		this.scrollToSection = this.scrollToSection.bind(this);
	}

	scrollToSection(e) {
		window.scrollTo(0, document.getElementById(e.target.getAttribute("data-scrollto")).offsetTop)
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="App">
    				<header className="App-header">
    					<Intro scrollToSection={this.scrollToSection} />
			</header>
					<AboutMe scrollToSection={this.scrollToSection} />
					<MySkills scrollToSection={this.scrollToSection} />
					<Projects scrollToSection={this.scrollToSection}/>
					<ContactMe scrollToSection={this.scrollToSection} />
				    <Footer/>
			</div>
			</div>
		);
	}
}
export default App;