import React from 'react';
import '../styles/Database.scss'

const DatabaseTable = props => {
    return (
        <div id="table" style={{marginTop: `${props.margin}px`}}>
            <h1>{props.margin}</h1>
        </div>
    );
}

export default DatabaseTable;