import React from 'react'
import './NavBar.css'
import Ham from './HamBurger'

class NavBar extends React.Component {
	comstructor(props) {
		this.state = {
			prevScrollpos: window.pageYOffset,
			visible: true
		}
		this.handleScroll = this.handleScroll.bind(this)
	}

	// Adds an event listener when the component is mount.
	componentDidMount() {
	//	window.addEventListener("scroll", this.handleScroll);
	}

	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
//		window.removeEventListener("scroll", this.handleScroll);
	}

	// Hide or show the menu.
	handleScroll() {
		const {
			prevScrollpos
		} = this.state;

		const currentScrollPos = window.pageYOffset;
		const visible = prevScrollpos > currentScrollPos;

		this.setState({
			prevScrollpos: currentScrollPos,
			visible
		})
	}


	render() {

		return(
			<div className="navBar">
        <Ham />
			</div>
		)

	}

}

export default NavBar