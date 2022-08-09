import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../redux/reducers/auth';
import { getUsers } from '../redux/asyncAction/users';
import React from 'react';

export default function DropDownProfile() {
const profile = useSelector((state) =>state.users.result)
const token = useSelector((state) => state.auth.token);
const dispatch = useDispatch();
const navigate = useNavigate();


  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  
React.useEffect(() => {
    dispatch(getUsers(token));
  }, [dispatch, token]);
    return(
        <>
        <DropdownButton
            CgProfile size='24'
            title="Profile"
            variant='grey'
            className="my-2"

            >
                {/* <CgProfile size={24} /> */}
            <Dropdown.Item>
                <div className='info-user-text d-flex flex-row gap-2'>
                    <div>
                    <span><img src={`http://${profile?.profile_picture}`} alt="profile-sidebar" className="img-fluid sidebar-prof"></img></span>
                    </div>
                    <div className='d-flex flex-column justify-content-around'>
                    <span>Name : {profile?.full_name}</span>
                    <span>Email : {profile?.email}</span>
                    <span>Phone : {profile?.phone_number}</span>
                    <span>Gender : {profile?.gender}</span>
                    </div>
                </div>
            </Dropdown.Item>
            <Dropdown.Item className='pt-3'>
                <Link to='/profile'>
                    Profile
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Button 
                  className="text-decoration-none text-muted ps-0 pt-0"
                  variant="grey"
                  onClick={onLogout}>
                   <div className="d-flex flex-row gap-3 mt-3">
                      <span>Logout</span>
                    </div>
                  </Button>
            </Dropdown.Item>
        </DropdownButton>
        </>
    )
}
