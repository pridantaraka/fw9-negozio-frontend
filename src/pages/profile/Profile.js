import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeaderProfile from '../../components/HeaderProfile'

function Profile() {
    return(
        <>
            <Container className='mw-100'>
                <Row>
                    <HeaderProfile />
                    <Col>
                        <div>Hello</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Profile 