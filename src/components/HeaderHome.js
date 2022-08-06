import { Nav, Form, Button } from 'react-bootstrap'
import { VscFilterFilled } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from 'react-router-dom';
import React from 'react';
import ModalFilter from './ModalFilter';
import logo1 from '../assets/images/shopping-bag1.png'

export default function HeaderHome() {
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
            <header className='mw-100 nav-home-height py-3 d-flex justify-content-around align-items-center'>
                <Nav defaultActiveKey="/home" as="ul" className='gap-3'>
                    <Nav.Item as="li" className='logo-color'>
                        <Nav.Link href="/" className='d-flex flex-row'>
                        <div><img src={logo1} alt='Logo' className='fluid align-self-center'/></div>
                        <h4 className='align-self-center mb-0'>Negozio</h4>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center logo-color'>
                        <Nav.Link eventKey="link-1" >
                            <Form>
                                <Form.Control size='small' placeholder='Search' type='search' className='nav-search-box'>
                                
                                </Form.Control>
                            </Form>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex align-items-center'>
                        <button className='btn btn-md' onClick={() => setModalShow(true)}>
                        <div className='logo-color'><VscFilterFilled size={24} /></div>
                        </button>

                        <ModalFilter
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex align-items-center'>
                        <Nav.Link eventKey="link-1">
                        <button className='btn btn-md logo-button'>
                            <div className='align-self-center logo-color px-0'><CgShoppingCart size={24} /></div>
                        </button>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                        <Link to="/login" className="text-decoration-none">
                            <Button className='nav-button'>Login</Button>
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                        <Link to="/login" className="text-decoration-none">
                            <Button className='nav-button'>Sign Up</Button>
                        </Link>
                    </Nav.Item>
                </Nav>
            </header>
        </>
    )
}