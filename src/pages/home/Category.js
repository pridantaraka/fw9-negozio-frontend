import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CategoryParts from '../../components/CategoryParts'
import HeaderProfile from '../../components/HeaderProfile'

function Category () {
  return (
    <Container className='mw-100'>
      <Row>
      <HeaderProfile />
        <nav Style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol className="breadcrumb mt-4">
            <li className="breadcrumb-item active" aria-current="page"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to="/Category">Category</Link></li>
            <li className="breadcrumb-item active" aria-current="page">T-Shirt</li>
          </ol>
        </nav>

        <div>
          <h2 className='tshirt'>T-Shirt</h2>
        </div>
        <div className='d-flex flex-row gap-4 mb-md-5 mt-md-4 justify-content-center'>
          <CategoryParts />
          <CategoryParts />
          <CategoryParts />
          <CategoryParts />
          <CategoryParts />
        </div>
        <div className='d-flex flex-row gap-4 mb-md-5 justify-content-center'>
          <CategoryParts />
          <CategoryParts />
          <CategoryParts />
          <CategoryParts />
          <CategoryParts />
        </div>
      </Row>
    </Container>
  )
}

export default Category