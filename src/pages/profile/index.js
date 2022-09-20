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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
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
                  <p></p>
                  <button className="btn-transparent">
                    Selengkapnya <i class="bi bi-arrow-right-circle"></i>
                  </button>
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
              <p></p>
            </div>
          </div>
          <div className="text" data-aos="fade-right">
            <div className={styles.textTitle}>
              <h5>Misi</h5>
            </div>
            <div className={styles.textContent}>
              <p></p>
            </div>
          </div>
        </div>
        <div className={styles.misi}>
          <div className="text" data-aos="fade-left">
            <div className={styles.textTitle}>
              <h5>Pimpinan Perusahaan</h5>
            </div>
            <div className={styles.textContent}>
              <p></p>
            </div>
          </div>

          <button className={styles.buttonTransparent}>
            Selengkapnya <i class="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
