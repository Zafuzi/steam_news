import React from 'react';
import logo from './logo.svg';
import './App.css';

function xhr(add, cb) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			cb(this.responseText);
		}
	};
	xhttp.open("GET", add, true);
	xhttp.send();
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			apps: [],
			
		}
	}
	
	componentDidMount = () => {
		xhr("http://165.22.166.244/", (res) => {
			console.log(res);
			let a = [];
			Object.keys(res).forEach(key => {
				a.push(res[key]);
			})
			this.setState("apps", a);
		});
	}
	render() {
	  return (
		<div className="App">
			{this.state.apps.map((a) => (
				<p>a</p>
			))}
		</div>
	  );
	}
}

export default App;
