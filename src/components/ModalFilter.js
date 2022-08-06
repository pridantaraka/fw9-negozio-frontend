import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropDownList from './DropDownList';

export default function ModalFilter(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='box-filter-header'>
        <Modal.Title id="contained-modal-title-vcenter" >
         Filter
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-height'>
        <div className='d-flex flex-wrap flex-column'>
        <div className='my-3'>
          <h5>Colors</h5>
          <div className='d-flex flex-rows gap-4 py-3'>
              <div className='choose-color1 rounded-circle p-4 btn'></div>
              <div className='choose-color2 rounded-circle p-4 btn'></div>
              <div className='choose-color3 rounded-circle p-4 btn'></div>
              <div className='choose-color4 rounded-circle p-4 btn'></div>
              <div className='choose-color5 rounded-circle p-4 btn'></div>
              <div className='choose-color6 rounded-circle p-4 btn'></div>
          </div>
        </div>
        <div className='my-2'>
        <h5>Sizes</h5>
          <div className='d-flex flex-rows gap-4 py-3 flex-wrap'>
            <div>
            <button className='btn btn-sm box-modal-size'>
              XS
            </button>
            </div>
            <div>
            <button className='btn btn-sm box-modal-size'>
              S
            </button>
            </div>
            <div>
            <button className='btn btn-sm box-modal-size'>
              M
            </button>
            </div>
            <div>
            <button className='btn btn-sm box-modal-size'>
              L
            </button>
            </div>
            <div>
            <button className='btn btn-sm box-modal-size'>
              XL
            </button>
            </div>
          </div>
        </div>
        <div className='my-3'>
          <h5>Category</h5>
          <div className='d-flex flex-row gap-3 py-3 flex-wrap'>
              <div>
                <button className='btn btn-md box-modal-category'>All</button>
              </div>
              <div>
                <button className='btn btn-md box-modal-category'>Women</button>
              </div>
              <div>
                <button className='btn btn-md box-modal-category'>Men</button>
              </div>
              <div>
                <button className='btn btn-md box-modal-category'>Boys</button>
              </div>
              <div>
                <button className='btn btn-md box-modal-category'>Girls</button>
              </div>
          </div>
        </div>
        <div>
          <h5>Brand</h5>
          <div>
            <DropDownList />
          </div>
        </div>
        
        </div>
      </Modal.Body>
      <Modal.Footer className='box-filter-footer d-flex justify-content-center'>
        <Button onClick={props.onHide} className='modal-filter-btn'>Discard</Button>
        <Button onClick={props.onHide} className='modal-filter-btn'>Apply</Button>
      </Modal.Footer>
    </Modal>
  );
}