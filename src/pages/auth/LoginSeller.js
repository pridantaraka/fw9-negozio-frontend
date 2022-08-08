import React from 'react'
import {Container, Col, Form} from 'react-bootstrap'
import logo  from '../../assets/images/Vector-logo.png'
import {Formik} from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/asyncAction/auth'
 
const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(4).required('Required')
  })

  const AuthValid = ({errors, handleSubmit, handleChange, values}) => { 
    return (
      <>
           
            <Form noValidate onSubmit={handleSubmit} className="mt-5 gap-2" >
                
                <Form.Group  className ="mb-3 mx-auto w-50" controlId="formatBasicEmail">
                <Form.Control 
                name="email" 
                className="input-login" 
                onChange={handleChange} 
                type="email" 
                placeholder="Email"
                value={values.email}
                isInvalid={!!errors.email} />
                <Form.Control.Feedback className="text-start" type="invalid">Invalid email format</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicPassword">
                <Form.Control 
                name="password" 
                className="input-login" 
                onChange={handleChange} 
                type="password" 
                placeholder="Password" 
                value={values.password}
                isInvalid={!!errors.password} />
                <Form.Control.Feedback className="text-start" type="invalid">Password must be at least 8 characters</Form.Control.Feedback>
                </Form.Group>
                <div className ="text-muted forgot-text">
                    <Link to="/resetpassword" className ="link-dark text-decoration-none">Forgot Password?</Link>
                </div> 
                <div>
                    <button className="btn btn-lg button-auth mx-auto w-50" type='submit'>Confirm</button>
                </div>
                <div className="text-center my-5">
                    Don't have a Negozio account? Let's <Link to="/registerseller" className="fw-bold text-decoration-none text">Register</Link>
                </div>
            </Form>
      </>
    )
  }

function LoginSeller() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onLogin = (value) => {
      const data = { email: value.email, password: value.password };
      console.log(data);
      dispatch(login(data));
    };
  
    React.useEffect(() => {
        if (token) {
          navigate("/profile");
        }
     
    }, [navigate, token]);
    return(
        <>
    <Container className='all-font'>
      <Col className="m-4 p-5 text-center justify-content-center align-items-center">
        <div className="m-5 p-5"> 
            <div className="image-fluid d-flex justify-content-center gap-3">
            <img src={logo} alt="logo" />
            <span className="my-3">Negozio</span>
            </div>

            <h4 className="my-5">Please login with your account</h4>

            <div>
            <Link to="/login" className="text-decoration-none">
            <button className="btn btn-lg button-role text-center">Customer</button>
            </Link>
            <button className="btn btn-lg button-role customer text-center">Seller</button>
            </div>

            <Formik 
            onSubmit={onLogin}
            initialValues={{email: '', password: ''}} 
            validationSchema={loginSchema}>
                {(props) =><AuthValid {...props} />}
            </Formik>
        </div>
      </Col>
    </Container>
        </>
    )
}
export default LoginSeller