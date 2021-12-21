import React, { useState } from "react";
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

const Header = () => {
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
              <NavDropdown.Item href="#action/3.1">Profil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sejarah</NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link" to="/berita">
              Berita
            </Link>
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
