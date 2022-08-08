import React from 'react'

import {Container, Row} from 'react-bootstrap'
import HeaderHome from '../../components/HeaderHome'
import HeaderProfile from '../../components/HeaderProfile'
import Trending from '../../components/module/HomeTrending/Slider'
import Category from '../../components/module/Category/index'
// import Cards from '../../components/module/Cards'
import CategoryParts from '../../components/CategoryParts'

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

                    <section className="display-products d-flex flex-column">
                        <div className="new-products">
                            <div className="new mt-md-5">
                                <div className="new-title">New</div>
                                <p className="new-text mt-md-2">You've never seen it before!</p>
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
                            <div className='d-flex flex-row gap-4 mb-md-5 justify-content-center'>
                                <CategoryParts />
                                <CategoryParts />
                                <CategoryParts />
                                <CategoryParts />
                                <CategoryParts />
                            </div>
                        </div>

                        <div className="popular-products">
                            <div className="popular">
                                <h1 className="popular-title">Popular</h1>
                                <p className="popular-text mt-3">
                                    Find clothes that are trending recently
                                </p>
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
                            <div className='d-flex flex-row gap-4 mb-md-5 justify-content-center'>
                                <CategoryParts />
                                <CategoryParts />
                                <CategoryParts />
                                <CategoryParts />
                                <CategoryParts />
                            </div>
                        </div>
                    </section>
                </Row>
            </Container>
        </>
    )
}
export default Home 