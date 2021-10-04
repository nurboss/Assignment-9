import React from 'react';
import img from '../../src/page-not-found.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
            <img src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;