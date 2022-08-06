import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeaderProfile from '../../components/HeaderProfile'
import Sidebars from '../../components/Sidebars'


function MyOrder() {
  return(
      <>
          <Container className='mw-100 main-container'>
              <Row>
                  <HeaderProfile />
                  <Sidebars />
                  <Col className="p-5 m-3">
                      <div className="d-flex flex-column order-container p-5">
                          <div className="d-flex flex-column gap-3">
                              <span className="fw-bold fs-2">My order</span>
                              <div className='d-flex flex-row gap-5 text-muted'>
                                <span className='table-name'>All items</span>
                                <span>Not paid yet</span>
                                <span>Packed</span>
                                <span>Sent</span>
                                <span>Completed</span>
                                <span>Order cancel</span>
                              </div>                              
                          </div>
                          <hr/>                          
                        </div>                                                             
                  </Col>
              </Row>
          </Container>
      </>
  )
}
export default MyOrder