import React from 'react'
import './Page2.css'

class HelloText extends React.Component {
	constructor(props) {
		super()
	}
	render() {
		if (this.props.isScrolled) {
			return (
				<div className="page2H">
				
				</div>
			)
		}
		return ""
	}

}

class Page2 extends React.Component {
	constructor() {
		super()
		this.state = {
			scrolled: false,
		}
		this.someFunc = this.someFunc.bind(this)
	}

	someFunc() {
		if (!this.state.scrolled) {
			this.setState({
				scrolled: true,
			})
		}
		console.log(this.state.scrolled)

	}

	render() {
		return (
			<div id='page2' className="Page2Main" onClick={this.someFunc}>
			<HelloText isScrolled={this.state.scrolled} />
			</div>
		)
	}
}
export default Page2