import { Container, Row, Col } from "react-bootstrap";
import HeaderProfile from "../../components/HeaderProfile";

function Chat() {
    return (
        <>
            <Container className="mw-100">
                <Row>
                    <HeaderProfile />
                    <Container className="mx-5 gap-3">
                    <Col md={3} className="">
                        <div>


                        </div>
                    </Col>
                    <Col md={9} className="">
                        <div>

                            
                        </div>
                    </Col>
                    </Container>
                </Row>
            </Container>
        </>
    )
}

export default Chat