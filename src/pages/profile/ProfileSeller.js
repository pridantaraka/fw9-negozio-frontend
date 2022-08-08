import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import HeaderProfile from '../../components/HeaderProfile'
import SidebarSeller from '../../components/SidebarSeller'
import profSide from "../../assets/images/prof-pict.png"

function ProfileSeller() {
    return(
        <>
            <Container className='mw-100 main-container'>
                <Row>
                    <HeaderProfile />
                    <SidebarSeller />
                    <Col className="p-5 m-3">
                        <div className="d-flex flex-column profile-container p-5">
                            <div className="d-flex flex-column gap-2">
                                <span className="fw-bold fs-2">My profile store</span>
                                <span className="text-muted">Manage your profile information</span>
                                <hr/>
                            </div>
                            
                           <div className='d-flex flex-row gap-5 my-3'>
                           <div className='d-flex flex-column gap-5'>
                                <div className="d-flex flex-row gap-5 justify-content-between">
                                    <span className="text-muted ms-3">Store name</span>
                                    <Form>
                                    <Form.Group  className ="name-form" controlId="formatBasicName">
                                        <Form.Control name="name" type="name" placeholder="Enter your name" />
                                        <Form.Control.Feedback className="text-start" type="invalid">Name must be at least 8 characters</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form>
                                </div>

                                <div className="d-flex flex-row gap-5 justify-content-between">
                                    <span className="text-muted ms-3">Email</span>
                                    <Form>
                                    <Form.Group  className ="email-form" controlId="formatBasicEmail">
                                        <Form.Control name="email" type="email" placeholder="Enter your email" />
                                        <Form.Control.Feedback className="text-start" type="invalid">Invalid email format</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form>
                                </div>

                                <div className="d-flex flex-row gap-5 justify-content-between">
                                    <span className="text-muted ms-3">Phone Number</span>
                                    <Form>
                                    <Form.Group  className ="phone-form" controlId="formatBasicEmail">
                                        <Form.Control name="phonenumber" type="number" placeholder="Enter your phone number" />
                                        <Form.Control.Feedback className="text-start" type="invalid">Invalid phone number format</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form>
                                </div>   
                                
                                <div className="d-flex flex-row gap-5 justify-content-between">
                                    <span className="text-muted ms-3">Store description</span>
                                    <Form>
                                    <Form.Group controlId="formatBasicDescription">
                                        <Form.Control as="textarea" rows={5} className ="desc-form text-start" name="textarea" type="textarea" placeholder="" />
                                        <Form.Control.Feedback className="text-start" type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
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
        </>
    )
}
export default ProfileSeller