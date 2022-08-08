import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import * as Yup from "yup"
import {Formik} from "formik" 

const addressEditSchema = Yup.object().shape({
  address: Yup.string.required('Required'),
  name: Yup.string().required('Required'), 
  phonenumber: Yup.string().min(10).max(14).required('A phone number is required'),
  fulladdress: Yup.string().required('required'),
  postalcode: Yup.number().min(6).max(6).required('required'),
  city: Yup.string().required('Required')
})


function ModalAddress() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [setChecked] = useState({ primary: true });

  const changeRadio = (e) => {
    setChecked(() => {
      return {
        primary: false,
        [e.target.value]: true
      };
    });
  };

  const EditProfileValid = ({errors, handleSubmit, handleChange, val}) => {

    return (
      <>
      <div className='new-address p-4 m-3 text-center all-font' onClick={handleShow}>Add new address</div>
    
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header className="d-flex justify-content-center align-items-center border-0" closeButton>
              <Modal.Title className="text-center justify-content-center fw-bold modal-title-address">Add new address</Modal.Title>
            </Modal.Header>
            <Modal.Body className="mt-3">
              <div className="d-flex flex-column gap-2">
                  <span className="text-muted">Save address as (ex : home address, office address)</span>
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formatBasicAddress">
                        <Form.Control name="address" type="text" placeholder="Rumah"  onChange={handleChange} isInvalid={!!errors.address}/>
                        <Form.Control.Feedback className="text-start" type="invalid">Name address is required</Form.Control.Feedback>
                    </Form.Group>
                  </Form>

              
                  <div className="d-flex flex-row gap-5">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-muted">Recipient's name</span>
                      <Form className="form-modal" noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formatBasicName">
                          <Form.Control name="name" type="text" onChange={handleChange} isInvalid={!!errors.name}/>
                          <Form.Control.Feedback className="text-start" type="invalid">Name is required</Form.Control.Feedback>
                        </Form.Group>
                      </Form>
                    </div>

                  
                    <div className="d-flex flex-column gap-2">
                      <span className="text-muted">Recipient's telephone number</span>
                      <Form className="form-modal" noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formatBasicName">
                          <Form.Control name="name" type="text" onChange={handleChange} isInvalid={!!errors.phonenumber}/>
                          <Form.Control.Feedback className="text-start" type="invalid">Invalid phone number format</Form.Control.Feedback>
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                


                  <div className="d-flex flex-row gap-5">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-muted">Address</span>
                      <Form className="form-modal" noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formatBasicAddress">
                          <Form.Control name="address" type="text" onChange={handleChange} isInvalid={!!errors.fulladdress}/>
                          <Form.Control.Feedback className="text-start" type="invalid">Full address is required</Form.Control.Feedback>
                        </Form.Group>
                      </Form>
                    </div>
                  

                    <div className="d-flex flex-column gap-2">
                      <span className="text-muted">Postal code</span>
                      <Form className="form-modal" noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formatBasicName">
                          <Form.Control name="name" type="text" onChange={handleChange} isInvalid={!!errors.postalcode}/>
                          <Form.Control.Feedback className="text-start" type="invalid">Postal code is required</Form.Control.Feedback>
                        </Form.Group>
                      </Form>
                    </div>
                  </div>

                  <div className="d-flex flex-row gap-5">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-muted">City or Subdistrict</span>
                      <Form className="form-modal" noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formatBasicAddress">
                          <Form.Control name="address" type="text" onChange={handleChange} isInvalid={!!errors.city}/>
                          <Form.Control.Feedback className="text-start" type="invalid">City is Required</Form.Control.Feedback>
                        </Form.Group>
                      </Form>
                    </div>
                  </div>

                  <label className="d-flex flex-row gap-2 text-muted">
                    <input
                      type="checkbox" value="primary" onChange={changeRadio}/> Make it the primary address
                    </label>
              
              </div>

              <Modal.Footer className="mt-5 border-0">
                    <div className="d-flex flex-row gap-2 justify-content-end">
                      <Button variant="outline-secondary" className='button-cancel-address' onClick={handleClose}>Cancel</Button>
                      <Button variant="danger" className='button-save-address'>Save</Button>
                    </div>
              </Modal.Footer>
            </Modal.Body>
          </Modal>
      </>
    )
  }

  return (
    <>
        <Formik                                
            initialValues={{name: '', email: '', phonenumber: ''}} 
            validationSchema={addressEditSchema}>
            {(props) =><EditProfileValid {...props} />}
        </Formik>
    </>
  )
}

export default ModalAddress