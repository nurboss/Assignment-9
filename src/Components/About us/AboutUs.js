import React from 'react';
import img from '../../about us.png'
import './Aboutus.css'

const AboutUs = () => {
    return (
        <div className="flex container">
            
            <div className="text">
                <h1>About US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque vero eius tenetur esse quas molestiae fugit repudiandae similique doloribus dignissimos hic in, minima architecto dolorum, voluptate aperiam, quidem exercitationem? Debitis, hic aperiam eveniet saepe nemo eligendi! Unde placeat dolorum excepturi minima, aut est fuga, harum, tempore saepe odit fugit? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi, modi voluptatum pariatur iste laborum cumque, labore consequuntur deleniti tempore error officiis quo accusamus. Itaque temporibus consequuntur consectetur non quasi!</p>
            </div>
            <div className="image">
                <img style={{width: '600px'}} src={img} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;