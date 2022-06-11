import React from "react";
import { Header, Footer } from "../../components";
import Image from "react-bootstrap/Image";
import styles from "./index.module.css";

const index = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mb-4" style={{ marginTop: 100 }}>
          <div className="col-10">
            <h2 className={styles.pageTitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur, magnam!
            </h2>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <img
              width="100%"
              height="600px"
              className={styles.rounded}
              src="https://cdn1-production-images-kly.akamaized.net/LZs_U6Exx8RHwHDhecUTVEBawYY=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2269674/original/078122200_1530773239-jh.jpg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-11">
            <div className={styles.pageContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, quo vel voluptate quidem provident eius alias magnam,
              consequatur, inventore odit sunt. Sequi natus facilis architecto
              esse? Odio enim laborum quas sed provident laboriosam
              reprehenderit! Perferendis, fuga reprehenderit ducimus porro
              provident tenetur vitae, sint modi quisquam dicta eaque odio. Illo
              voluptas at delectus minus corporis quas voluptatem reiciendis
              perspiciatis, necessitatibus nam veritatis. Quo, veritatis commodi
              possimus, voluptate laudantium, maiores cupiditate exercitationem
              nesciunt sit atque ex asperiores vel? Praesentium, odio qui
              sapiente eaque quis libero magnam neque natus optio amet nihil
              voluptas dolorum beatae! Nisi consequuntur vero quae atque
              reprehenderit corrupti illo!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
