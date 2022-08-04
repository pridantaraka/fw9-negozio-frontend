import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeaderHome from '../../components/HeaderHome'

function Home() {
    return(
        <>
            <Container className='mw-100'>
                <Row>
                    <HeaderHome />
                    <Col>
                        <div>Hello</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home 