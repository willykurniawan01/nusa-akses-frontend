import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const SejarahPerusahaan = () => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <div className="container mt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Sejarah Perusahaan
            </li>
          </ol>
        </div>
      </nav>

      <div className={styles.pageName}>
        <div className="container">
          <h1>Sejarah Perusahaan</h1>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <p className={styles.pageContent}>
            Daya Akses Nusantara merupakan suatu organisasi yang bergerak dalam
            jasa Internet dan pengembangan Aplikasi. Daya Akses Nusantara
            memiliki kantor yang terletak di kota Batam (Jl. Brigjen Katamso
            Komplek Pertokoan Central Barelang Raya Blok B-1 NO 6 Tanjung
            Uncang, Batam, Indonesia). Daya Akses Nusantara baru didirikan pada
            tahun Desember 2019. Daya Akses Nusantara bergerak dengan dua orang
            pendiri yakni Bapak Yulvizon dan Sukristiyo. Organisasi ini bisa
            termasuk baru beroperasi dalam dunia IT di kota Batam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SejarahPerusahaan;
