import jas from '../assets/images/jas.png'
import React from 'react';
import '../assets/css/ProductsDetail.css'
import { Link } from 'react-router-dom';

function DataProductDetail() {
  return (
    <Link to="/productdetail">
    <div className='data-pd pb-4'>
        <img src={jas} alt='jas' />
        <div className='ps-3 pt-2'>
            <h5>Men's formal suit - <br /> Black & White</h5>
            <span>$ 40.0</span> <br />
            <small>Zalora Cloth</small>
        </div>
    </div>
    </Link>
  )
}

export default DataProductDetail


