import React from 'react'
import { Link } from 'react-router-dom';
import { AiTwotoneStar } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
// import CategoryParts from '../../components/CategoryParts';
import DataProductDetail from '../../components/DataProductDetail';
import Container from 'react-bootstrap/Container';
import '../../assets/css/ProductsDetail.css';
import { AmountItem } from '../../components/AmountItem';

import main from '../../assets/images/Mask Group Main.png'
import mg from '../../assets/images/Mask Group.png'
import mg1 from '../../assets/images/Mask Group 1.png'
import mg2 from '../../assets/images/Mask Group 2.png'
import mg3 from '../../assets/images/Mask Group 3.png'
import mg4 from '../../assets/images/Mask Group 4.png'
import elipse5 from '../../assets/images/Ellipse 5.png'
import elipse6 from '../../assets/images/Ellipse 6.png'
import elipse7 from '../../assets/images/Ellipse 7.png'
import elipse8 from '../../assets/images/Ellipse 8.png'
import line48 from '../../assets/images/Line 48.png'
import { Row } from 'react-bootstrap';
import HeaderHome from '../../components/HeaderHome';

function ProductDetail() {

  return (
    <Container className='mw-100'>
      <Row>
      <HeaderHome/>
      <nav Style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol className="breadcrumb mt-4">
          <li className="breadcrumb-item active" aria-current="page"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to="/Category">Category</Link></li>
          <li className="breadcrumb-item active" aria-current="page">T-Shirt</li>
        </ol>
      </nav>
      <main className='d-flex'>
          <div>
            <div className='main-img'>
              <img src={main} alt='Mask group'/>
            </div>
            <div className='d-flex gap-3 mt-3'>
              <img src={mg} alt='Mask group' />
              <img src={mg1} alt='Mask group' />
              <img src={mg2} alt='Mask group' />
              <img src={mg3} alt='Mask group' />
              <img src={mg4} alt='Mask group' />
            </div>
          </div>

          <div className='right-main'>
            <div>
              <span className='baju'>Baju muslim pria</span><br/>
              <div className='mb-3 mt-2'>Zalora Cloth</div>
              <div className='mb-5'><AiTwotoneStar className='star'/><AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' /><AiTwotoneStar className='star' /> (10)</div>
            </div>
            <div>
              <div className='price'>Price</div>
              <div className='dollar-pd20 mt-2 mb-5'>$ 20.0</div>
            </div>
            <div>
              <span className='color'>Color</span>
              <div className='d-flex gap-2 mt-2 mb-5'>
                <img src={elipse5} alt='elipse' />
                <img src={elipse6} alt='elipse' />
                <img src={elipse7} alt='elipse' />
                <img src={elipse8} alt='elipse' />
              </div>
            </div>
            <div className='size-jumlah d-flex gap-5'>
              <div>
                <span className='size mb-3 ms-1'>Size</span>
                <div className='d-flex d-wrap flex-column gap-2'>
                <div className='d-flex d-wrap flex-row gap-1'>
                  {/* <span><AiOutlineMinusCircle /></span> */}
                  {/* <Button variant="outline-dark" className='btn-minus'>-</Button>
                  <span className='mx-2 counter-poin'>28</span>
                  <Button variant="outline-dark">+</Button> */}
                  <Button className='btn btn-sm rounded-circle size-button-detail'>XS</Button>
                  <Button className='btn btn-sm rounded-circle size-button-detail'>S</Button>
                  <Button className='btn btn-sm rounded-circle size-button-detail'>M</Button>

                  {/* <span><AiOutlinePlusCircle /></span> */}
                </div>
                <div className='d-flex d-wrap flex-row gap-1'>
                  <Button className='btn btn-sm rounded-circle size-button-detail'>L</Button>
                  <Button className='btn btn-sm rounded-circle size-button-detail'>XL</Button>
                </div>
                </div>
              </div>
              <div>
                <span className='jumlah mb-3 ms-1'>Jumlah</span>
                <div>
                  {/* <span><AiOutlineMinusCircle /></span> */}
                  {/* <Button variant="outline-dark" className='btn-minus'>-</Button>
                  <span className='mx-2 counter-poin'>1</span>
                  <Button variant="outline-dark">+</Button> */}
                  <AmountItem />
                  {/* <span><AiOutlinePlusCircle /></span> */}
                </div>
              </div>
            </div>
            <div className='pd-button d-flex gap-3 mt-3'>
              <Link to='/chat'>
                <Button variant="outline-dark" className='chat-bag'>Chat</Button>
              </Link>
              <Link to='/mybag'>
                <Button variant="outline-dark" className='chat-bag'>Add bag</Button>
              </Link>
              <Link to='/checkout'>
                <Button className='buy-now'>Buy Now</Button> 
              </Link>
            </div>
          </div>
      </main>

      <div className='description-pd mt-5'>
        <div>Informasi Produk</div>
        <div className='mb-4 mt-4'>
          <span className='condition'>Condition</span> <br/>  
          <span className='new'>New</span>
        </div>
      </div>
      <div>
        <span className='desc-tittle'>Description</span>
        <p className='desc-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /><br />

          Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum <br /> primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum.<br /> 
          Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.<br /><br />

          Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum <br /> primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.<br /><br />

          In ultricies rutrum tempus. Mauris vel molestie orci.
        </p>
      </div>

      <div className='d-flex flex-row'>
        <div>
          <h5 classNanme='review-p'>Product review</h5>
          <div>
            <div>
              <h2 className='rating-pd'>5.0 <span className='per10'>/10</span></h2>
                <div><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /><AiTwotoneStar className='star2' /></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className='d-flex flex-row ms-5'>
          <div className='d-flex flex-column'>
            <span><AiTwotoneStar className='star' /> 5</span>
            <span><AiTwotoneStar className='star' /> 4</span>
            <span><AiTwotoneStar className='star' /> 3</span>
            <span><AiTwotoneStar className='star' /> 2</span>
            <span><AiTwotoneStar className='star' /> 1</span>
          </div>
          <div className='me-3 ms-3'>
            <img src={line48} alt="Line"/>
          </div>
          <div className='d-flex flex-column'>
            <span>4</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
          </div>
        </div>
      </div> <hr className='mt-5 mb-5'/>
      <div>
        <h2 className='like-this'>You can also like this</h2>
        <small className='never-seen'>You`ve never seen it before!</small>
      </div>
      <div className='d-flex flex-row gap-4 mb-5 mt-4'>
        <DataProductDetail />
        <DataProductDetail />
        <DataProductDetail />
        <DataProductDetail />
        <DataProductDetail />
      </div>
      <div className='d-flex flex-row gap-4'>
        <DataProductDetail />
        <DataProductDetail />
        <DataProductDetail />
        <DataProductDetail />
        <DataProductDetail />
      </div>
      </Row>
    </Container>
  )
}

export default ProductDetail