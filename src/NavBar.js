import React, {
	Component
} from 'react'
import './NavBar.css'
import Ham from './HamBurger'

class NavBar extends React.Component {
	constructor(props) {
		super()
		this.state = {
			prevScrollpos: window.pageYOffset,
			visible: true,
		}
		this.handleScroll = this.handleScroll.bind(this);
	}

	// Adds an event listener when the component is mount.
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	// Hide or show the menu.
	handleScroll () {
		const prevScroll = this.state.prevScrollpos;
		//	console.log(this.state);
		const currPos = window.pageYOffset;
		const visibl = prevScroll > currPos;

		this.setState({
			prevScrollpos: currPos,
			visible: visibl
		})
		if (this.state.visible) {
			document.getElementById('nav').classList.remove("navbar-hidden");
		} else {
			document.getElementById("nav").classList.add('navbar-hidden');
		}
	}


	render() {

		return(
			<div id="nav" className="navBar">
        <Ham />
			</div>
		)

	}

}

export default NavBar