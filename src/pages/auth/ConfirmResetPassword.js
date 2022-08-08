import React from 'react'
import {Container, Col, Form} from 'react-bootstrap'
import logo  from '../../assets/images/Vector-logo.png'
import {Formik} from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from 'react-router-dom'
 
const resetSchema = Yup.object().shape({
    password: Yup.string().min(8).required('Required'),
    newpassword: Yup.string().min(8).required('Required')
  })

  const AuthValid = ({errors, handleSubmit, handleChange}) => { 
    return (
      <>
           
            <Form noValidate onSubmit={handleSubmit} className="mt-5 gap-2" >
                
            <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicPassword">
                <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" isInvalid={!!errors.password} />
                <Form.Control.Feedback className="text-start" type="invalid">Password must be at least 8 characters</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicPassword">
                <Form.Control name="password" onChange={handleChange} type="password" placeholder="Confirmation New Password" isInvalid={!!errors.password} />
                <Form.Control.Feedback className="text-start" type="invalid">Password does not match</Form.Control.Feedback>
                </Form.Group>
                <div className ="text-muted forgot-text">
                    <Link to="/resetpassword" className ="link-dark text-decoration-none">Forgot Password?</Link>
                </div> 
                <div>
                  <Link to='/login'>
                    <button className="btn btn-lg button-auth mx-auto w-50">Confirm</button>
                    </Link>
                </div>
            </Form>
      </>
    )
  }

function ConfirmResetPassword() {

  const navigate = useNavigate()
    const createNewPass = (user) => {
    if (user.newpassword === user.password) {
      navigate('/login')
    } else {
      window.alert('Password does not match')
    }
  }

    return(
        <>
    <Container className='all-font'>
      <Col className="m-4 p-5 text-center justify-content-center align-items-center">
        <div className="m-5 p-5"> 
            <div className="image-fluid d-flex justify-content-center gap-3">
            <img src={logo} alt="logo" />
            <span className="my-3">Negozio</span>
            </div>

            <h4 className="my-5">Reset Password</h4>
            <span>You need to change your password to activate your account</span>

            <Formik initialValues={{password: '', newpassword: ''}} onSubmit ={createNewPass} validationSchema={resetSchema}>
                {(props) =><AuthValid {...props} />}
            </Formik>
        </div>
      </Col>
    </Container>
        </>
    )
}
export default ConfirmResetPassword