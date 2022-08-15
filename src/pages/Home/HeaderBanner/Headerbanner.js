import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import img1 from '../../../images/yzf-r15-v360a4a5958c528.webp';
import img2 from '../../../images/yamaha-yzf-r15-right-side-view0.jpeg';
import img3 from '../../../images/right-front-three-quarter-11.jpeg';

const Headerbanner = () => {
    return (
        <div className='my-5'>
            <Container>

                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ height: "500px" }}
                            className="d-block w-100"
                            src='https://www.wamatechnology.com/wp-content/uploads/2018/06/Tips-Tricks-for-a-better-eCommerce-website-banner-image.jpg'
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "500px" }}
                            className="d-block w-100"
                            src='https://www.tricasol.com/wp-content/uploads/2019/09/e-commerce-banner-1024x341.jpg'
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "500px" }}
                            className="d-block w-100"
                            src='https://img.freepik.com/free-psd/banner-template-online-shopping_23-2148559048.jpg?w=2000'
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Headerbanner;