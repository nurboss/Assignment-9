import React, { useEffect, useState } from 'react';
import './Home.css'
import img from '../../home.png'
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import HomeCart from '../HomeCart/HomeCart';
import { Row } from 'react-bootstrap';


const Home = () => {
    const [data, setdata] = useState([]);
    const history = useHistory();
    useEffect( () => {
        fetch('./Data.json')
        .then(res => res.json())
        .then(data => setdata(data.slice(0, 3)))
    },[])

    const handleService = () => {
        history.push('/service')
    }
    return (
        <div>
            <div className="flex">
            <div className="me-5 mt-5">
                <h1>Learn programming in a <br /> new way.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Veniam atque optio, recusandae voluptate <br /> quasi magnam a iste odio autem. Porro <br /> doloremque ipsa quibusdam cupiditate libero accusamus <br /> ullam quae earum molestiae!</p>
                <button onClick={handleService} className="button">Learn Now</button>
            </div>
            <div className="ms-5 mt-5">
                <img src={img} alt="" />
            </div>
        </div>

            <div className="container">
            <Row xs={1} md={3} lg={3} className="g-4">
            {
            data.map(dat => <HomeCart 
                key = {dat.key}
                course={dat}></HomeCart>)
            }
            </Row>
            <button onClick={handleService} className="button text-center">Explor More Course</button>
            </div>

            

        </div>
    );
};

export default Home;