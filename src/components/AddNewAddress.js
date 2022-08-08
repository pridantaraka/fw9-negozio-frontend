// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import "../assets/css/Checkout.css"
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from "react-redux";
// import {Formik} from "formik";
// import * as Yup from "yup";

// import { login } from "../redux/asyncAction/auth";

// const loginSchema = Yup.object().shape({
//     rumah: Yup.string().min(5, "Mininum 5 characters").required("Required!"),
//     password: Yup.string().min(4).required('Required')
//   })
  
// //   const AuthValid = ({errors, handleSubmit, handleChange, values}) => {
// //     return (
// //       <>
      
// //       </>
// //     )
// //   }

// // Modal button untuk Choose another address karena tidak tahu caranya bikin 2 modal dalam 1 file
// function AddNewAddress() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const dispatch = useDispatch();
//     const token = useSelector((state) => state.auth.token);
//     const navigate = useNavigate();
  
//     const onLogin = (value) => {
//         const data = { email: value.email, password: value.password };
//         dispatch(login(data));
//       };
    
//       React.useEffect(() => {
//           if (token) {
//             navigate("/profile");
//           }
       
//       }, [navigate, token]);
//   return (
//     <div>
//         <Button className="btn-choose" variant="outline-secondary" onClick={handleShow}>
//             Add new address
//         </Button>
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Choose another address</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Close
//                 </Button>
//                 <Button variant="primary" onClick={handleClose}>
//                     Save Changes
//                 </Button>
//             </Modal.Footer>

//         <Formik 
//             onSubmit={onLogin}
//             initialValues={{email: '', password: ''}} 
//             validationSchema={loginSchema}>
//             {(props) =><AuthValid {...props} />}
//         </Formik>
//         </Modal>
//     </div>
//   )
// }

// export default AddNewAddress