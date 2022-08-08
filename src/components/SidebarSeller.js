import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Button } from "react-bootstrap";
import { FiEdit2, FiBox, FiShoppingCart, FiHome, FiLogOut } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
import { getUsers } from '../redux/asyncAction/users';
import { logout } from '../redux/reducers/auth';


function SidebarSeller() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const users = useSelector((state) => state.users.result);

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  
React.useEffect(() => {
    dispatch(getUsers(token));
  }, [dispatch, token]);
  return (
  <>
  <Col className="col-md-3 d-flex flex-column sidebar-wrap side-height h-100">
            <div className="d-flex flex-column">
                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3">
                        <img src={`http://${users.profile_picture}`} alt="profile-sidebar" className="img-fluid sidebar-prof"></img>
                        <div className="d-flex flex-column">
                          <span className="py-2 fw-bold">{users.full_name}</span>
                            <div className="d-flex flex-row gap-2">
                              <FiEdit2 size={18} className="pencil"/>
                              <span className="text-muted">Edit Profile</span>
                            </div>
                        </div>
                    </div>
                  </Link>
            </div>

            {/* <div className="side-child-wrap my-5">
                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap text-center">
                          <FiHome size={18} className="icon-sidebar" />                          
                      </div>
                        <Link to="/profileseller" className='text-decoration-none text-muted'>
                          <span>Store profile</span>
                        </Link>
                      </div>                    
                  </Link>

                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap-one text-center">
                        <FiBox size={18} className="icon-sidebar" />
                      </div>
                      <div className='d-flex flex-column gap-2'>
                          <span className='fw-bold'>Product</span>
                          <Link to="/myproduct" className='text-decoration-none text-muted'>
                            <span>My products</span>
                          </Link>
                          <Link to="/sellingproduct" className='text-decoration-none text-muted'>
                            <span>Selling products</span>
                          </Link> 
                       </div>
                    </div>
                  </Link>

                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap-two text-center">
                        <FiShoppingCart size={18} className="icon-sidebar" />
                      </div>
                      <div className='d-flex flex-column gap-2'>
                          <span className='fw-bold'>Order</span>
                          <Link to="/myorderseller" className='text-decoration-none text-muted'>
                            <span>My order</span>
                          </Link>
                          <Link to="/ordercancel" className='text-decoration-none text-muted'>
                            <span>Order cancel</span>
                          </Link>
                        </div>
                    </div>
                  </Link>
            </div> */}

<Accordion className='mt-md-5'>
      <Accordion.Item eventKey="0" style={{border: "unset"}}>
        <Accordion.Header><FiHome style={{marginRight: "1vw", backgroundColor: "#456BF3", borderRadius: "2vw", width: "2vw",
    height: "2vw", padding: "5px", color: "#FFFFFF"}}/>   Store</Accordion.Header>
        <Link to="/">
          <Accordion.Body className='ms-md-5'>Store profile</Accordion.Body>
        </Link>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{border: "unset"}}>
        <Accordion.Header><FiBox style={{marginRight: "1vw", backgroundColor: "#F36F45", borderRadius: "2vw", width: "2vw",
    height: "2vw", padding: "5px", color: "#FFFFFF"}}/>Product</Accordion.Header>
        <Link to="/">
          <Accordion.Body className='ms-md-5'>My products</Accordion.Body>
        </Link>
        <Link to="/">
          <Accordion.Body className='ms-md-5'>Selling products</Accordion.Body>
        </Link>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{border: "unset"}}>
        <Accordion.Header><FiShoppingCart style={{marginRight: "1vw", backgroundColor: "#F3456F", borderRadius: "2vw", width: "2vw",
    height: "2vw", padding: "5px", color: "#FFFFFF"}}/>Order</Accordion.Header>
        <Link to="/">
          <Accordion.Body className='ms-md-5'>My order</Accordion.Body>
        </Link>
        <Link to="/">
          <Accordion.Body className='ms-md-5'>Order cancel</Accordion.Body>
        </Link>
      </Accordion.Item>
    </Accordion>
      <Button 
        className="text-decoration-none text-muted ps-0 pt-0"
        variant="grey"
        onClick={onLogout}>
        <div className="d-flex flex-row gap-3 mt-3">
            <div className="icon-wrap-two text-center">
              <FiLogOut size={18} className="icon-sidebar" />
            </div>
            <span>Logout</span>
          </div>
        </Button>
      </div>
    </Col>
    </>   
  );
}

export default SidebarSeller