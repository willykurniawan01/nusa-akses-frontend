import React, { useState, useEffect } from "react";
import { Header, Slider, Footer } from "../../components";
import banner from "../../assets/images/banner.png";
import {
  Container,
  Row,
  Col,
  Carousel as SingleCarousel,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Preloader } from "../../pages";
import article from "../../assets/images/article.png";
// import "react-multi-carousel/lib/styles.css";
import "./index.scss";

const Berita = () => {
  //   const [slide, setSlide] = useState([
  //     {
  //       image: banner,
  //     },
  //     {
  //       image: banner,
  //     },
  //     {
  //       image: banner,
  //     },
  //   ]);

  // const responsive = {
  //     superLargeDesktop: {
  //         // the naming can be any, depends on you.
  //         breakpoint: { max: 4000, min: 3000 },
  //         items: 5
  //     },
  //     desktop: {
  //         breakpoint: { max: 3000, min: 1024 },
  //         items: 3
  //     },
  //     tablet: {
  //         breakpoint: { max: 1024, min: 464 },
  //         items: 1
  //     },
  //     mobile: {
  //         breakpoint: { max: 464, min: 0 },
  //         items: 1
  //     }
  // };

  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);

  if (preloader) {
    return <Preloader />;
  } else {
    return (
      <div>
        <Header />
        <nav className="navigation">
          <div className="container">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Berita
              </li>
            </ol>
          </div>
        </nav>
        <div className="articles mt-5">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="form-group d-flex">
                  <input type="text" className="form-control me-2" />
                  <button className="btn-custom-primary">Cari</button>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-4">
                <Card className="shadow-sm">
                  <Card.Img variant="top" src={article} />
                  <Card.Body>
                    <Card.Title className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Title>
                    <Link className="btn-custom-circle">
                      <i class="bi bi-arrow-right"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Berita;
