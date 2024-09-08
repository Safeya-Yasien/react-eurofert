import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { logo } from "../../../assets";

import styles from "./header.module.scss";
const {
  header,
  navbar_container,
  logo_img,
  navBar,
  navLink,
  basic_nav_dropdown,
  navbarToggler,
  navbar_collapse,
  contact_icons,
} = styles;

const Header = () => {
  return (
    <header className={header}>
      <Navbar expand="lg" className={navBar}>
        <Container className={navbar_container}>
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo} alt="logo" className={logo_img} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={navbarToggler}
          />
          <Navbar.Collapse id="basic-navbar-nav" className={navbar_collapse}>
            <Nav className="me-auto mx-auto">
              <Nav.Link className={navLink} as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link className={navLink} as={NavLink} to="about">
                About
              </Nav.Link>
              <NavDropdown
                title="Blog"
                id="basic-nav-dropdown"
                className={`${navLink}  ${basic_nav_dropdown}`}
              >
                <NavDropdown.Item className={navLink} as={NavLink} to="jobs">
                  Jobs
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={navLink}
                  as={NavLink}
                  to="last-news"
                >
                  Latest News
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className={navLink} as={NavLink} to="shop">
                Shop
              </Nav.Link>
              <Nav.Link className={navLink} as={NavLink} to="contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <ul className={contact_icons}>
            <li>
              <a href="#" aria-label="email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="phone number">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
          </ul>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
