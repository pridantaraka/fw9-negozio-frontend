import React from "react";
import { Button, Col } from "react-bootstrap";
import { FiUser, FiEdit2, FiMapPin, FiClipboard } from "react-icons/fi"
import {Link, useNavigate} from "react-router-dom"
// import profSide from "../assets/images/sidebar.png" 
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../redux/reducers/auth";
import { getUsers } from '../redux/asyncAction/users'
// import profSide from "../assets/images/sidebar.png" 


function Sidebars() {
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
console.log(users);
// const onLogout = () => {
//         localStorage.removeItem("auth");
//         navigate("/login");
//     };
  return (
    <>
    <Col className="col-md-3 d-flex flex-column sidebar-wrap side-height h-100">
            <div className="d-flex flex-column">
                  <Link to="" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3">
                      <div className="img-fluid">
                        <img src={`http://${users.profile_picture}`} alt="profile-sidebar" className="img-fluid sidebar-prof"></img>
                        </div>
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

            <div className="side-child-wrap my-5">
                  <Link to="/profile" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap text-center">
                        <FiUser size={18} className="icon-sidebar" />
                      </div>
                      <span>My Account</span>
                    </div>
                  </Link>

                  <Link to="/shippingaddress" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap-one text-center">
                        <FiMapPin size={18} className="icon-sidebar" />
                      </div>
                      <span>Shipping Address</span>
                    </div>
                  </Link>

                  <Link to="/myorder" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 mt-3">
                      <div className="icon-wrap-two text-center">
                        <FiClipboard size={18} className="icon-sidebar" />
                      </div>
                      <span>My Order</span>
                    </div>
                  </Link>

                  <Button onClick={onLogout}>
                    Logout
                  </Button>

            </div>
          </Col>
    </>
  )
}

export default Sidebars