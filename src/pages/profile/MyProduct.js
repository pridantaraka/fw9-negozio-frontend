import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeaderProfile from '../../components/HeaderProfile'
import SidebarSeller from '../../components/SidebarSeller'
import {FiSearch, FiTriangle} from "react-icons/fi"

function MyProduct() {
  return(
      <>
          <Container className='mw-100 main-container'>
              <Row>
                  <HeaderProfile />
                  <SidebarSeller />
                  <Col className="p-5 m-3">
                      <div className="d-flex flex-column search-container p-5">
                          <div className="d-flex flex-column gap-3">
                              <span className="fw-bold fs-2">My product</span>
                              <div className='d-flex flex-row gap-5 text-muted'>
                                <span className='table-name mx-3'>All items</span>
                                <span className='mx-5'>Sold out</span>
                                <span className='mx-5'>Archived</span>
                              </div>                              
                          </div>
                          <hr/>

                          <div className="input-group flex-nowrap search-product">
                            <span className="input-group-text icon-search">
                              <FiSearch size={24} />
                            </span>
                            <input type="text" className="form-control input-search" placeholder="Search"/>
                          </div>

                          <div className='container-product mt-5'>
                            <div className='head-container-product'>
                              <div className='d-flex flex-row px-5 py-3 justify-content-between'>
                                <div className='d-flex flex-row gap-2'>
                                  <span>Product name</span>
                                  <div className='d-flex flex-column py-2'>
                                    <FiTriangle size={6}  />
                                    <FiTriangle size={6}  style = {{transform: 'rotate(180deg)' }} />
                                  </div>
                                </div>

                                <div className='d-flex flex-end gap-5'>
                                  <div className='d-flex flex-row gap-2'>
                                    <span>Price</span>
                                    <div className='d-flex flex-column py-2'>
                                      <FiTriangle size={6}  />
                                      <FiTriangle size={6}  style = {{transform: 'rotate(180deg)' }} />
                                    </div>
                                  </div>

                                  <div className='d-flex flex-row gap-2'>
                                    <span>Stock</span>
                                    <div className='d-flex flex-column py-2'>
                                      <FiTriangle size={6}  />
                                      <FiTriangle size={6}  style = {{transform: 'rotate(180deg)' }} />
                                    </div>
                                  </div>
                                </div>
                         
                              </div>
                            </div>
                          </div>     
                                               
                        </div>                                                             
                  </Col>
              </Row>
          </Container>
      </>
  )
}
export default MyProduct