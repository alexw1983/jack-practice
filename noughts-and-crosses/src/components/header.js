import React from 'react';

function Header(props) {
    return (
        <div className="center-screen" >
            <h1>Noughts and Crosses</h1>
            <h3> CurrentTurn = {props.currentTurn}</h3>
            <hr />
        </div>
    );
}

export default Header;
