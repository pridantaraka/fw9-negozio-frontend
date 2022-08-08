import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import HeaderProfile from '../../components/HeaderProfile'
import SidebarSeller from '../../components/SidebarSeller'
import Stock from '../../components/Stock'
import {FiBox} from "react-icons/fi"
import {MdTextFields, MdFormatBold, MdFormatItalic} from "react-icons/md"
import {AiOutlineOrderedList, AiOutlineUnorderedList} from "react-icons/ai"


function SellingProduct() {
  return(
      <>
          <Container className='mw-100 main-container'>
              <Row>
                  <HeaderProfile />
                  <SidebarSeller />
                  <Col className="p-5 m-3">
                      <div className="d-flex flex-column search-container p-5">
                          <div className="d-flex flex-column gap-3">
                              <span className="fw-bold fs-4">Inventory</span>                             
                          </div>
                          <hr/> 
                          <div className='d-flex flex-column gap-2'>
                            <span className='text-muted'>Name of goods</span>
                            <Form>
                              <Form.Group className='w-50' controlId="formatBasicName">
                                <Form.Control name="goods" className='text-start' type="text" />
                                <Form.Control.Feedback className="text-start" type="invalid">Name must be at least 8 characters</Form.Control.Feedback>
                              </Form.Group>
                            </Form>
                          </div>                                                                        
                      </div>

                      <div className="d-flex flex-column search-container p-5 mt-5">
                          <div className="d-flex flex-column gap-3">
                              <span className="fw-bold fs-4">Item details</span>                             
                          </div>
                          <hr/> 
                          <div className='d-flex flex-column gap-2'>
                            <span className='text-muted'>Unit price</span>
                            <Form>
                              <Form.Group className='w-50' controlId="formatBasicName">
                                <Form.Control name="goods" className='text-start' type="text" />
                                <Form.Control.Feedback className="text-start" type="invalid">Name must be at least 8 characters</Form.Control.Feedback>
                              </Form.Group>
                            </Form>
                          </div>
                          <div className='d-flex flex-column gap-2 mt-3'>
                            <span className='text-muted'>Stock</span>
                            <Form>
                              <Form.Group className='w-50' controlId="formatBasicName">
                                <Form.Control name="goods" className='text-end text-muted' type="text" placeholder='Buah'/>
                                <Form.Control.Feedback className="text-start" type="invalid">Name must be at least 8 characters</Form.Control.Feedback>
                              </Form.Group>
                            </Form>
                            <div className='d-flex flex-column gap-3 mt-3'>
                              <span className='text-muted'>Stock</span>
                              <div className='d-flex flex-row gap-5'>
                                <Stock />
                              </div>
                            </div>                            
                          </div>                                                                                    
                      </div>

                      <div className="d-flex flex-column search-container p-5 mt-5">

                          <div className="d-flex flex-column gap-3">
                              <span className="fw-bold fs-4">Photo of goods</span>                             
                          </div>
                          <hr/>

                          <div className='photos-product-container p-4 d-flex flex-column gap-3'>
                           <div className='d-flex flex-row gap-3'>
                            <div className='d-flex flex-column gap-2'>                              
                                <div className='photo-box-one'>                             
                                    <FiBox className="text-muted box-photo" size={75} />                              
                                </div> 
                                  <span className='text-muted mx-5'>Foto utama</span>                          
                            </div>
                            
                            <div className='photo-box-two mt-5'>
                              <FiBox className="text-muted box-photo-md" size={45} />
                            </div>
                            <div className='photo-box-two mt-5'>
                              <FiBox className="text-muted box-photo-md" size={45} />
                            </div>
                            <div className='photo-box-two mt-5'>
                              <FiBox className="text-muted box-photo-md" size={45} />
                            </div>
                            <div className='photo-box-two mt-5'>
                              <FiBox className="text-muted box-photo-md" size={45} />
                            </div>

                          </div>
                          <hr/>
                          <Button variant="outline-secondary" className='button-image w-50 mx-auto'>Upload foto</Button>                                                       
                        </div>                                                                                                     
                      </div>
                      
                      <div className="d-flex flex-column search-container p-5 mt-5">
                              <div className="d-flex flex-column gap-3">
                                <span className="fw-bold fs-4">Description</span>                             
                              </div>                             
                              <hr/>
                              <div className='container-product'>                             
                                <div className='sell-head-container'>
                                  <div className='d-flex flex-row px-4 py-4 gap-2'>
                                    <MdTextFields size={20} />
                                    <MdFormatBold size={20} />
                                    <MdFormatItalic size={20} />
                                    <div class="vr"></div>
                                    <AiOutlineOrderedList size={20} />
                                    <AiOutlineUnorderedList size={20} />
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
export default SellingProduct