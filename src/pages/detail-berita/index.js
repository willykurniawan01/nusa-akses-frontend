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

const DetailBerita = () => {
  const [beritaDetail, setBeritaDetail] = useState([]);
  let { slug } = useParams();

  useEffect(() => {
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

  return (
    <div>
      <nav className="navigation mt-5">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Berita
            </li>
          </ol>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col">
                <img src={beritaDetail.picture} className="img-fluid" alt="" />
                <h4 className={style.postTitle}>{beritaDetail.judul}</h4>
                <div className={style.postDate}>
                  <span>{moment(beritaDetail.created_at).format("LLL")}</span>
                </div>
                <div
                  className={style.postContent}
                  dangerouslySetInnerHTML={{ __html: beritaDetail.content }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBerita;
