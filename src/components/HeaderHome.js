import { Button, Nav, Form } from 'react-bootstrap'
import { VscFilterFilled } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/shopping-bag1.png'

export default function HeaderHome() {
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
                        <Nav.Link href="/profile"><div className='logo-color'><VscFilterFilled size={24} /></div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                        <Nav.Link eventKey="link-1"><div className='align-self-center logo-color px-0'><CgShoppingCart size={24} /></div></Nav.Link>
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