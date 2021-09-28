import React from 'react'
import { Carousel,Container,Row,Col } from 'react-bootstrap'

const Slider = ({slide}) => {

    const nextIcon = (<button className="carousel-button"><i class="bi bi-chevron-right"></i></button>);   
    
    const prevIcon = (<button className="carousel-button"><i class="bi bi-chevron-left"></i></button>);

    return (
        <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
            {
                slide.map(slide=>{
                    return(
                        <Carousel.Item interval={3000}> 
                          <Container>
                            <Row>
                                <Col>
                                <img
                            className="d-block w-100"
                            src={slide.image}
                            alt="First slide"
                            /></Col>
                            </Row>
                        </Container>     
                    </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default Slider
