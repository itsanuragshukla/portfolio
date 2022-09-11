import React, {
} from 'react'
import Ham from './HamBurger'
import Grid from './Grid'
import GridElem from './GridElem'
import './NavBar.css'
import a from './img/a.svg'

class NavBar extends React.Component {
    constructor(props) {
        super()
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll () {
        const prevScroll = this.state.prevScrollpos;
        const currPos = window.pageYOffset;
        const visibl = prevScroll > currPos;
        this.setState({
            prevScrollpos: currPos,
            visible: visibl
        })
    }

    render() {
        const style = {
            background:this.state.prevScrollpos==0 ? "var(--blue)" : "var(--light-blue)",
        }
        return(
            <div id="nav" style={style} className={this.state.visible ? "navBar": "navBar navbar-hidden"}>
        <Ham visible={this.state.visible} />	<Grid>
			<GridElem text="nurag" img={a}/>
			</Grid>
     
	       </div>
        )
    }
}

export default NavBar
