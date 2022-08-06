import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeaderProfile from '../../components/HeaderProfile'
import ModalAddress from '../../components/ModalAddress'
import Sidebars from '../../components/Sidebars'


function ShippingAddress() {
  return(
      <>
          <Container className='mw-100 main-container'>
              <Row>
                  <HeaderProfile />
                  <Sidebars />
                  <Col className="p-5 m-3">
                      <div className="d-flex flex-column profile-container p-5">
                          <div className="d-flex flex-column gap-2">
                              <span className="fw-bold fs-2">Choose another address</span>
                              <span className="text-muted">Manage your shipping address</span>
                              <hr/>
                          </div>

                          <ModalAddress />

                          <div className='p-5 m-3 address'>
                            <div className='d-flex flex-column gap-2'>
                              <span>Andreas Jane</span>
                              <span>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</span>
                              <span className='fw-bold fs-5 mt-3'>Change address</span>
                            </div>                           
                          </div>
                        </div>                                                             
                  </Col>
              </Row>
          </Container>
      </>
  )
}
export default ShippingAddress 