import React from 'react'
import './SideBar.css'
class SideBar extends React.Component {
	constructor(props) {
		super()
	}
	
	render() {
			return (
				<div className= {this.props.visible ? 'sideBar visible' :'sideBar hidden'}>
					I'm the sideBar
				</div>
			)
	}
	
}
	export default SideBar