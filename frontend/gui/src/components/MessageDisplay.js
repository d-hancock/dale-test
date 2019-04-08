import React from 'react';

const MessageDisplay = (props) => {
    return (

        <div>
            <h3 style={{marginBottom: 16}}>{props.message}</h3>

        </div>
    );
}

export default MessageDisplay;