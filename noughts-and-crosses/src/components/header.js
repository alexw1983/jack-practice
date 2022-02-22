import React from 'react';

function Header(props) {
    return (
        <div className="center-screen">
            <h1>Noughts and Crosses</h1>
            <h2>Current Turn = {props.currentTurn}</h2>
            <hr />
        </div>
    );
}

export default Header;
