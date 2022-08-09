import React from 'react';
import { Container, Col, Form } from 'react-bootstrap';
import logo from '../../assets/images/Vector-logo.png';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/asyncAction/auth';
import Button from 'react-bootstrap/Button';

const regisSchema = Yup.object().shape({
  full_name: Yup.string().min(6, 'Name length must be at least 6 characters').required('Required'),
  email: Yup.string().email('Invalid email address format').required('Required'),
  store_name: Yup.string().min(6),
  phone_number: Yup.number().min(10).required('Required'),
  password: Yup.string().min(8).required('Required'),
});

const AuthValid = ({ errors, handleSubmit, handleChange }) => {
  return (
    <>
      <Form noValidate onSubmit={handleSubmit} className="mt-5 gap-2">
        <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicUsername">
          <Form.Control name="full_name" onChange={handleChange} type="text" placeholder="Name" isInvalid={!!errors.full_name} />
          <Form.Control.Feedback className="text-start" type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicEmail">
          <Form.Control name="email" onChange={handleChange} type="email" placeholder="Email" isInvalid={!!errors.email} />
          <Form.Control.Feedback className="text-start" type="invalid">
            Invalid email format
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicStoreName">
          <Form.Control name="store_name" onChange={handleChange} type="text" placeholder="Store Name" isInvalid={!!errors.store_name} />
          <Form.Control.Feedback className="text-start" type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicPhoneNumber">
          <Form.Control name="phone_number" onChange={handleChange} type="text" placeholder="Phone Number" isInvalid={!!errors.phone_number} />
          <Form.Control.Feedback className="text-start" type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicPassword">
          <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" isInvalid={!!errors.password} />
          <Form.Control.Feedback className="text-start" type="invalid">
            Password must be at least 8 characters
          </Form.Control.Feedback>
        </Form.Group>

        <div>
          <Button className="btn button-auth mt-5 w-50" type="submit">
            Confirm
          </Button>
        </div>
      </Form>

      <div className="text-center my-5">
        Already have a Negozio account? Let's{' '}
        <Link to="/loginseller" className="fw-bold text-decoration-none text">
          Login
        </Link>
      </div>
    </>
  );
};

function RegisterSeller() {
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.user.token);

  const successMsg = useSelector((state) => state.auth.successMsg);
  const navigate = useNavigate();

  const onRegister = (value) => {
    console.log(value);
    dispatch(register(value));
  };

  React.useEffect(() => {
    if (successMsg) {
      navigate('/loginseller', { state: { successMsg } });
    }
  }, [navigate, successMsg]);
  return (
    <>
      <Container className="all-font">
        <Col className="m-5 p-5 text-center justify-content-center align-items-center">
          <div className="image-fluid d-flex justify-content-center gap-3">
            <img src={logo} alt="logo" />
            <span className="my-3">Negozio</span>
          </div>

          <h4 className="my-5">Please sign up with your account</h4>

          <div>
            <Link to="/register" className="text-decoration-none">
              <button className="btn btn-lg button-role  text-center">Customer</button>
            </Link>
            <button className="btn btn-lg button-role customer text-center">Seller</button>
          </div>

          <Formik initialValues={{ role: 2, full_name: '', email: '', store_name: '', phone_number: 0, password: '' }} onSubmit={onRegister} validationSchema={regisSchema}>
            {(props) => <AuthValid {...props} />}
          </Formik>
        </Col>
      </Container>
    </>
  );
}

export default RegisterSeller;
