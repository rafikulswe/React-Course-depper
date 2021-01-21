import React from 'react';
import '../../assets/sass/main.scss';

const Cockpit = (props) => {
    return (
        <div>
            <h1>This is React App</h1>
            <div className="divider"><hr></hr></div>
            <button onClick={props.changed}>Toggole Button</button>
            <div className="divider"><hr></hr></div>
        </div>
    );
};

export default Cockpit;