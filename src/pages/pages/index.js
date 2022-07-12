import React, { useEffect, useState } from "react";
import { Header, Footer } from "../../components";
import { Preloader } from "../../pages";
import styles from "./index.module.css";
import setting from "../../settings";
import { useParams } from "react-router-dom";

const Page = () => {
  let { id } = useParams();
  const [page, setPage] = useState([]);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);

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

  if (preloader) {
    return <Preloader />;
  } else {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mb-4" style={{ marginTop: 100 }}>
            <div className="col-10">
              <h2 className={styles.pageTitle}>{page.name}</h2>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <img
                width="100%"
                height="600px"
                className={styles.rounded}
                src={page.picture}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-11">
              <div
                className={styles.pageContent}
                dangerouslySetInnerHTML={{ __html: page.content }}
              ></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Page;
