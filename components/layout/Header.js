import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});

  const openSearch = () => {
    setShowSearch(true);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    //style={{ width: "100%", position: "fixed", top: "0px" }}
    const addSticky = () => {
      let Top = window.pageYOffset;

      if (Top < 30) {
        setHeaderStyle({});
      } else {
        setHeaderStyle((st) => ({
          ...st,
          width: "100%",
          position: "fixed",
          top: "0px",
        }));
      }
    };

    window.addEventListener("scroll", addSticky);

    return () => {
      window.removeEventListener("scroll", addSticky);
    };
  });

  return (
    <div
      id="undefined-sticky-wrapper"
      className="sticky-wrapper is-sticky"
      style={{ height: "80px" }}
    >
      <header className="header_area sticky-header" style={headerStyle}>
        <div className="main_menu">
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            className="main_box"
          >
            <Container>
              <Link href="/">
                <a className="navbar-brand logo_h">
                  <Image
                    src="/images/logo.webp"
                    alt=""
                    width={150}
                    height={50}
                  />
                </a>
              </Link>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />

              <Navbar.Collapse id="navbarSupportedContent" className="offset">
                <ul className="ml-auto nav navbar-nav menu_nav">
                  <li className="nav-item active">
                    <Link href="/">
                      <a
                        className="nav-link"
                        href="https://preview.colorlib.com/theme/karma/index.html"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/shops">
                          <a className="nav-link">Shops</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/shops/checkout">
                          <a className="nav-link">Product Checkout</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/shops/cart">
                          <a className="nav-link">Shopping Cart</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/shops/confirmation">
                          <a className="nav-link">Confirmation</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <Link href="/blogs">
                      <a className="nav-link">Blogs</a>
                    </Link>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Extras
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/extras/tracking">
                          <a className="nav-link">Tracking</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/extras/elements">
                          <a className="nav-link">Elements</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                  <li className="nav-item login">
                    <Link href="/login">
                      <a className="nav-link">Login / Register</a>
                    </Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <Link href="/shops/cart">
                      <a className="cart">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="search" onClick={openSearch}>
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div
          className={showSearch ? "search_input active" : "search_input"}
          id="search_input_box"
        >
          <div className="container">
            <form
              className="d-flex justify-content-between align-items-center"
              onSubmit={handleSubmitSearch}
            >
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="btn" onClick={closeSearch}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
