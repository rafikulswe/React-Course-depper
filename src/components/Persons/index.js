import React, { PureComponent } from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
	// 	return state;
    // }
    // shouldComponentUpdate = (nextProps, nextState) => {
    //     console.log('[Persons.js] shouldcomponentUpdate');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    getSnapshortBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshortBeforeUpdate');
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapShort) {
        console.log('[Persons.js] componentDidUpdate');
    }

    render() { 
        console.log('[Persons.js] render');
        return ( 
            this.props.persons.map((person, index)=>{
                return <Person key={person.id} 
                click={() => this.props.clicked(index)}
                change={(event) => this.props.changed(event, person.id)} 
                nameLength={person.textLength}
                name={person.name} 
                age={person.age}
                />
            })
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    change: PropTypes.func,
    nameLength: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
}
 
export default Persons;
