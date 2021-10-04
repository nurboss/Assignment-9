import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceCart.css'

const ServiceCart = (props) => {
    const {name, title, details, price, instructor, img} = props.course
    return (
        <div>
             <Col>
                <Card>
                        <Card.Img src={img} className="img" />
                        <Card.Body>
                        <h4>Name: {name}</h4>  
                        <p>Instructor: {instructor}</p>  
                        <Card.Title>Title: {title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <h4>Price: {price}$</h4>
                        </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceCart;