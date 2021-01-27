import React, { PureComponent } from 'react';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../contextApi/auth-context';

class App extends PureComponent {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}
	state = {
		persons: [
			{id: 1, name: 'Rafikul', age: 26, textLength: 0},
			{id: 2, name: 'Najmul', age: 23, textLength: 0},
			{id: 3, name: 'Raju', age: 16, textLength: 0}
		],
		showDetails: false,
		cockpitShow: true,
		authenticated: false
	}
	
	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}
	
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[App.js] shouldComponentUpdate');
	// 	if (nextProps.persons !== this.props.persons || 
	// 		nextProps.cockpitShow !== this.props.cockpitShow
	// 	) {
    //         return false;
    //     } else {
    //         return true;
    //     }
	// }
	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}
	conditionalToggle = () => {
		const doesShow = this.state.showDetails;
		this.setState({
			showDetails: !doesShow
		});
	} 
	deletePersonHandler = (personeIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personeIndex, 1);
		this.setState({persons: persons});
	}

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(person => {
			return person.id === id;
		});
		const singlePerson = {
			...this.state.persons[personIndex]
		};
		singlePerson.name = event.target.value;
		singlePerson.textLength = event.target.value.length;
		const persons = [...this.state.persons];
		persons[personIndex] = singlePerson;
		this.setState({ persons: persons });
	}
	cockpitHandler = () => {
		const cockpitDidShow = this.state.cockpitShow;
		this.setState({
			cockpitShow: !cockpitDidShow
		});
	}
	loginHandler = () => {
		this.setState({authenticated: true});
	}

	render() {
		console.log('[App.js] render..');
		let allPersons = null;
		if(this.state.showDetails){
			allPersons = <Persons persons={this.state.persons} 
				clicked={this.deletePersonHandler}
				changed={this.nameChangeHandler} />;
		}

		return(
			<AuthContext.Provider value={{
				authenticated: this.state.authenticated,
				login: this.loginHandler
			}}>
				<WithClass classes="App">
					<button onClick={this.cockpitHandler}>Remove Cockpit</button><br/>
					<button onClick={this.loginHandler}>Login</button>
					{this.state.cockpitShow ? <Cockpit changed={this.conditionalToggle}/> : null}
					{allPersons}
				</WithClass>
			</AuthContext.Provider>
		)
	};
}

export default App;
