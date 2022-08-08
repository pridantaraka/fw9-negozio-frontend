import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Gender from '../../components/Gender'
import HeaderProfile from '../../components/HeaderProfile'
import Sidebars from '../../components/Sidebars'
import profSide from "../../assets/images/prof-pict.png"

function Profile(){
    const role = "customer"
    const profile ={role:role}
    return(
        <>
        {profile.role === "customer"?
            <Container className='mw-100 main-container'>

            <Row>
                <HeaderProfile />
                <Sidebars />
                <Col className="p-5 m-3">
                    <div className="d-flex flex-column profile-container p-5">
                        <div className="d-flex flex-column gap-2">
                            <span className="fw-bold fs-2">My Profile</span>
                            <span className="text-muted">Manage your profile information</span>
                            <hr/>
                        </div>
                    <div className='d-flex flex-row gap-5 my-3 justify-content-around'>
                    <div className='d-flex flex-column gap-5'>
                            <div className="d-flex flex-row gap-5 mx-5">
                                <span className="text-muted mx-3">Name</span>
                                <Form>
                                <Form.Group  className ="name-form" controlId="formatBasicName">
                                    <Form.Control name="name" type="name" placeholder="Enter your name" />
                                    <Form.Control.Feedback className="text-start" type="invalid">Name must be at least 8 characters</Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </div>

                            <div className="d-flex flex-row gap-5 mx-5">
                                <span className="text-muted mx-3">Email</span>
                                <Form>
                                <Form.Group  className ="email-form" controlId="formatBasicEmail">
                                    <Form.Control name="email" type="email" placeholder="Enter your email" />
                                    <Form.Control.Feedback className="text-start" type="invalid">Invalid email format</Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </div>

                            <div className="d-flex flex-row gap-5">
                                <span className="text-muted mx-1">Phone Number</span>
                                <Form>
                                <Form.Group  className ="phone-form" controlId="formatBasicEmail">
                                    <Form.Control name="phonenumber" type="number" placeholder="Enter your phone number" />
                                    <Form.Control.Feedback className="text-start" type="invalid">Invalid phone number format</Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </div>

                            <div className="d-flex flex-row gap-5">
                                <span className="text-muted">Gender</span>
                                <Gender />
                            </div>

                            <div className="d-flex flex-row gap-4">
                                <span className="text-muted">Date of Birth</span>
                                <Form>
                                    <Form.Control name="date" type="date" placeholder="dd" />   
                                </Form>
                            </div>
                        
                            <Button variant="danger" className='button-save text-center'>Save</Button>
                        </div>

                        <div className="d-flex vertical-rule">
                            <div className="vr"></div>
                        </div>

                        <div className='d-flex flex-column gap-3'>
                            <img src={profSide} alt="profile-pict" className='profile-pict'/>
                            <Button variant="outline-secondary" className='button-image'>Select Image</Button>
                        </div>
                    </div> 
                </div>
                </Col>
            </Row>
        </Container>    
        :<h1>Ini ProfileSeller</h1>}
            
        </>
    )
}
export default Profile 