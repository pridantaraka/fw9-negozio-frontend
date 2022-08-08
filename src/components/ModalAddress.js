import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";


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
              <Form>
                <Form.Group controlId="formatBasicAddress">
                    <Form.Control name="address" type="text" placeholder="Rumah" />
                </Form.Group>
              </Form>

           
              <div className="d-flex flex-row gap-5">
                <div className="d-flex flex-column gap-2">
                  <span className="text-muted">Recipient's name</span>
                  <Form className="form-modal">
                    <Form.Group controlId="formatBasicName">
                      <Form.Control name="name" type="text" />
                    </Form.Group>
                  </Form>
                </div>

              
                <div className="d-flex flex-column gap-2">
                  <span className="text-muted">Recipient's telephone number</span>
                  <Form className="form-modal">
                    <Form.Group controlId="formatBasicName">
                      <Form.Control name="name" type="number" />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            


              <div className="d-flex flex-row gap-5">
                <div className="d-flex flex-column gap-2">
                  <span className="text-muted">Address</span>
                  <Form className="form-modal">
                    <Form.Group controlId="formatBasicAddress">
                      <Form.Control name="address" type="text" />
                    </Form.Group>
                  </Form>
                </div>
              

                <div className="d-flex flex-column gap-2">
                  <span className="text-muted">Postal code</span>
                  <Form className="form-modal">
                    <Form.Group controlId="formatBasicName">
                      <Form.Control name="name" type="number" />
                    </Form.Group>
                  </Form>
                </div>
              </div>

              <div className="d-flex flex-row gap-5">
                <div className="d-flex flex-column gap-2">
                  <span className="text-muted">City or Subdistrict</span>
                  <Form className="form-modal">
                    <Form.Group controlId="formatBasicAddress">
                      <Form.Control name="address" type="text" />
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

export default ModalAddress