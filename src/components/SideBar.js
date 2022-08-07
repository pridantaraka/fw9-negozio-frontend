import React from 'react';

import { CgShoppingBag, CgProfile } from "react-icons/cg";
import { IoIosPin } from "react-icons/io";
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"

export default function SideBar(){
  return(
    <>
    <Row class="d-flex flex-row gap-3 px-2 py-2 mx-5">
      <Col md={12} className="d-flex flex-column nav-wrap p-5 m-3">
      <div className="d-flex flex-column gap-5">
        <Link to="/home" className="text-decoration-none text-muted">
          <div className="d-flex flex-row gap-3 icon-nav">
            <CgProfile size={24} />
            <span>Profile</span>
          </div>
        </Link>
        <Link to="/" className="text-decoration-none text-muted">
          <div className="d-flex flex-row gap-3 icon-nav">
            <CgProfile size={24} />
            <span>My Account</span>
          </div>
        </Link>
        <Link to="/" className="text-decoration-none text-muted">
          <div className="d-flex flex-row gap-3 icon-nav">
            <IoIosPin size={24} />
            <span>Shopping Address</span>
          </div>
        </Link>
        <Link to="/" className="text-decoration-none text-muted">
          <div className="d-flex flex-row gap-3 icon-nav">
            <CgShoppingBag size={24} />
            <span>My Order</span>
          </div>
        </Link>
       </div>
      </Col>
    </Row>
    </>
  )
}

