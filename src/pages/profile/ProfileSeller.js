import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import HeaderProfile from '../../components/HeaderProfile'
import SidebarSeller from '../../components/SidebarSeller'
import profSide from "../../assets/images/prof-pict.png"
import * as Yup from "yup"
import {Formik} from "formik" 
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUsers, updateUsers } from '../../redux/asyncAction/users'

const profileEdit = Yup.object().shape({
  storeName: Yup.string().required('Name must be at least 8 characters'),
  email: Yup.string().email('Invalid email address format').required('Required'),
  phonenumber: Yup.string().min(10).max(14).required('A phone number is required'),
  description: Yup.string().required('Required')
})

const EditProfileValid = ({errors, handleSubmit, handleChange}) => {
    // const users = useSelector((state)=>state.users.result);
    // const [dataFullName, setDataFullName] = React.useState(users.full_name);
    // const [dataEmail, setDataEmail] = React.useState(users.email);
    // const [dataPhoneNumber, setDataPhoneNumber] = React.useState(users.phone_number);
    // const [dataStoreDesc, setDataStoreDesc] = React.useState(users.store_description);
  return (
    <>
         <div className="d-flex flex-row gap-5 justify-content-between">
            <div className="text-muted ms-3 ">Store name</div>
               <Form>
               <Form.Group  className ="name-form" controlId="formatBasicName" onSubmit={handleSubmit}>
                   <Form.Control name="storeName" type="name" placeholder="Enter your store name" onChange={handleChange} isInvalid={!!errors.storeName}/>
                   <Form.Control.Feedback type="invalid">{errors.storeName}</Form.Control.Feedback>
                   {/* <Form.Control.Feedback className="text-start" type="invalid">Name must be at least 8 characters</Form.Control.Feedback> */}
                   </Form.Group>
               </Form>
           </div>

           <div className="d-flex flex-row gap-5 justify-content-between">
               <span className="text-muted ms-3">Email</span>
               <Form>
               <Form.Group  className ="email-form" controlId="formatBasicEmail" onSubmit={handleSubmit}>
                   <Form.Control name="email" type="email" placeholder="Enter your email" onChange={handleChange} isInvalid={!!errors.email}/>
                   <Form.Control.Feedback className="text-start" type="invalid">Invalid email format</Form.Control.Feedback>
                   </Form.Group>
               </Form>
           </div>

           <div className="d-flex flex-row gap-5 justify-content-between">
               <span className="text-muted ms-3">Phone Number</span>
               <Form>
               <Form.Group  className ="phone-form" controlId="formatBasicEmail" onSubmit={handleSubmit}>
                   <Form.Control name="phonenumber" type="number" placeholder="Enter your phone number" onChange={handleChange} isInvalid={!!errors.phonenumber} />
                   <Form.Control.Feedback className="text-start" type="invalid">Invalid phone number format</Form.Control.Feedback>
                   </Form.Group>
               </Form>
           </div>   
           
           <div className="d-flex flex-row gap-5 justify-content-between">
               <span className="text-muted ms-3">Store description</span>
               <Form>
               <Form.Group controlId="formatBasicDescription" onSubmit={handleSubmit}>
                   <Form.Control as="textarea" rows={5} className ="desc-form text-start" name="description" type="textarea" placeholder="Toko ini menjual segala kebutuhan sehari-hari" onChange={handleChange} isInvalid={!!errors.description}/>
                   <Form.Control.Feedback className="text-start" type="invalid"></Form.Control.Feedback>
                   </Form.Group>
               </Form>
           </div>
    </>
  )
}

function ProfileSeller() {
    // const redirect = useNavigate();
    const profile = useSelector((state) =>state.users.result)
    const token = useSelector((state)=>state.auth.token)
    const dispatch = useDispatch()

    // const onSubmitEditUser = (val) => {
    //     console.log(val.picture);
    //     const data = {token: token, 
    //     full_name: val.full_name === '' ? profile.full_name : val.full_name, 
    //     email: val.email === '' ? profile.email : val.email, 
    //     phoneNumber: val.phoneNumber === '' ? profile.phone_number : val.phoneNumber, 
    //     StoreDesc: val.StoreDesc === '' ? profile.store_description : val.StoreDesc};
    //     dispatch(updateUsers(data));
    //     redirect('/home/profile/details');
    //   };
      React.useEffect(()=>{
        dispatch(getUsers(token))
    },[dispatch, token])
    console.log(profile);
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
                                <Formik
                                    // onSubmit={onSubmitEditUser}                                
                                    initialValues={{storeName: '', phonenumber: '', description: '', email: ''}} 
                                    validationSchema={profileEdit}>
                                {(props) =><EditProfileValid {...props} />}
                                </Formik>
                
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