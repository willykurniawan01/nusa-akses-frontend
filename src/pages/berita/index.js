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

import setting from "../../settings";

const Berita = () => {
  const [preloader, setPreloader] = useState(true);
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);

    loadBerita();
  }, []);

  const loadBerita = async () => {
    try {
      const response = await fetch(`${setting.beritaUrl}`);
      const data = await response.json();
      setBerita(data);
    } catch (res) {
      console.log(res);
    }
  };

  if (preloader) {
    return <Preloader />;
  } else {
    return (
      <div>
        <Header />
        <nav className="navigation mt-5">
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
              <div className="col-5">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    placeholder="ketik keyword..."
                    className="form-control me-2"
                  />
                  <button className="btn-custom-primary">Cari</button>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              {berita.map(function (data, index) {
                return (
                  <div className="col-12 col-sm-4">
                    <Card className="shadow-sm">
                      <Card.Img variant="top" src={data.picture} />
                      <Card.Body>
                        <Card.Title className="mt-3">
                          <Link>{data.judul}</Link>
                        </Card.Title>
                        <Link
                          className="btn btn-primary btn-lg mt-2 mb-3"
                          to="#"
                        >
                          <i class="bi bi-arrow-right"></i>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Berita;
