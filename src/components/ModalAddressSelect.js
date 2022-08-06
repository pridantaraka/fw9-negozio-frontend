import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import ModalAddress from "./ModalAddress";


function ModalAddressSelect() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="outline-secondary" className='text-center rounded' onClick={handleShow}>Select Another Address</Button>

    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header className="d-flex justify-content-center align-items-center border-0" closeButton>
          <Modal.Title className="text-center justify-content-center fw-bold modal-title-address">Choose another address</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mt-3">
        <ModalAddress />
          <div className='p-5 m-3 address'>
              <div className='d-flex flex-column gap-2'>
                <span>Andreas Jane</span>
                <span>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</span>
                <span className='fw-bold fs-5 mt-3'>Change address</span>
              </div>                           
          </div>                          
        </Modal.Body>
    </Modal>
    </>
  )
}

export default ModalAddressSelect