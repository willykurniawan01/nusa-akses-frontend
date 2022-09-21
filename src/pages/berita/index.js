import React, { useState, useEffect } from "react";
import { Header, Slider, Footer } from "../../components";
import banner from "../../assets/images/banner.png";
import {
  Container,
  Row,
  Col,
  Carousel as SingleCarousel,
  Card,
  Spinner,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import setting from "../../settings";

const Berita = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadBerita();
  }, []);

  const loadBerita = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${setting.beritaUrl}`);
      const data = await response.json();
      setBerita(data);
      setLoading(false);
    } catch (res) {
      console.log(res);
    }
  };

  const searchBerita = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${setting.baseUrl}/api/post-search/${keyword}`
      );
      const data = await response.json();
      setBerita(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                />
                <button className="btn-custom-primary" onClick={searchBerita}>
                  Cari
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            {loading ? (
              <Spinner animation="grow m-auto" size="lg" />
            ) : (
              berita.map(function (data, index) {
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
                          to={`berita/${data.slug}`}
                        >
                          <i class="bi bi-arrow-right"></i>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
