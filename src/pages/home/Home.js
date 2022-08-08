import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeaderProfile from '../../components/HeaderProfile'
import Trending from '../../components/module/HomeTrending/Slider'
import Category from '../../components/module/Category/index'
import Cards from '../../components/module/Cards'


import './Home.css'

function Home() {
    return(
        <>
            <Container className='mw-100'>
                <Row>
                    <HeaderProfile />
                    <section className="slider d-flex flex-column">
                        <Trending />

                        <div className="carousel-products d-flex flex-row">
                            <div className="category">
                                <h1 className="category-title">Category</h1>
                                <p className="category-text mt-3">
                                    What are you currently looking for?
                                </p>
                            </div>
                            <div className="slider-category d-flex justify-content-center align-items-center">
                                <Category />
                            </div>
                        </div>
                    </section>

                    <section className="display-products d-flex flex-column ">
                        <div className="new-products">
                            <div className="new">
                                <h1 className="new-title">New</h1>
                                <p className="new-text mt-3">You've never seen it before!</p>
                            </div>

                            {/* <section className="card-wrapper">
                                {/* cards component */}
                                    {/* {products.map((product, index) => (
                                        <Cards
                                            productName={product.Name}
                                            productPrice={product.price}
                                            storeName={product.namestore}
                                            productPhoto={product.photo1}
                                            onClick={() => navigate(`/main/page-product/${product.id}`)}
                                        /> */}
                                    {/* ))} */}
                            {/* </section> */} 
                        </div>

                        <div className="popular-products">
                            <div className="popular">
                                <h1 className="popular-title">Popular</h1>
                                <p className="popular-text mt-3">
                                    Find clothes that are trending recently
                                </p>
                            </div>
                            {/* <section className="card-wrapper">
                                {/* cards component */}
                                {/* {products.map((product, index) => (
                                <Cards
                                    productName={product.Name}
                                    productPrice={product.price}
                                    storeName={product.namestore}
                                    productPhoto={product.photo3}
                                    onClick={() => navigate(`/main/page-product/${products.id}`)}
                                />
                                ))} */}
                            {/* </section> */} 
                        </div>
                    </section>
                </Row>
            </Container>
        </>
    )
}
export default Home 