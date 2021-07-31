import React from 'react';
import Images from 'constants/Images'

function NotFound(props) {
    return (
        <div className="not-found">
            <img src={Images.NotFound}></img>
        </div>
    );
}

export default NotFound;