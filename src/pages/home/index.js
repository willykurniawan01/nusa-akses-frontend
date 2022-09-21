import React, { useState, useEffect } from "react";
import { Header, Slider, Footer } from "../../components";
import banner from "../../assets/images/banner.png";
import { Container, Row, Col } from "react-bootstrap";
import setting from "../../settings";
import { Preloader } from "../../pages";
import styles from "./index.module.css";
import pic1 from "../../assets/images/pic1.png";
import partner from "../../assets/images/partner.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [slide, setSlide] = useState([]);
  const [services, setServices] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
    loadSliders();
    loadServices();
    loadBerita();
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

  const loadBerita = async () => {
    setLoading(true);
    try {
      let response = await fetch(setting.beritaUrl);
      let data = await response.json();

      setBerita(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
                        <img width="80" height="80" src={data.picture} alt="" />
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
                <h4 className={styles.title}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores, pariatur.
                </h4>
              </div>
              <div className="row">
                <div className={styles.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem necessitatibus recusandae repellat, autem officiis
                  voluptate in? Quae eligendi est sapiente eaque soluta
                  consequatur beatae rem tenetur dolore consectetur praesentium
                  facilis iure omnis laboriosam, deserunt atque laudantium
                  mollitia qui? Nulla, odio enim eos quod saepe corporis animi
                  eligendi maiores laboriosam rerum.
                </div>
                <Link className="btn btn-custom-primary w-50">
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-sm-7">
              <div className="row">
                <h4 className={styles.title}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores, pariatur.
                </h4>
              </div>
              <div className="row">
                <div className={styles.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem necessitatibus recusandae repellat, autem officiis
                  voluptate in? Quae eligendi est sapiente eaque soluta
                  consequatur beatae rem tenetur dolore consectetur praesentium
                  facilis iure omnis laboriosam, deserunt atque laudantium
                  mollitia qui? Nulla, odio enim eos quod saepe corporis animi
                  eligendi maiores laboriosam rerum.
                </div>
                <Link className="btn btn-custom-primary w-50">
                  Selengkapnya
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-5">
              <img src={pic1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="row"></div>

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
    </div>
  );
};

export default Home;
