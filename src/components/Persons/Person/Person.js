import React, { Component } from 'react'
import Validation from './validation';
import Aux from '../../../hoc/Auxilary';
import AuthContext from '../../../contextApi/auth-context';

class Person extends Component {
    // shouldComponentUpdate = (nextProps, nextState) => {
    //     console.log('[Person.js] shouldcomponentUpdate');
    //     return true;
    // }
    constructor (props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering...');
        let validMsg = null;
        if (this.props.nameLength > 0) {
            validMsg = <Validation strLegnth={this.props.nameLength} />
        }
        return ( 
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>}
                </AuthContext.Consumer>
                <h6 onClick={this.props.click}>Name: {this.props.name}</h6>
                {validMsg}
                <input 
                type="text" 
                value={this.props.name} 
                onChange={this.props.change} 
                ref={this.inputElementRef}
                />
                <p>Age: {this.props.age}</p>
            </Aux>
        );
    }
}
 
export default Person;