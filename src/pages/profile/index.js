import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../../components";
import tower from "../../assets/images/tower.png";
import { Col, Container, Row } from "react-bootstrap";
import { Preloader } from "../../pages";
import styles from "./index.module.css";
import setting from "../../settings";

import AOS from "aos";

const Profile = () => {
  const [preloader, setPreloader] = useState(true);
  const [settingPerusahaan, setSettingPerusahaan] = useState([]);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setPreloader(false);
    }, 800);
    loadSetting();
  }, []);

  const loadSetting = async () => {
    try {
      let response = await fetch(setting.settingPerusahaanUrl);
      let data = await response.json();
      setSettingPerusahaan(data.data);
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
        <nav className="navigation">
          <div className="container">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Profil Perusahaan
              </li>
            </ol>
          </div>
        </nav>
        <div className={styles.profile}>
          <Container>
            <Row>
              <Col
                className="d-flex"
                xs={{ span: 12, order: "last" }}
                lg={{ span: 6, order: "first" }}
              >
                <div
                  data-aos="fade-right"
                  className={`${styles.profileContent} align-self-center mt-5 lg-mt-0`}
                >
                  <div className={styles.profileContentTitle}>
                    <h5>Tentang Nusa Akses</h5>
                  </div>
                  <div className={styles.profileContentDesc}>
                    <p>{settingPerusahaan.tentang.value}</p>
                    {/* <button className="btn-transparent">
                      Selengkapnya <i class="bi bi-arrow-right-circle"></i>
                    </button> */}
                  </div>
                </div>
              </Col>
              <Col
                className="d-flex justify-content-center align-item-center"
                xs={{ span: 12, order: "first" }}
                lg={{ span: 4, offset: 2, order: "last" }}
              >
                <div className={styles.profileImage} data-aos="fade-left">
                  <img src={tower} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.visiMisiContainer}>
          <div className={styles.visi}>
            <div className="text" data-aos="fade-right">
              <div className={styles.textTitle}>
                <h5>Visi</h5>
              </div>
              <div className={styles.textContent}>
                <p>{settingPerusahaan.visi.value}</p>
              </div>
            </div>
            <div className="text" data-aos="fade-right">
              <div className={styles.textTitle}>
                <h5>Misi</h5>
              </div>
              <div className={styles.textContent}>
                <p>{settingPerusahaan.misi.value}</p>
              </div>
            </div>
          </div>
          <div className={styles.misi}>
            <div className="text" data-aos="fade-left">
              <div className={styles.textTitle}>
                <h5>Pimpinan Perusahaan</h5>
              </div>
              <div className={styles.textContent}>
                <p>{settingPerusahaan.pimpinan.value}</p>
              </div>
            </div>

            {/* <button className={styles.buttonTransparent}>
              Selengkapnya <i class="bi bi-arrow-right-circle"></i>
            </button> */}
          </div>
        </div>

        <div className={styles.history}>
          <div className="container">
            <div className="row py-5">
              <div className="col">
                <h4>Sejarah Kami</h4>
                <p>{settingPerusahaan.sejarah.value}</p>
              </div>
            </div>
          </div>

          <div className="history-divider"></div>
          <div className="history-right"></div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Profile;
