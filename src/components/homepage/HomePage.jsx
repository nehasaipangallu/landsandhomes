import React,{useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouseLock,
    faHouse,
    faHouseUser,
    faHandshake,
    faBuilding
     } from "@fortawesome/free-solid-svg-icons";
import Cards from '../cards/Cards';

export default function Homepage(){
    
    const [showCard, setShowCard] = useState(false);
    

    return(
        <div>
            <img src="./assets/images/banner.png" className='img-fluid hero-img'></img>
            <Row>
                <Col>
            <div class="top-left"><Button onClick={()=>setShowCard(!showCard)} className='btn-1'><FontAwesomeIcon icon={faHouseLock} style={{color: "#ffffff",}} /> Buy</Button></div>
            </Col>
            <Col>
            <div class="top-left-1"><Button onClick={()=>setShowCard(!showCard)}className='btn-1'><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /> Rent</Button></div> 
            </Col>
            <Col>
            <div class="top-left-2"><Button onClick={()=>setShowCard(!showCard)} className='btn-1'><FontAwesomeIcon icon={faHouseUser} style={{color: "#ffffff",}} /> PG/Co-Living</Button></div> 
            </Col>
            <Col>
            <div class="top-left-3"><Button onClick={()=>setShowCard(!showCard)} className='btn-1'> <FontAwesomeIcon icon={faHandshake} style={{color: "#ffffff",}} /> Coworking</Button></div> 
            </Col>
            <Col>
            <div class="top-left-4"><Button onClick={()=>setShowCard(!showCard)} className='btn-1'> <FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /> Plots/Lands </Button></div> 
            </Col>
            <Col>
            <div class="top-left-5"><Button onClick={()=>setShowCard(!showCard)} className='btn-1'> <FontAwesomeIcon icon={faBuilding} style={{color: "#ffffff",}} /> Projects</Button></div> 
            </Col>
            
                </Row>
                <div  style={{alignSelf:"center",
                position:"absolute",
                top:"225px",
                left: "305px"}}>{showCard && <Cards />}
                </div>
        </div>

    )
}