import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/css/Checkout.css"

// Modal button untuk Choose another address karena tidak tahu caranya bikin 2 modal dalam 1 file
function ModalCheckouAddress() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button className="btn-choose" variant="outline-secondary" onClick={handleShow}>
            Choose another address
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Choose another address</Modal.Title>
            </Modal.Header>
            <Modal.Body>Add new address</Modal.Body>
            <div className='andreas-jane p-md-3'>
                <div className='title mb-md-2 mt-md-2'>Andreas Jane</div>
                <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, <br /> 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                <span>Change address</span>
            </div>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer> */}
        </Modal>
    </div>
  )
}

export default ModalCheckouAddress