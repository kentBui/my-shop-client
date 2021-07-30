import React from "react";
import { Accordion, useAccordionToggle } from "react-bootstrap";
import Link from "next/link";

const renderCategories = (categories) => {
  categories.map((cate, index) => {
    return cate.children ? (
      <li key={index} className="main-nav-list">
        <CustomToggle eventKey={index}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
          {cate.name}
          <span className="number">(53)</span>
        </CustomToggle>

        <Accordion.Collapse eventKey={index}>
          <ul aria-controls="fruitsVegetable">
            {cate.children.map((index, cateChild) => (
              <li key={index} className="main-nav-list child">
                <Link href={`/products/${cateChild.name}`}>
                  <a>
                    {cateChild.name}
                    <span className="number">(13)</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Accordion.Collapse>
      </li>
    ) : (
      <li key={index} className="main-nav-list">
        <Link href={`/products/${cate.name}`}>
          <a>
            <i className="fa fa-arrow-right" aria-hidden="true"></i> {cate.name}
            <span className="number">(29)</span>
          </a>
        </Link>
      </li>
    );
  });
};

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{
        backgroundColor: "#fff",
        border: "none",
        outline: "none",
        lineHeight: "50px",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const SideBarCategory = () => {
  return (
    <div className="sidebar-categories">
      <div className="head">Browse Categories</div>

      <ul className="main-categories">
        <Accordion>
          <li className="main-nav-list">
            <CustomToggle eventKey="0">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Fruits
              and Vegetables
              <span className="number">(53)</span>
            </CustomToggle>

            <Accordion.Collapse eventKey="0">
              <ul aria-controls="fruitsVegetable">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>
          <li className="main-nav-list">
            <CustomToggle eventKey="1">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Meat and
              Fish
              <span className="number">(53)</span>
            </CustomToggle>
            <Accordion.Collapse eventKey="1">
              <ul aria-controls="meatFish">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>

          <li className="main-nav-list">
            <CustomToggle eventKey="2">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Cooking
              <span className="number">(53)</span>
            </CustomToggle>
            <Accordion.Collapse eventKey="2">
              <ul aria-controls="cooking">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>
          <li className="main-nav-list">
            <CustomToggle eventKey="3">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Beverages
              <span className="number">(24)</span>
            </CustomToggle>

            <Accordion.Collapse eventKey="3">
              <ul aria-controls="beverages">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>
          <li className="main-nav-list">
            <CustomToggle eventKey="4">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Home and
              Cleaning
              <span className="number">(53)</span>
            </CustomToggle>

            <Accordion.Collapse eventKey="4">
              <ul aria-controls="homeClean">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>
          <li className="main-nav-list">
            <Link href="/products/pet">
              <a>
                <i className="fa fa-arrow-right" aria-hidden="true"></i> Pest
                Control<span className="number">(24)</span>
              </a>
            </Link>
          </li>
          <li className="main-nav-list">
            <CustomToggle eventKey="6">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Office
              Products
              <span className="number">(77)</span>
            </CustomToggle>

            <Accordion.Collapse eventKey="6">
              <ul aria-controls="officeProduct">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>
          <li className="main-nav-list">
            <CustomToggle eventKey="7">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Beauty
              Products
              <span className="number">(65)</span>
            </CustomToggle>

            <Accordion.Collapse eventKey="7">
              <ul aria-controls="beauttyProduct">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>
          <li className="main-nav-list">
            <CustomToggle eventKey="8">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Health
              Products
              <span className="number">(29)</span>
            </CustomToggle>

            <Accordion.Collapse eventKey="8">
              <ul aria-controls="healthProduct">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>
          <li className="main-nav-list">
            <Link href="/products/pet_care">
              <a>
                <i className="fa fa-arrow-right" aria-hidden="true"></i> Pet
                Care
                <span className="number">(29)</span>
              </a>
            </Link>
          </li>
          <li className="main-nav-list">
            <CustomToggle eventKey="10">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Home
              Appliances
              <span className="number">(15)</span>
            </CustomToggle>

            <Accordion.Collapse eventKey="10">
              <ul aria-controls="homeAppliance">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>
          <li className="main-nav-list">
            <CustomToggle eventKey="11">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Baby Care
              <span className="number">(48)</span>
            </CustomToggle>
            <Accordion.Collapse eventKey="11">
              <ul aria-controls="babyCare">
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Frozen Fish<span className="number">(13)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Dried Fish<span className="number">(09)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Fresh Fish<span className="number">(17)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a>
                      Meat Alternatives<span className="number">(01)</span>
                    </a>
                  </Link>
                </li>
                <li className="main-nav-list child">
                  <Link href="/">
                    <a className="border-bottom-0">
                      Meat<span className="number">(11)</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </li>
        </Accordion>
      </ul>
    </div>
  );
};

export default SideBarCategory;
