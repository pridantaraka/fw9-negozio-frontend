import jas from '../assets/images/jas.png'
import React from 'react';
import '../assets/css/Category.css'
import { AiTwotoneStar } from 'react-icons/ai'

function CategoryParts() {
  return (
    <div className='data-pd pb-4'>
        <img src={jas} alt='jas' />
        <div className='ps-3 pt-2'>
            <h5>Men's formal suit - <br /> Black & White</h5>
            <span>$ 40.0</span> <br />
            <div className='mb-2'>Zalora Cloth</div>
            <div><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /> (10)</div>
        </div>
    </div>
  )
}

export default CategoryParts


