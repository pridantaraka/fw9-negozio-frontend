import React, { useEffect } from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Gender from '../../components/Gender'
import HeaderProfile from '../../components/HeaderProfile'
import Sidebars from '../../components/Sidebars'
import profSide from "../../assets/images/prof-pict.png"
import { getUsers } from '../../redux/asyncAction/users'
import { useDispatch, useSelector } from 'react-redux'
import ProfileSeller from './ProfileSeller'
import {Formik} from "formik"
import * as Yup from "yup"

const profileEditSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address format').required('Required'),
    phonenumber: Yup.number().min(10).max(14).required('A phone number is required')
  })

const EditProfileValid = ({errors, handleSubmit, handleChange, val}) => {

    return (
        <>
            <div className='d-flex flex-row gap-5 my-3 justify-content-around'>
                            <div className='d-flex flex-column gap-5'>
                                <div className="d-flex flex-row gap-5 mx-5">
                                    <span className="text-muted mx-3">Name</span>
                                    <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Group  className ="name-form" controlId="formatBasicName">
                                        <Form.Control name="name" type="name" onChange={handleChange} placeholder="Enter your name" isInvalid={!!errors.name}/>
                                        <Form.Control.Feedback className="text-start" type="invalid">Name must be at least 8 characters</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form>
                                </div>

                                <div className="d-flex flex-row gap-5 mx-5">
                                    <span className="text-muted mx-3">Email</span>
                                    <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Group  className ="email-form" controlId="formatBasicEmail">
                                        <Form.Control name="email" type="email" onChange={handleChange} placeholder="Enter your email" isInvalid={!!errors.email}/>
                                        <Form.Control.Feedback className="text-start" type="invalid">Invalid email format</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form>
                                </div>

                                <div className="d-flex flex-row gap-5">
                                    <span className="text-muted mx-1">Phone Number</span>
                                    <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Group  className ="phone-form" controlId="formatBasicEmail">
                                        <Form.Control name="phonenumber" type="text" onChange={handleChange} placeholder="Enter your phone number" isInvalid={!!errors.phonenumber}/>
                                        <Form.Control.Feedback className="text-start" type="invalid">Invalid phone number format</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form>
                                </div>

function Profile(){
    

    const profile = useSelector((state) =>state.users.result)
    const token = useSelector((state)=>state.auth.token)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getUsers(token))
    },[dispatch, token])
    console.log(profile);
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
                        <Formik                                
                            initialValues={{name: '', email: '', phonenumber: ''}} 
                            validationSchema={profileEditSchema}>
                            {(props) =><EditProfileValid {...props} />}
                        </Formik>
                        </div>     
                        <div>
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
         : <ProfileSeller />}
        </>
    )
}
export default Profile 