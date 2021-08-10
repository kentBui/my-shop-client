import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { getProfileActions } from "../../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/client";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});

  const dispatch = useDispatch();

  const { loading, user } = useSelector((state) => state.user);

  // handle open search
  const openSearch = () => {
    setShowSearch(true);
  };

  // handle close search
  const closeSearch = () => {
    setShowSearch(false);
  };

  // handle search bar
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };

  // handle nav bar
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

  useEffect(() => {
    dispatch(getProfileActions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignout = () => {
    signOut();
  };

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
                      <a className="nav-link">Home</a>
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
                  {/* load user icon */}
                  {user ? (
                    <li className="nav-item submenu dropdown logined">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <Image
                          src={"/images/home/user.png"}
                          alt={user && user.name}
                          width={40}
                          height={40}
                          className="rounded-circle"
                        />
                        <span>{user && user.name.split(" ")[0]}</span>
                      </a>
                      <ul className="dropdown-menu">
                        {user && user.role === "admin" && (
                          <>
                            <li className="nav-item">
                              <Link href="/products">
                                <a className="nav-link">Products List</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/users">
                                <a className="nav-link">Users List</a>
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                          </>
                        )}

                        <li className="nav-item">
                          <Link href="/me/update">
                            <a className="nav-link">Update</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/">
                            <a
                              className="nav-link text-danger"
                              onClick={handleSignout}
                            >
                              Logout
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item login">
                      <Link href="/login">
                        <a className="nav-link">Login</a>
                      </Link>
                    </li>
                  )}
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
