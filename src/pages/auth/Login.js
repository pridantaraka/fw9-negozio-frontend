import React from 'react'
import {Container, Col, Form, Button} from 'react-bootstrap'
import logo  from '../../assets/images/Vector-logo.png'
import {Formik} from "formik"
import * as Yup from "yup"
import { login } from "../../redux/asyncAction/auth";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

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
                value={values.email}
                placeholder="Email" 
                isInvalid={!!errors.email} />
                <Form.Control.Feedback className="text-start" type="invalid">Invalid email format</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicPassword">
                <Form.Control 
                name="password" 
                className="input-login" 
                onChange={handleChange} 
                type="password" 
                value={values.password}
                placeholder="Password" 
                isInvalid={!!errors.password} />
                <Form.Control.Feedback className="text-start" type="invalid">Password must be at least 8 characters</Form.Control.Feedback>
                </Form.Group>
                <div className ="text-muted forgot-text">
                    <Link to="/resetpassword" className ="link-dark text-decoration-none">Forgot Password?</Link>
                </div> 
                <div>
                    <Button className="btn btn-lg button-auth mx-auto w-50" type='submit'>Confirm</Button>
                </div>
                <div className="text-center my-5">
                    Don't have a Negozio account? Let's <Link to="/register" className="fw-bold text-decoration-none text">Register</Link>
                </div>
            </Form>
      </>
    )
  }


function Login() {
    // const navigate = useNavigate();

    // const onLogin = (val) => {
    //       if(val.email === 'customer@mail.com' && val.password === '1234'){
    //           console.log(val.email === 'customer@mail.com');
    //           window.alert('Login success')
    //           localStorage.setItem("auth", "randomToken");
    //           navigate("/profile");
    //         }else{
    //           window.alert('Login Failed Password Or Email Wrong')
    //         }
    //   };
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    const onLogin = (value) => {
        const data = { email: value.email, password: value.password };
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
                  <button className="btn btn-lg button-role customer text-center" value=''>Customer</button>
                  <Link to="/loginseller" className="text-decoration-none">
                  <button className="btn btn-lg button-role text-center">Seller</button>
                  </Link> 
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
export default Login 