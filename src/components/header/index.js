import React, { useEffect, useState } from "react";
import logo from "../../assets/images/nusa-akses.png";
import indonesia from "../../assets/images/flag/indonesia.svg";
import unitedkingdom from "../../assets/images/flag/united-kingdom.svg";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStater } from "react";
import setting from "../../settings";

const Header = () => {
  const [services, setServices] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    loadServices();
    loadPages();
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

  const loadPages = async () => {
    try {
      let response = await fetch(setting.pagesUrl);
      let data = await response.json();
      setPages(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar
      className="shadow-sm"
      collapseOnSelect
      expand="lg"
      bg="white"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link className="nav-link" to="/">
              Beranda
            </Link>
            <NavDropdown
              title={
                <span>
                  Perusahaan <i class="bi bi-chevron-down"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <Link className="dropdown-item" to="/profile-perusahaan">
                Profile Perusahaan
              </Link>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  Layanan <i class="bi bi-chevron-down"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              {services.map(function (data, index) {
                return (
                  <Link className="dropdown-item" to="/profile-perusahaan">
                    {data.name}
                  </Link>
                );
              })}
            </NavDropdown>
            <Link className="nav-link" to="/berita">
              Berita
            </Link>
            {pages.map(function (data, index) {
              return (
                <Link className="nav-link" to={`page/${data.id}`}>
                  {data.name}
                </Link>
              );
            })}
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <span>
                  <i class="bi bi-globe"></i> Bahasa Indonesia{" "}
                  <i class="bi bi-chevron-down"></i>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                {" "}
                <img width="20" src={indonesia} alt="" /> Bahasa Indonesia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {" "}
                <img width="20" src={unitedkingdom} alt="" /> English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
