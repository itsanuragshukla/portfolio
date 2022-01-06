import React from 'react'
import './SideBar.css'
class SideBar extends React.Component {
	constructor(props) {
		super()
		this.styles1 = {
			height: "0",
		}
		this.styles2 = {
			height: "30vh",
		}
	}
	render() {
		if (this.props.visible) {
			return (
				<div className='sideBar' style={this.styles2}>
					I'm the sideBar
				</div>
			)
		}
		return (
			<div className='sideBar' style={this.styles1}>
					I'm the sideBar
			</div>
			)

		}
	}

	export default SideBar