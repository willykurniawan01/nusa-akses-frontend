import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/images/nusa-akses.png";


const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <div className="footer-brand">
                            <img className="footer-brand-logo" src={logo} />
                            <span className="footer-brand-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, blanditiis?
                            </span>
                        </div>
                    </Col> 
                    <Col xs={6} md={3}>
                        <div className="footer-nav">
                            <p className="footer-nav-header">Bantuan</p>
                            <a href="#" className="footer-nav-link">Pusat Bantuan</a>
                            <a href="#" className="footer-nav-link">Hubungi Kami</a>
                            <a href="#" className="footer-nav-link">Kendala</a>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="footer-nav">
                            <p className="footer-nav-header">Layanan</p>
                            <a href="#" className="footer-nav-link">Internet</a>
                            <a href="#" className="footer-nav-link">Wifi</a>
                            <a href="#" className="footer-nav-link">Cloud</a>
                            <a href="#" className="footer-nav-link">Security</a>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="footer-nav">
                            <p className="footer-nav-header">Perusahaan</p>
                            <a href="#" className="footer-nav-link">Profil Perusahaan</a>
                            <a href="#" className="footer-nav-link">Sejarah Perusahaan</a>
                            <a href="#" className="footer-nav-link">Karir</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <div className="footer-socialmedia">
                            <p className="footer-socialmedia-header">Tetap terhubung dengan kami</p>
                            <div className="footer-socialmedia-nav">
                                <a href="" className="footer-socialmedia-nav-link"><i class="bi bi-instagram"></i></a>
                                <a href="" className="footer-socialmedia-nav-link"><i class="bi bi-facebook"></i></a>
                                <a href="" className="footer-socialmedia-nav-link"><i class="bi bi-twitter"></i></a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                   
                </Row>
            </Container>
            <div className="footer-copyright">
                <Container>
                <p className="footer-copyright-text">
                    © PT Daya Akses Nusantara, 2021.
                </p>
                </Container>
            </div>
        </div>
    )
}

export default Footer
