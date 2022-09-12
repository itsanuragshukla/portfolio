import React from 'react'
import './SideBar.css'
import Grid from './Grid'
import GridElem from './GridElem'
import {scrollToSection} from './utils'
class SideBar extends React.Component {
    constructor(props) {
        super()
		this.state={
			items:[]
		}
	}
	componentDidMount=()=>{
		fetch("https://raw.githubusercontent.com/theanuragshukla/extras/main/portfolio/navItems.json")
		.then(res=>res.json())
		.then(res=>this.setState(prev=>{return prev.items=res}))
	}
  
    render() {
        return (
            <div className="sideBar">
            <div className={this.props.visible ? 'wrapperNav visible': 'wrapperNav hidden'}>
			<Grid>
			{
				this.state.items.map(data=>{
					return (
					<GridElem scrollTo={data.scrollTo} onClick={data.scrollTo && scrollToSection} text={data.text} link={data.link} img={data.img} heading={data.heading} blank={data.blank} />
					)
				})
			}
			</Grid>
            </div>
            </div>
        )
    }

}
export default SideBar
