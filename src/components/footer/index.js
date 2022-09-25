import React from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import logo from "../../assets/images/nusa-akses.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import setting from "../../settings";
const Footer = () => {
  const [services, setServices] = useState([]);

  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [showReport, setShowReport] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showLoginChat, setShowLoginChat] = useState(false);
  const handleCloseReport = () => setShowReport(false);
  const handleShowReport = () => setShowReport(true);
  const handleCloseChat = () => setShowChat(false);
  const handleShowChat = () => setShowChat(true);
  const handleCloseLoginChat = () => setShowLoginChat(false);
  const handleShowLoginChat = () => setShowLoginChat(true);

  useEffect(() => {
    loadServices();

    setInterval(async () => {
      if (sessionStorage.getItem("auth")) {
        let response = await fetch(setting.getChatUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_room_id: sessionStorage.getItem("chat_room_id"),
          }),
        });
        let data = await response.json();
        setChat(data.data);
        console.log(chat);
      }
    }, 3000);
  }, []);

  const loadServices = async () => {
    try {
      let response = await fetch(setting.servicesUrl);
      let data = await response.json();
      setServices(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendChat = async () => {
    try {
      fetch(setting.sendChatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          id: sessionStorage.getItem("chat_room_id"),
        }),
      });
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const submitReport = async () => {
    try {
      let response = await fetch(setting.sendReportUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          customer_name: name,
          problem,
          description,
          address,
        }),
      });

      let data = await response.json();

      if (data) {
        setShowReport(false);
        setName("");
        setAddress("");
        setProblem("");
        setDescription("");
        setDate("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginChat = async () => {
    try {
      let response = await fetch(setting.loginChatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: userName,
        }),
      });

      let data = await response.json();

      if (data) {
        sessionStorage.setItem("guest_id", data.data.id);
        sessionStorage.setItem("chat_room_id", data.data.chat_room.id);
        sessionStorage.setItem("auth", true);
        handleCloseLoginChat();
        handleShowChat();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonChat = (e) => {
    e.preventDefault();

    if (!sessionStorage.getItem("auth")) {
      handleShowLoginChat();
    }

    handleShowChat();
  };

  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <div className="footer-brand">
                <img className="footer-brand-logo" src={logo} />
                <span className="footer-brand-desc">
                  Jl. Brigjen Katamso, Tj. Uncang, Kec. Batu Aji,
                  <p>Kota Batam,Kepulauan Riau 29425</p>
                  <p>E : sales@nusaakses.net.id</p>
                  <p>T: 0821-7016-7025</p>
                </span>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="footer-nav">
                <p className="footer-nav-header">Bantuan</p>
                <a href="#" className="footer-nav-link">
                  Pusat Bantuan
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowReport();
                  }}
                  className="footer-nav-link"
                >
                  Laporan Kendala
                </a>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="footer-nav">
                <p className="footer-nav-header">Layanan</p>
                {services.map(function (data, index) {
                  return (
                    <Link to={`/page/${data.id}`} className="footer-nav-link">
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="footer-nav">
                <p className="footer-nav-header">Perusahaan</p>
                <Link to="/profile-perusahaan" className="footer-nav-link">
                  Profil Perusahaan
                </Link>
                <Link to="/sejarah-perusahaan" className="footer-nav-link">
                  Sejarah Perusahaan
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className="footer-socialmedia">
                <p className="footer-socialmedia-header">
                  Tetap terhubung dengan kami
                </p>
                <div className="footer-socialmedia-nav">
                  <a href="" className="footer-socialmedia-nav-link">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="" className="footer-socialmedia-nav-link">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="" className="footer-socialmedia-nav-link">
                    <i class="bi bi-twitter"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
        <div className="footer-copyright">
          <Container>
            <p className="footer-copyright-text">
              © PT Daya Akses Nusantara, 2021.
            </p>
          </Container>
        </div>
      </div>

      <button
        onClick={handleButtonChat}
        id="chatButton"
        class="float-button shadow"
      >
        <i class="bi bi-chat-fill"></i>
      </button>

      <Modal size="lg" show={showReport} onHide={handleCloseReport}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div class="container">
            <div class="row">
              <div class="form-group">
                <label>Tanggal</label>
                <input
                  type="date"
                  class="form-control mt-2"
                  name="date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="form-group">
                <label>Nama</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  name="customer_name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="form-group">
                <label>Problem</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  name="problem"
                  onChange={(e) => setProblem(e.target.value)}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="form-group">
                <label>Deskripsi</label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  class="form-control mt-2"
                ></textarea>
              </div>
            </div>
            <div class="row mt-3">
              <div class="form-group">
                <label>Alamat</label>
                <textarea
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  class="form-control mt-2"
                ></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={submitReport}
            className="btn btn-primary"
            type="submit"
          >
            Kirim
          </button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={showChat} onHide={handleCloseChat}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {chat.map((v) => {
            if (v.type == "guest-admin") {
              return (
                <div class="row justify-content-end mb-2">
                  <div class="col-6">
                    <div class="card shadow-sm self-message">
                      <div class="card-body">
                        <p>{v.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div class="row mb-2">
                  <div class="col-6">
                    <div class="card shadow-sm">
                      <div class="card-body">
                        <p>{v.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Modal.Body>
        <Modal.Footer>
          <div class="input-group">
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="ketik pesan..."
              name="message"
              class="form-control"
            />
            <button
              onClick={handleSendChat}
              type="submit"
              class="btn btn-primary"
            >
              Kirim
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={showLoginChat} onHide={handleCloseLoginChat}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div class="container">
            <div class="row">
              <div class="form-group">
                <label>Email</label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control mt-2"
                  name="email"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="form-group">
                <label>Nama</label>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  class="form-control mt-2"
                  name="name"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleLoginChat}
            className="btn btn-primary"
            type="button"
          >
            Kirim
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Footer;
