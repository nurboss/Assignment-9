import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ServiceCart from '../ServiceCart/ServiceCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css'

const Service = () => {
    const [data, setdata] = useState([]);
    useEffect( () => {
        fetch('./Data.json')
        .then(res => res.json())
        .then(data => setdata(data))
    },[])
    return (
        
            <div className="container my-5">
               <Row xs={1} md={3} lg={3} className="g-4">
               {
                data.map(bata => <ServiceCart 
                    key = {bata.key}
                    course={bata}></ServiceCart>)
                }
                </Row>
                
            </div>
    );
};

export default Service;