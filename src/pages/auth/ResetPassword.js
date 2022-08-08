import React from 'react'
import {Container, Col, Form} from 'react-bootstrap'
import logo  from '../../assets/images/Vector-logo.png'
import {Formik} from "formik"
import * as Yup from "yup"
import { Link } from 'react-router-dom'
 
const resetSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
  })

  const AuthValid = ({errors, handleSubmit, handleChange}) => { 
    return (
      <>
           
            <Form noValidate onSubmit={handleSubmit} className="mt-5 gap-2" >
                
                <Form.Group  className ="mb-3 mx-auto w-50" controlId="formatBasicEmail">
                <Form.Control name="email" className="input-login" onChange={handleChange} type="email" placeholder="Email" isInvalid={!!errors.email} />
                <Form.Control.Feedback className="text-start" type="invalid">Invalid email format</Form.Control.Feedback>
                </Form.Group>
                <div className ="text-muted forgot-text">
                    <Link to="" className ="link-dark text-decoration-none">Forgot Password?</Link>
            </div> 

            <Link to="/confirmresetpassword" className="text-decoration-none">
              <div>
                  <button className="btn btn-lg button-auth mx-auto w-50">Confirm</button>
              </div>
            </Link>
            <div className="text-center my-5">
                Don't have a Negozio account? Let's <Link to="/login" className="fw-bold text-decoration-none text">Register</Link>
            </div>
            </Form>
      </>
    )
  }

function ResetPassword() {
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

            <Formik initialValues={{email: ''}} validationSchema={resetSchema}>
                {(props) =><AuthValid {...props} />}
            </Formik>
        </div>
      </Col>
    </Container>
        </>
    )
}
export default ResetPassword