import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MDBCol } from "mdbreact";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from'../slider/Slider';

function WithHeaderStyledExample() {
    const [checked, setChecked] = useState(false);
    const [showSlider, setShowSlider] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Residential', value: '1' },
    { name: 'Commercial', value: '2' },
  ]
  return (
  
    <Card className='tab-1' >
       
      <Card.Body >
        
        <Card.Text>
        <Row>
            <Col>
            <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            className="button-groups"
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-danger' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
            </Col>
            
            <Col>
    <MDBCol className="">
      <div className="mb-4 ">
        <input className="form-control input-mdb search-bar" type="text" placeholder="Search Location" aria-label="Search" />
      </div>
    </MDBCol>
    </Col>
    <Col><Button className='btn-1'>Search</Button></Col>
    </Row>
      <div className='btn-box'>
      <Row className='p-3'>
        <Col>
        <Button variant="" className='btn-2'>Flat/Appartment</Button>
        <Button variant="" className='btn-2'>Builder Floor</Button>
        <Button variant="" className='btn-2'>Independent House</Button>
        <Button variant="" className='btn-2'>Independent Villa</Button>
        <Button variant="" className='btn-2'>Pent House</Button>
        <Button variant="" className='btn-2'>Resedential Land</Button>
        <Button variant="" className='btn-2'>Farm House</Button>
        </Col>
</Row>
<Row className='py-2 text-center'>
        <Col>
        <Button  variant="" className='btn-2'>Serviced Appartment</Button>
       
        <Button variant="" className='btn-2'>iRK Studio Appartment</Button>
        <Button variant="" className='btn-2'>Villament</Button>
        <Button variant="" className='btn-2'>Others</Button>
        </Col>
      
      </Row>
      </div>
      <div className='btn-box p-4'>
        <Row className='py-2 text-center'>
            <Col>
            <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle onClick={()=>setShowSlider(!showSlider)} id="dropdown-custom-1"className='btn-2'>budget</Dropdown.Toggle>
        
      </Dropdown>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1" className='btn-2'>BedRoom</Dropdown.Toggle>
       
      </Dropdown>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1" className='btn-2'>Construction Status</Dropdown.Toggle>
      
      </Dropdown> <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1" className='btn-2'>Posted By</Dropdown.Toggle>
       
      </Dropdown> <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1" className='btn-2'>Area</Dropdown.Toggle>
       
      </Dropdown>
            </Col>
        </Row>
      </div>
        </Card.Text>
        
      </Card.Body>
      <div className='p-4'>{showSlider && <Slider />}</div>
    </Card>
  
  );
}

export default WithHeaderStyledExample;