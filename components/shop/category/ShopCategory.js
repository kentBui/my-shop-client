import React from "react";
import RelatedProducts from "../../shared/RelatedProducts";
import ShopProducts from "./shopProducts";
import SideBar from "./sidebar/SideBar";

const ShopCategory = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <SideBar />
          <ShopProducts />
        </div>
      </div>
      <RelatedProducts />
    </>
  );
};

export default ShopCategory;

// TODO if you want show modal when click show more => resolve
const ProductModal = ({ item }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="container relative">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="product-quick-view">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="quick-view-carousel">
                  <div
                    className="item"
                    style="background: url(img/organic-food/q1.jpg)"
                  ></div>
                  <div
                    className="item"
                    style="background: url(img/organic-food/q1.jpg)"
                  ></div>
                  <div
                    className="item"
                    style="background: url(img/organic-food/q1.jpg)"
                  ></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="quick-view-content">
                  <div className="top">
                    <h3 className="head">Mill Oil 1000W Heater, White</h3>
                    <div className="price d-flex align-items-center">
                      <span className="lnr lnr-tag"></span>
                      <span className="ml-10">$149.99</span>
                    </div>
                    <div className="category">
                      Category: <span>Household</span>
                    </div>
                    <div className="available">
                      Availibility: <span>In Stock</span>
                    </div>
                  </div>
                  <div className="middle">
                    <p className="content">
                      Mill Oil is an innovative oil filled radiator with the
                      most modern technology. If you are looking for something
                      that can make your interior look awesome, and at the same
                      time give you the pleasant warm feeling during the winter.
                    </p>
                    <a
                      href="https://preview.colorlib.com/theme/karma/category.html#"
                      className="view-full"
                    >
                      View full Details
                      <span className="lnr lnr-arrow-right"></span>
                    </a>
                  </div>
                  <div className="bottom">
                    <div className="color-picker d-flex align-items-center">
                      Color:
                      <span className="single-pick"></span>
                      <span className="single-pick"></span>
                      <span className="single-pick"></span>
                      <span className="single-pick"></span>
                      <span className="single-pick"></span>
                    </div>
                    <div className="quantity-container d-flex align-items-center mt-15">
                      Quantity:
                      <input
                        type="text"
                        className="quantity-amount ml-15"
                        value="1"
                      />
                      <div className="arrow-btn d-inline-flex flex-column">
                        <button
                          className="increase arrow"
                          type="button"
                          title="Increase Quantity"
                        >
                          <span className="lnr lnr-chevron-up"></span>
                        </button>
                        <button
                          className="decrease arrow"
                          type="button"
                          title="Decrease Quantity"
                        >
                          <span className="lnr lnr-chevron-down"></span>
                        </button>
                      </div>
                    </div>
                    <div className="d-flex mt-20">
                      <a
                        href="https://preview.colorlib.com/theme/karma/category.html#"
                        className="view-btn color-2"
                      >
                        <span>Add to Cart</span>
                      </a>
                      <a
                        href="https://preview.colorlib.com/theme/karma/category.html#"
                        className="like-btn"
                      >
                        <span className="lnr lnr-layers"></span>
                      </a>
                      <a
                        href="https://preview.colorlib.com/theme/karma/category.html#"
                        className="like-btn"
                      >
                        <span className="lnr lnr-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
