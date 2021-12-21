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
import { Preloader } from "../../pages";
import setting from "../../settings";
import style from "./index.module.css";
import { useParams } from "react-router-dom";
import moment from "moment";

const Berita = () => {
  const [preloader, setPreloader] = useState(true);
  const [beritaDetail, setBeritaDetail] = useState([]);
  let { slug } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);

    loadBeritaDetail();
  }, []);

  const loadBeritaDetail = async () => {
    try {
      const response = await fetch(`${setting.beritaUrl}/${slug}`);
      const data = await response.json();
      setBeritaDetail(data);
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
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                <div className="col">
                  <img
                    src={beritaDetail.picture}
                    className="img-fluid"
                    alt=""
                  />
                  <h4 className={style.postTitle}>{beritaDetail.judul}</h4>
                  <div className={style.postDate}>
                    <i class="bi bi-calendar"></i>
                    <span>{moment(beritaDetail.created_at).format("LLL")}</span>
                  </div>
                  <div
                    className={style.postContent}
                    dangerouslySetInnerHTML={{ __html: beritaDetail.content }}
                  ></div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-2 offset-sm-1">
              <div className="row">
                <div className="col">
                  <img src={banner} className="img-fluid" alt="" />
                  <div className={style.postCardDate}>
                    <span>20 September 2021</span>
                  </div>
                  <Link className={style.postCardTitle} href="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magnam, aut!
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Berita;
