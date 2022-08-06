import React from 'react'
import {Container, Row} from 'react-bootstrap'
import HeaderHome from '../../components/HeaderHome'
import Sidebars from '../../components/Sidebars'

function Home() {
    return(
        <>
            <Container className='mw-100'>
                <Row>
                    <HeaderHome />
                    <Col md={6} className='d-flex flex-warp'>
                        <div>Hello</div>
                        <button>
                            aall name
                        </button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home 