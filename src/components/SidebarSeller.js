import React from 'react';
import { Col } from "react-bootstrap";
import { FiEdit2, FiBox, FiShoppingCart, FiHome } from "react-icons/fi"
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import profSide from "../assets/images/sidebar.png" 


function SidebarSeller() {
  const users = useSelector((state) => state.users.result);
  return (
  <>
  <Col className="col-md-3 d-flex flex-column sidebar-wrap side-height h-100">
            <div className="d-flex flex-column">
                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3">
                        <img src={`http://${users.profile_picture}`} alt="profile-sidebar" className="img-fluid sidebar-prof"></img>
                        <div className="d-flex flex-column">
                          <span className="py-2 fw-bold">Maman Resing</span>
                            <div className="d-flex flex-row gap-2">
                              <FiEdit2 size={18} className="pencil"/>
                              <span className="text-muted">Edit Profile</span>
                            </div>
                        </div>
                    </div>
                  </Link>
            </div>

            <div className="side-child-wrap my-5">
                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap text-center">
                          <FiHome size={18} className="icon-sidebar" />                          
                      </div>
                          <span>Store</span>
                      </div>                    
                  </Link>

                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap-one text-center">
                        <FiBox size={18} className="icon-sidebar" />
                      </div>
                      <span>Product</span>
                    </div>
                  </Link>

                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap-two text-center">
                        <FiShoppingCart size={18} className="icon-sidebar" />
                      </div>
                      <span>Order</span>
                    </div>
                  </Link>

            </div>
          
    </Col>
    </>   
  );
}

export default SidebarSeller