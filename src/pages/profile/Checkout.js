// import React from 'react'
import HeaderProfile from '../../components/HeaderProfile';
import "../../assets/css/Checkout.css";
import { Button, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalCheckouAddress from "../../components/ModalChooseAddress";
import Form from 'react-bootstrap/Form';

import checkout1 from "../../assets/images/checkout1.png"
import checkout2 from "../../assets/images/checkout2.png"
import gopay from "../../assets/images/gopay.png"
import pos from "../../assets/images/pos.png"
import mastercard from "../../assets/images/mastercard.png"

function Data(props) {
    return <span className='mens-cloth'>{props.title}</span>
}

function Desc(props) {
    return <span className='courtesy'>{props.courtesy}</span>
}

function Price(props) {
    return <span className='price'>{props.price}</span>
}

function Shipping(props) {
    return <span className='ms-md-4 modal-value'>{props.choice}</span>
}

function Checkout() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <HeaderProfile />
        <Container>
            <div className='mt-md-3 checkout-title'>Checkout</div>
            <div className='checkout-left d-flex gap-5'>
                <div className='shipping-address'>
                    <div className='title mb-md-2 mt-md-4'>Shipping Adress</div>
                    <div className='andreas-jane p-md-3'>
                        <div className='title mb-md-2 mt-md-2'>Andreas Jane</div>
                        <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, <br /> 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>

                    <ModalCheckouAddress />
                    </div>
                    <div className='d-flex flex-row product-list p-md-3 mb-md-4 mt-md-4'>
                        
                        <div className='flex-fill d-flex flex-row'>
                            <div>
                                <img src={checkout2} alt="Men's formal suit - Black" className='me-3'/>
                            </div>
                            <div>
                                <Data title="Men's formal suit - Black"/> <br />
                                <Desc courtesy="Zalora Cloth"/>
                            </div>
                        </div>
                        <div>
                            <Price price="$ 20.0" />
                        </div>
                    </div>
                    <div className='d-flex flex-row product-list p-md-3'>
                        <div className='flex-fill d-flex flex-row'>
                            <div>
                                <img src={checkout1} alt="Mens Jacket" className='me-3'/>
                            </div>
                            <div>
                                <Data title="Men's Jacket jeans"/> <br />
                                <Desc courtesy="Zalora Cloth"/>
                            </div>
                        </div>
                        <div>
                            <Price price="$ 20.0" />
                        </div>
                    </div>
                </div>

                <div className='shopping-summary p-md-3 mt-md-4'>
                    <span className='title'>Shopping summary</span>
                    <div className='d-flex flex-row mt-md-3'>
                        <div className='order flex-fill mb-md-2'>Order</div>
                        <div className='price'>$ 40.0</div>
                    </div>
                    <div className='d-flex flex-row'>
                        <small className='delivery flex-fill'>Delivery</small>
                        <div className='price'>$ 5.0</div>
                    </div> <hr />
                    <div className='d-flex flex-row'>
                        <span className='title flex-fill'>Shopping summary</span>
                        <div className='price'>$ 45.0</div>
                        {/* untuk nominalnya belum dibuat dinamis */}
                    </div>
                    <Button className="btn-payment mt-4" variant="danger" onClick={handleShow}>Select payment </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
                            <Modal.Title className='modal-payment-title'>Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='modal-value'>Payment method</Modal.Body>
                        <div className='modal-payment d-flex flex-column gap-md-4'>
                            <div className="d-flex">
                                <div className='flex-fill ms-md-3'>
                                    <img src={gopay} alt='gopay' style={{width: "11%", marginRight: "9px"}}/>
                                    <Shipping choice="Gopay"/>
                                </div>
                                <div>
                                    {['checkbox'].map((type) => (
                                        <div className="mb-3">
                                            <Form.Check
                                                inline
                                                name="group1"
                                                type={type}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className='flex-fill ms-md-3'>
                                    <img src={pos} alt='pos' style={{width: "9%", marginRight: "19px"}}/>
                                    <Shipping choice="Pos Indonesia"/>
                                </div>
                                <div>
                                    {['checkbox'].map((type) => (
                                        <div className="mb-3">
                                            <Form.Check
                                                inline
                                                name="group1"
                                                type={type}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className='flex-fill ms-md-3 d-flex flex-row'>
                                    <div className='d-flex flex-column'>
                                        <img src={mastercard} alt='Mastercard'className='mastercard-img'/>
                                        <small style={{color: "#000000", fontSize: "10px"}}>mastercard</small>
                                    </div>
                                    <Shipping choice="Mastercard"/>
                                </div>
                                <div>
                                    {['checkbox'].map((type) => (
                                        <div className="mb-3">
                                            <Form.Check
                                                inline
                                                name="group1"
                                                type={type}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='shopping-summary-modal p-md-3 mt-md-4 mb-md-5'>
                                <span className='modal-value'>Shopping summary</span>
                                <div className='d-flex flex-row mt-md-3'>
                                    <div className='delivery flex-fill mb-md-2'>Order</div>
                                    <div className='price'>$ 40.0</div>
                                </div>
                                <div className='d-flex flex-row'>
                                    <small className='delivery flex-fill'>Delivery</small>
                                    <div className='price'>$ 5.0</div>
                                </div>
                            </div>
                        </div>
                        <Modal.Footer className="mb-md-3 mt-md-5">
                            <div className=' flex-fill'>
                                <span className='modal-value flex-fill'>Shopping summary</span>
                                <div className='price-modal '>$ 45.0</div>
                                    {/* untuk nominalnya belum dibuat dinamis */}
                            </div>
                            <Button className="modal-payment-btn" onClick={handleClose}>
                                Buy
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Checkout