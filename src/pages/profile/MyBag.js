import React from 'react';
import HeaderProfile from '../../components/HeaderProfile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AmountItem from '../../components/AmountItem';

import pic from '../../assets/images/gez-xavier-mansfield-unsplash 2.png';

const Card = () => {
  return (
    <div>
      <div className="card-bag d-flex flex-column flex-lg-row justify-content-between">
        <div className="d-flex  align-items-center gap-3">
          <input type="checkbox" />
          <img src={pic} alt="product" />
          <div>
            <p className="fw-bold">Men's formal suit - Black</p>
            <p>Zalora Cloth</p>
          </div>
        </div>

        <div className="d-flex  align-items-center justify-content-between gap-3 mt-5 mt-lg-0">
          {/* <div className="d-flex gap-2 align-items-center"> */}
            {/* <button className="bg-secondary rounded-circle fw-bold text-light">-</button>
            <p>1</p>
            <button className="border rounded-circle text-bold text-dark">+</button> */}
            {/* Amount Item */}
            <AmountItem />
            {/* Amount Item */}
          {/* </div> */}
          {/* <p className="fw-bold">Rp.20.000</p> */}
        </div>
      </div>
    </div>
  );
};

export default function MyBag() {
  return (
    <div>
      <HeaderProfile />

      <main className="my-3 main-page-bag">
        <Row>
          <Col>
            <h1 className="bag-head">Negozio</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={7} className="d-flex flex-column gap-3">
            <div className="card-bag d-flex justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <input type="checkbox" />
                <p className="fw-bold">
                  Select all items <span className="text-secondary fw-normal">(2 items selected)</span>{' '}
                </p>
              </div>
              <button className="fw-bold">delete</button>
            </div>

            <Card />

            <Card />
          </Col>
          <Col lg={5} className="mt-5 mt-lg-0">
            <div className="card-submit-bag">
              <p className="fw-bold">Shopping summary</p>
              <div className="d-flex justify-content-between">
                <p>Total price</p>
                <p className="fw-bold">Rp.20.000</p>
              </div>
              <div className="d-grid">
                <Button size="md" className="submit-btn">
                  Buy
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}
