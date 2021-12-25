import React, { useState, useEffect } from "react";
import { Header, Slider, Footer } from "../../components";
import banner from "../../assets/images/banner.png";
import { Container, Row, Col } from "react-bootstrap";
import setting from "../../settings";
import { Preloader } from "../../pages";
import styles from "./index.module.css";
import pic1 from "../../assets/images/pic1.png";
import partner from "../../assets/images/partner.png";

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
                </div>
              </Col>
            </Row>

            <div className="row mt-5">
              <div className="col-12 col-sm-5">
                <img src={pic1} className="img-fluid" alt="" />
              </div>
              <div className="col-12 col-sm-7">
                <div className="row">
                  <h4 className={styles.subTitle}>lorem ipsum</h4>
                </div>
                <div className="row">
                  <h4 className={styles.title}>
                    Lorem ipsum dolor sit amet consectetur.
                  </h4>
                </div>
                <div className="row">
                  <p className={styles.content}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur doloremque, autem placeat ducimus ullam aut.
                    Deserunt ab doloribus vitae, eveniet corrupti saepe facere,
                    excepturi nam modi corporis obcaecati sapiente voluptas
                    iusto, aspernatur labore esse recusandae nihil
                    reprehenderit? Iusto minima dolorem quaerat voluptas ad. Ea
                    totam, optio officiis ex cum aspernatur!
                  </p>
                  <button className="btn btn-custom-primary w-50">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-sm-7">
                <div className="row">
                  <h4 className={styles.subTitle}>lorem ipsum</h4>
                </div>
                <div className="row">
                  <h4 className={styles.title}>
                    Lorem ipsum dolor sit amet consectetur.
                  </h4>
                </div>
                <div className="row">
                  <p className={styles.content}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur doloremque, autem placeat ducimus ullam aut.
                    Deserunt ab doloribus vitae, eveniet corrupti saepe facere,
                    excepturi nam modi corporis obcaecati sapiente voluptas
                    iusto, aspernatur labore esse recusandae nihil
                    reprehenderit? Iusto minima dolorem quaerat voluptas ad. Ea
                    totam, optio officiis ex cum aspernatur!
                  </p>
                  <button className="btn btn-custom-primary w-50">
                    Selengkapnya
                  </button>
                </div>
              </div>
              <div className="col-12 col-sm-5">
                <img src={pic1} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="row">
              
            </div>

            <div className="row justify-content-center mt-5  mb-5">
              <div className="col-4 mt-5">
                <h4 className={`${styles.title} text-center`}>
                  Bussiness Partner
                </h4>
                <img className="img-fluid mt-5" src={partner} />
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Home;
