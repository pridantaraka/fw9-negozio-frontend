import jas from '../assets/images/jas.png'
import React from 'react';
import '../assets/css/Category.css'
import { AiTwotoneStar } from 'react-icons/ai'
import {Link} from "react-router-dom"
import { Col } from 'react-bootstrap';

function CategoryParts() {
  return (
    <Col sm={6} md={4} lg={2} className='gx-5 gx-md-5 gx-lg-3 mb-4 mb-lg-0'>
      <Link to="/productdetail">
      <div className='data-pd pb-4'>
          <div className='w-100'>
            <img src={jas} alt='jas' className='img-fluid w-100' />
          </div>
          <div className='ps-3 pt-2'>
              <h5>Men's formal suit - <br /> Black & White</h5>
              <span>$ 40.0</span> <br />
              <div className='mb-2'>Zalora Cloth</div>
              <div><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /> (10)</div>
          </div>
      </div>
      </Link>
    </Col>
    
  )
}

export default CategoryParts


