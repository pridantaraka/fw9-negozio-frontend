import React, { useState } from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Gender from '../../components/Gender'
import HeaderProfile from '../../components/HeaderProfile'
import Sidebars from '../../components/Sidebars'
import profSide from "../../assets/images/prof-pict.png"
import { getUsers, updateUsers } from '../../redux/asyncAction/users'
import { useDispatch, useSelector } from 'react-redux'
import ProfileSeller from './ProfileSeller'
import * as Yup from "yup"
import {Formik} from "formik"
import { useNavigate } from 'react-router-dom'

const profileEditSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string('Invalid email address format'),
    phonenumber: Yup.number().min(10).max(14)
  })

  const EditProfileValid = ({errors, handleSubmit, handleChange}) => {
    const users = useSelector((state)=>state.users.result);
    // const [dataFullName, setDataFullName] = React.useState(users.full_name);
    // const [dataEmail, setDataEmail] = React.useState(users.email);
    // const [dataPhoneNumber, setDataPhoneNumber] = React.useState(users.phone_number);
    // const [dataGender, setDataGender] = React.useState(users.gender);
    // const [dataBirth, setDataBirth] = React.useState(users.date_of_birth);

    const [checked, setChecked] = useState({ laki: true, perempuan: false });

    const changeRadio = (e) => {
        setChecked(() => {
        return {
            laki: false,
            perempuan: false,
            [e.target.value]: true
        };
        });
    };
    return (
        <>
            <div className='d-flex flex-row gap-5 my-3 justify-content-around w-100'>
                            <div className='d-flex flex-column gap-5'>
                                <div className="d-flex flex-row gap-5 mx-5">
                                    {/* <span className="text-muted mx-3"></span> */}
                                    <Form noValidate onSubmit={handleSubmit} onChange={handleChange}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Group  className ="name-form" controlId="formatBasicName">
                                        <Form.Control 
                                        name="name" 
                                        type="name"
                                        
                                        placeholder="Enter your name"
                                        isInvalid={!!errors.name}/>
                                        <Form.Control.Feedback className="text-start" type="invalid">Name must be at least 8 characters</Form.Control.Feedback>
                                        </Form.Group>
                            
                                    <Form.Label>Email</Form.Label>
                                    <Form.Group  className ="email-form" controlId="formatBasicEmail">
                                        <Form.Control 
                                        name="email" 
                                        type="email"
                                        
                                        placeholder="Enter your email" 
                                        isInvalid={!!errors.email}/>
                                        <Form.Control.Feedback className="text-start" type="invalid">Invalid email format</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Label>Phone Number</Form.Label>
                                    <Form.Group  className ="phone-form" controlId="formatBasicEmail">
                                        <Form.Control 
                                        name="phonenumber" 
                                        type="text"
                                        
                                        placeholder="Enter your phone number" 
                                        isInvalid={!!errors.phonenumber}/>
                                        <Form.Control.Feedback className="text-start" type="invalid">Invalid phone number format</Form.Control.Feedback>
                                        </Form.Group>
                                        <div className="d-flex flex-row gap-5">
                                            <span className="text-muted">Gender</span>
                                            <label className="d-flex flex-row gap-2">
                                            <input
                                                type="radio"
                                                checked={checked.laki}
                                                value="laki"
                                                name="gender"
                                                onChange={changeRadio}
                                            />
                                            Laki-laki
                                            </label>

                                            <label className="d-flex flex-row gap-2">
                                            <input
                                                type="radio"
                                                checked={checked.perempuan}
                                                value="perempuan"
                                                name="gender"
                                                onChange={changeRadio}
                                            />
                                            Perempuan
                                            </label>
                                        </div>
                                        
                                            <div className="d-flex flex-row gap-4">
                                            <span className="text-muted">Date of Birth</span>
                                                <Form.Group  className ="date-form" controlId="formatBasicEmail">
                                                <Form.Control 
                                                    name="date" 
                                                    type="date"
                                                    value='date'
                                                    placeholder="dd" />
                                                </Form.Group>
                                            </div>
                                            <Button variant="danger" className='button-save text-center' type='submit'>Save</Button>
                                        </Form>
                                </div>
                            </div>
                            <div className="d-flex vertical-rule">
                                <div className="vr"></div>
                            </div>
                            <div className='d-flex flex-column gap-3'>
                                <img src={profSide} alt="profile-pict" className='profile-pict'/>
                                <Button variant="outline-secondary" className='button-image'>Select Image</Button>
                            </div>
            </div> 
        </>
    )
}

function Profile(){
    // const redirect = useNavigate();
    const profile = useSelector((state) =>state.users.result)
    const token = useSelector((state)=>state.auth.token)
    const dispatch = useDispatch()

    // const onSubmitEditUser = (val) => {
    //     console.log(val);
    //     const data = {token: token, 
    //     name: val.name, 
    //     email: val.email, 
    //     phonenumber: val.phonenumber,
    //     gender:true,
    //     picture: val.picture,
    //     dataBirth:'2000-06-01'
    //     };
    //     dispatch(updateUsers(data));
        // redirect('/home/profile/details');
    //   };

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
                            // onSubmit={onSubmitEditUser}                                
                            initialValues={{name: '', email: '', phonenumber: ''}} 
                            validationSchema={profileEditSchema}>
                            {(props) =><EditProfileValid {...props} />}
                        </Formik>
                    </div>
                </Col>
            </Row>
        </Container>    
         : <ProfileSeller />}
            
        </>
    )
}
export default Profile 