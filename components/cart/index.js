import React from "react";
import Image from "next/image";
import { MDBDataTable } from "mdbreact";

const ShoppingCart = () => {
  const data = [
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 1",
      price: 360,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 2",
      price: 224,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 3",
      price: 234,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 1",
      price: 360,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 2",
      price: 224,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 3",
      price: 234,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 1",
      price: 360,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 2",
      price: 224,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 3",
      price: 234,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 1",
      price: 360.0,
      quantity: 1,
      total: 360,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 2",
      price: 224.0,
      quantity: 1,
      total: 360.0,
    },
    {
      public_url: "/images/cart/cart.jpg",
      name: "Minimalistic shop for multipurpose use 3",
      price: 234.0,
      quantity: 1,
      total: 360.23,
    },
  ];
  const setCartTable = () => {
    const columns = [
      {
        label: "Product",
        field: "product",
        sort: "asc",
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
      },
      {
        label: "Quantity",
        field: "quantity",
        sort: "asc",
      },
      {
        label: "Total",
        field: "total",
        sort: "asc",
      },
    ];

    const rows =
      data?.length > 0 &&
      data.map((item) => ({
        product: (
          <div className="media">
            <div className="d-flex">
              <Image
                width={150}
                height={100}
                src={item.public_url}
                alt={item.name}
              />
            </div>
            <div className="media-body">
              <p>{item.name}</p>
            </div>
          </div>
        ),
        price: item.price,
        quantity: (
          <div className="product_count">
            <input
              type="text"
              name="qty"
              id="sst"
              maxLength="12"
              min="1"
              value={item.quantity}
              title="Quantity:"
              className="input-text qty"
            />
            <button className="increase items-count" type="button">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </button>
            <button className="reduced items-count" type="button">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </button>
          </div>
        ),
        total: item.total,
      }));

    return { columns, rows };
  };

  const getSubTotal = () =>
    data?.length > 0 && data.reduce((acc, item) => acc + item.total, 0);

  return (
    <section className="cart_area">
      <div className="container">
        <div className="cart_inner">
          <div className="">
            <MDBDataTable data={setCartTable()} hover striped bordered />
            <table className="table">
              <tbody>
                <tr className="bottom_button">
                  <td>
                    <button className="gray_btn btn">Update Cart</button>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="cupon_text d-flex align-items-center justify-content-between">
                      <input type="text" placeholder="Coupon Code" />
                      <button className="btn primary-btn">Apply</button>
                      <button className="btn gray_btn">Close Coupon</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5>${getSubTotal()}</h5>
                  </td>
                </tr>
                <tr className="shipping_area">
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Shipping</h5>
                  </td>
                  <td>
                    <div className="shipping_box">
                      <ul className="list">
                        <li>Flat Rate: $5.00</li>
                        <li>Free Shipping</li>
                        <li>Flat Rate: $10.00</li>
                        <li className="active">Local Delivery: $2.00</li>
                      </ul>
                      <h6>
                        Calculate Shipping
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </h6>

                      <input type="text" placeholder="Postcode/Zipcode" />
                      <button className="gray_btn btn">Update Details</button>
                    </div>
                  </td>
                </tr>
                <tr className="out_button_area">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="checkout_btn_inner d-flex align-items-center">
                      <button className="btn gray_btn">
                        Continue Shopping
                      </button>
                      <button className="primary-btn btn">
                        Proceed to checkout
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
