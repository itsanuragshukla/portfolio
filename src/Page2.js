import React from 'react'
import './Page2.css'
import PageHeading from './PageHeading'
class Page2 extends React.Component {
	constructor(props) {
		super()
		this.state = {}
	}
	render() {
		return (
			<div id='page2' className="Page2Main">
			<div className="HeadingPage2">
			<PageHeading text="About Me" />
			</div>
			</div>
		)
	}
}
export default Page2