import React from 'react';
import { Col } from "react-bootstrap";
import { FiEdit2, FiBox, FiShoppingCart, FiHome } from "react-icons/fi"
import {Link} from "react-router-dom"
import profSide from "../assets/images/sidebar.png" 


function SidebarSeller() {
  return (
  <>
  <Col className="col-md-3 d-flex flex-column sidebar-wrap side-height h-100">
            <div className="d-flex flex-column">
                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3">
                        <img src={profSide} alt="profile-sidebar" className="img-fluid sidebar-prof"></img>
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
                  
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap text-center">
                          <FiHome size={18} className="icon-sidebar" />                          
                      </div>
                          <div className='d-flex flex-column gap-2'>
                            <span className='fw-bold'>Store</span>
                            <Link to="/profileseller" className='text-decoration-none text-muted'>
                              <span>Store profile</span>
                            </Link> 
                          </div>
                          
                      </div>                    
                  

                  
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap-one text-center">
                        <FiBox size={18} className="icon-sidebar" />
                      </div>
                       <div className='d-flex flex-column gap-2'>
                          <span className='fw-bold'>Product</span>
                          <Link to="/myproduct" className='text-decoration-none text-muted'>
                            <span>My products</span>
                          </Link>
                          <Link to="/sellingproduct" className='text-decoration-none text-muted'>
                            <span>Selling products</span>
                          </Link> 
                       </div>
                       </div>
                  

                  
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap-two text-center">
                        <FiShoppingCart size={18} className="icon-sidebar" />
                      </div>
                        <div className='d-flex flex-column gap-2'>
                          <span className='fw-bold'>Order</span>
                          <Link to="/myorderseller" className='text-decoration-none text-muted'>
                            <span>My order</span>
                          </Link>
                          <Link to="/ordercancel" className='text-decoration-none text-muted'>
                            <span>Order cancel</span>
                          </Link>
                        </div>
                    </div>
                  

            </div>
          
    </Col>
    </>   
  );
}

export default SidebarSeller