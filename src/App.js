import React from 'react'
import './App.css';
import Page2 from './Page2'
import Intro from './Intro'
import NavBar from './NavBar'
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
   <NavBar />
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