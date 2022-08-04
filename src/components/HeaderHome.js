import { Button, Nav, Form } from 'react-bootstrap'
import { VscFilterFilled } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";

import logo1 from '../assets/images/shopping-bag1.png'

export default function HeaderHome() {
    return(
        <>
            <header className='mw-100 nav-home-height py-3 d-flex justify-content-center align-items-center'>
                <Nav defaultActiveKey="/home" as="ul" className='gap-5'>
                    <Nav.Item as="li" className='logo-color'>
                        <Nav.Link href="/" className='d-flex flex-row'>
                        <div><img src={logo1} alt='Logo' className='fluid align-self-center'/></div>
                        <h4 className='align-self-center'>Negozio</h4>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1" className='d-flex flex-row align-items-center logo-color'>
                            <Form>
                                <Form.Control size='small' placeholder='Search' type='text' className='nav-search-box'>
                                
                                </Form.Control>
                            </Form>
                            <Nav.Link eventKey="link-1"><div className='logo-color'><VscFilterFilled size={24} /></div></Nav.Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                        <Nav.Link eventKey="link-1"><div className='align-self-center logo-color'><CgShoppingCart size={24} /></div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                        <Button className='nav-button'>Login</Button>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                        <Button className='nav-button'>SignUp</Button>
                    </Nav.Item>
                </Nav>
            </header>
        </>
    )
}