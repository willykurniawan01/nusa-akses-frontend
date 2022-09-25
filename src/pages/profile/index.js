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
                  <p>
                    Provides best-of-class fiber optic services and radio to
                    Indonesia. No more buffering while watching your favorite
                    movie at home, and no more performance delays accessing your
                    business’s mission critical applications. Along with the
                    best support team in the industry, we provide our customers
                    with Internet access with speeds in excess of 1 Gbps+.
                  </p>
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
              <p>
                Menjadi penyedia layanan dan solusi gaya hidup digital mobile
                kelas dunia yang terpercaya.
              </p>
            </div>
          </div>
          <div className="text" data-aos="fade-right">
            <div className={styles.textTitle}>
              <h5>Misi</h5>
            </div>
            <div className={styles.textContent}>
              <p>
                Memberikan layanan dan solusi digital mobile yang melebihi
                ekspektasi para pengguna, menciptakan nilai lebih bagi para
                pemegang saham serta mendukung pertumbuhan ekonomi bangsa.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.misi}>
          <div className="text" data-aos="fade-left">
            <div className={styles.textTitle}>
              <h5>Sejarah Perusahaan</h5>
            </div>
            <div className={styles.textContent}>
              <p>
                Daya Akses Nusantara merupakan suatu organisasi yang bergerak
                dalam jasa Internet dan pengembangan Aplikasi. Daya Akses
                Nusantara memiliki kantor yang terletak di kota Batam (Jl.
                Brigjen Katamso Komplek Pertokoan Central Barelang Raya Blok B-1
                NO 6 Tanjung Uncang, Batam, Indonesia). Daya Akses Nusantara
                baru didirikan pada tahun Desember 2019. Daya Akses Nusantara
                bergerak dengan dua orang pendiri yakni Bapak Yulvizon dan
                Sukristiyo. Organisasi ini bisa termasuk baru beroperasi dalam
                dunia IT di kota Batam.
              </p>
            </div>
          </div>

          {/* <button className={styles.buttonTransparent}>
            Selengkapnya <i class="bi bi-arrow-right-circle"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
