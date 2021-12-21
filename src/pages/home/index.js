import React, { useState, useEffect } from "react";
import { Header, Slider, Footer } from "../../components";
import banner from "../../assets/images/banner.png";
import { Container, Row, Col } from "react-bootstrap";
import setting from "../../settings";
import { Preloader } from "../../pages";
import styles from "./index.module.css";

const Home = () => {
  const [slide, setSlide] = useState([]);
  const [services, setServices] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
    loadSliders();
    loadServices();
  }, []);

  const loadSliders = async () => {
    setLoading(true);
    try {
      let response = await fetch(setting.slidersUrl);
      let data = await response.json();
      setSlide(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadServices = async () => {
    setLoading(true);
    try {
      let response = await fetch(setting.servicesUrl);
      let data = await response.json();

      setServices(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (preloader) {
    return <Preloader />;
  } else {
    return (
      <div>
        <Header />
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
                  {services.map(function (data, index) {
                    return (
                      <div>
                        <a href="#" className="layanan-button">
                          <img
                            width="80"
                            height="80"
                            src={data.picture}
                            alt=""
                          />
                          <span>{data.name}</span>
                        </a>
                      </div>
                    );
                  })}

                  {/* <a href="#" className="layanan-button">
                    <i class="bi bi-wifi"></i>
                    <span>Wifi</span>
                  </a>
                  <div className="layanan-divider"></div>
                  <a href="#" className="layanan-button">
                    <i class="bi bi-cloud"></i>
                    <span>Cloud</span>
                  </a>
                  <div className="layanan-divider"></div>
                  <a href="#" className="layanan-button">
                    <i class="bi bi-shield-lock"></i>
                    <span>Security</span>
                  </a> */}
                </div>
              </Col>
            </Row>

            <Row className={styles.berita}>
              <Col></Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Home;
