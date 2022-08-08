import { Container } from "react-bootstrap";
import HeaderProfile from "../../components/HeaderProfile";

function Chat() {
    return (
        <>
            <Container className="mw-100">
                <HeaderProfile />
                <div className="d-flex flex-row mt-md-5 justify-content-center">
                    <div className="d-flex flex-column me-md-5" style={{background: "#FFFFFF", border: "3px solid #8E8E93", width: "15vw", fontWeight: "600"}}>
                        <span className="ms-md-3 mt-md-3">Chat</span> <hr style={{opacity: "1"}}/>
                        <span className="ms-md-3 mt-md-2 text-center" style={{paddingTop: "9vw", paddingBottom: "11vw"}}>Belum ada chat</span>
                    </div>
                    <div className="d-flex flex-column" style={{background: "#FFFFFF", border: "3px solid #8E8E93", width: "45vw", fontWeight: "600"}}>
                        <span className="ms-md-3 mt-md-3">Account Name</span> <hr style={{opacity: "1"}} />
                        <span></span>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Chat