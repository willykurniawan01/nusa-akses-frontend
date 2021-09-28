import React,{useState} from 'react'
import {Header,Slider,Footer} from "../../components"
import banner from "../../assets/images/banner.png"
import {Container,Row,Col} from 'react-bootstrap'



const Home = () => {

const [slide, setSlide] = useState([
    {
        image:banner
    } 
    ,{
        image:banner
    } 
    ,{
        image:banner
    }
])
    return (
        <div>
            <Header/>
            <Slider slide={slide} />
            <div className="layanan mt-5">
             <Container>
                 <Row>
                     <Col className="text-center">
                        <span className="layanan-title">Layanan yang tersedia.</span>
                     </Col>
                 </Row>
                 <Row className="mt-5">
                     <Col>
                        <div className="layanan-items">
                            <a href="#" className="layanan-button"><i class="bi bi-globe"></i>
                            <span>
                               Internet
                            </span>
                            </a>   
                            <div className="layanan-divider">
                            </div>
                            <a href="#" className="layanan-button"><i class="bi bi-wifi"></i>
                            <span>
                               Wifi
                            </span>
                            </a>  
                            <div className="layanan-divider">
                            </div>
                            <a href="#" className="layanan-button"><i class="bi bi-cloud"></i>
                            <span>
                               Cloud
                            </span>
                            </a>
                            <div className="layanan-divider">
                            </div>
                            <a href="#" className="layanan-button"><i class="bi bi-shield-lock"></i>
                            <span>
                               Security
                            </span>
                            </a>  
                        
                        </div>
                     </Col>
                 </Row>
             </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
