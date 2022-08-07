import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeaderProfile from '../../components/HeaderProfile'
import SideBar from '../../components/SideBar'
import '../../assets/css/style.css'

function Profile() {
    return(
        <>
            <Container className='mw-100'>
                <Row>
                    <HeaderProfile />
                    <SideBar />
                    <Col>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Profile 