import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';

export default function DropDownProfile() {
    return(
        <>
        <DropdownButton
            title="test"
            className="my-2"
            >
            <Dropdown.Item href="#/action-1">Nike</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Puma</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Adidas</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Jack & Jones</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Js.Oliver</Dropdown.Item>
        </DropdownButton>
        </>
    )
}
