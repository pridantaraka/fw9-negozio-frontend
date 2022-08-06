import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';

export default function DropDownList() {
    return(
        <>
        <DropdownButton
            id="dropdown-button-dark-example2"
            variant=""
            menuVariant=""
            title="adidas Originals, Jack & Jones, s.Oliver"
            className="mt-2"
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
