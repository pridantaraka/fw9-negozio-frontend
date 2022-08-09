import { Nav, Form } from "react-bootstrap";
import { VscFilterFilled } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";
import React from "react";
import ModalFilter from "./ModalFilter";
import logo1 from "../assets/images/shopping-bag1.png";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <header className="mw-100 nav-home-height py-3 d-flex flex-row justify-content-around align-items-center all-font">
        <Nav defaultActiveKey="/home" as="ul" className="gap-3 d-flex flex-row">
          <Nav.Item as="li" className="logo-color">
            <Link to="/" className="d-flex flex-row">
              <div>
                <img
                  src={logo1}
                  alt="Logo"
                  className="fluid align-self-center"
                />
              </div>
              <h4 className="align-self-center mb-0">Negozio</h4>
            </Link>
          </Nav.Item>
          <Nav.Item
            as="li"
            className="d-flex flex-row align-items-center logo-color"
          >
            <div>
              <Form>
                <Form.Control
                  size="small"
                  placeholder="Search"
                  type="search"
                  className="nav-search-box"
                ></Form.Control>
              </Form>
            </div>
            <div>
              <button className="btn btn-md" onClick={() => setModalShow(true)}>
                <div className="logo-color">
                  <VscFilterFilled size={24} />
                </div>
              </button>

              <ModalFilter
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <Link to="/mybag" className="btn btn-md logo-button">
              <div className="align-self-center logo-color px-0">
                <CgShoppingCart size={24} />
              </div>
            </Link>
          </Nav.Item>
          {/* <NavLink to="/faq" activeClassName="selected">
                    FAQs
                    </NavLink> */}
          <Nav.Item className="d-flex flex-row justify-content-center align-items-center gap-5 gap-md-3 mx-auto">
            <Link to="/login">
              <button className="btn nav-button pb-1">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn nav-button pb-1">Sign Up</button>
            </Link>
          </Nav.Item>
        </Nav>
      </header>
    </>
  );
}
