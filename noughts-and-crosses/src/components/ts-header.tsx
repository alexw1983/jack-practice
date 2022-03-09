import * as React from 'react';

interface Props {
    currentTurn: string;
}

const TSHeader: React.FC<Props> = (props: Props) => {
    return (
        <div className="center-screen" >
            <h1>Noughts and Crosses</h1>
            <h3> The Current Turn is {props.currentTurn}</h3>
            <hr />
        </div>
    );
}

export default TSHeader;
