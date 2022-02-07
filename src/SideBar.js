import React from 'react'
import './SideBar.css'
class SideBar extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="sideBar">
            <div className={this.props.visible ? 'wrapperNav visible': 'wrapperNav hidden'}>
            </div>
            </div>
        )
    }

}
export default SideBar