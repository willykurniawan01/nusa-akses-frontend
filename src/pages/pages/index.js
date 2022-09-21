import React, { useEffect, useState } from "react";
import { Header, Footer } from "../../components";
import styles from "./index.module.css";
import setting from "../../settings";
import { useParams, Link } from "react-router-dom";

const Page = () => {
  let { id } = useParams();
  const [page, setPage] = useState([]);

  useEffect(() => {
    loadPage();
  }, [id]);

  const loadPage = async () => {
    try {
      const response = await fetch(`${setting.detailPageUrl}/${id}`);
      const data = await response.json();
      setPage(data.data);
    } catch (res) {
      console.log(res);
    }
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <div className="container mt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {page.name}
            </li>
          </ol>
        </div>
      </nav>

      <div className={styles.pageName}>
        <div className="container">
          <h1>{page.name}</h1>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <p className={styles.pageContent}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            molestias rem quae nobis, omnis veniam exercitationem libero magni
            nihil iste in sunt non dolorum, eligendi veritatis, nam quibusdam
            amet officia. Deleniti suscipit repellendus id rem vero a qui
            placeat natus dolores, similique consectetur distinctio cupiditate,
            dolor quibusdam fugiat! Ut eum consequatur expedita culpa iure
            delectus, amet earum distinctio illo. Dolorum, porro similique ab
            veniam aliquam nobis aut error, dolorem nisi consectetur ipsum
            corrupti perspiciatis ducimus, fugit molestias voluptas enim earum
            laudantium vero neque cum dolores. Voluptates natus maxime, amet ab
            adipisci sapiente sunt accusamus cumque numquam, animi officia
            inventore dolores voluptate distinctio fuga placeat delectus
            architecto? Veniam in officia debitis, quisquam totam voluptate
            expedita? Perferendis ex dolor error amet quod hic ducimus illo
            sint, modi accusamus cumque nihil, veniam vitae voluptates dolore?
            Eligendi quae minus, illum odio, repellendus, totam iste magnam
            debitis alias dolorem voluptas?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
