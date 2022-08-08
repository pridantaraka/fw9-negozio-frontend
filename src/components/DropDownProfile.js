import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';

export default function DropDownProfile() {
    const profile = useSelector((state) =>state.users.result)
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
                    <span><img src={`http://${profile.profile_picture}`} alt="profile-sidebar" className="img-fluid sidebar-prof"></img></span>
                    </div>
                    <div className='d-flex flex-column justify-content-around'>
                    <span>Name : {profile.full_name}</span>
                    <span>Email : {profile.email}</span>
                    <span>Phone : {profile.phone_number}</span>
                    <span>Gender : {profile.gender}</span>
                    </div>
                </div>
            </Dropdown.Item>
        </DropdownButton>
        </>
    )
}
