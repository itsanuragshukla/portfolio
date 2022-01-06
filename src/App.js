import React from 'react'
import logo from './img/logo.png';
import './App.css';
import Ham from './HamBurger'
import Page2 from './Page2'
import Intro from './Intro'

class App extends React.Component {

	constructor(props) {
		super()
		this.state = {
			visible: true,
		}
	}


	render() {
		return (
			<div>
     <div className="navBar">
        <Ham />
			</div>
    <div className="App">
    <header className="App-header">
    		<Intro />
				</header>
			<Page2 />
			</div>
			</div>
		);
	}
}
export default App;