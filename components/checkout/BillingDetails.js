import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const BillingDetails = () => {
  const [tinhs, setTinhs] = useState([]);
  const [huyen, setHuyen] = useState([]);
  const [xa, setXa] = useState([]);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    addressLine1: "",
    addressLine2: "",
    postCode: "",
    createAccount: false,
    orderNote: "",
  });

  const [country, setCountry] = useState("");
  const [city, setCity] = useState({ label: "", value: "" });
  const [district, setDistrict] = useState({ label: "", value: "" });
  const [village, setVillage] = useState({ label: "", value: "" });

  const [payment, setPayment] = useState("checkPayment"); // 'checkPayment'||'paypal'
  const [accept, setAccept] = useState(false);

  // useffect get tinh
  useEffect(() => {
    const getTinhs = async () => {
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/thongtindoanhnghiep.co/api/city"
      );

      setTinhs(res.data.LtsItem);
    };
    getTinhs();
  }, []);
  // handle onchange detaild
  const onChangeDetails = (e) => {
    if (e.target.name === "createAccount") {
      setDetails((de) => ({ ...de, createAccount: e.target.checked }));
    } else {
      setDetails((de) => ({ ...de, [e.target.name]: e.target.value }));
    }
  };

  // handle Tinh
  const handleTinh = async (val) => {
    console.log(val);
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/thongtindoanhnghiep.co/api/city/${val.value}/district`
    );
    setHuyen(res.data);
    setCity(val);
  };
  // handle Huyen
  const handleHuyen = async (val) => {
    console.log(val);
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/thongtindoanhnghiep.co/api/district/${val.value}/ward`
    );
    setXa(res.data);
    setDistrict(val);
  };
  // handle Xa
  const handleXa = async (val) => {
    console.log(val);
    setVillage(val);
  };

  //
  const {
    firstName,
    lastName,
    phone,
    email,
    company,
    addressLine1,
    addressLine2,
    postCode,
    createAccount,
    orderNote,
  } = details;

  const optionsTinhs =
    tinhs?.length > 0
      ? tinhs.map((t) => ({ label: t.Title, value: t.ID }))
      : [{ label: "", value: "" }];
  const optionsHuyen =
    huyen?.length > 0
      ? huyen.map((t) => ({ label: t.Title, value: t.ID }))
      : [{ label: "", value: "" }];
  const optionsXa =
    xa?.length > 0
      ? xa.map((t) => ({ label: t.Title, value: t.ID }))
      : [{ label: "", value: "" }];

  console.log(accept);
  return (
    <div className="billing_details">
      <form>
        <div className="row">
          <div className="col-lg-8">
            <h3>Billing Details</h3>
            <form className="row contact_form" noValidate="noValidate">
              <div className="col-md-6 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={firstName}
                  onChange={onChangeDetails}
                  required
                />
                <span className="placeholder"></span>
              </div>
              <div className="col-md-6 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={lastName}
                  onChange={onChangeDetails}
                  required
                />
                <span className="placeholder"></span>
              </div>
              <div className="col-md-12 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  name="company"
                  placeholder="Company name"
                  value={company}
                  onChange={onChangeDetails}
                />
              </div>
              <div className="col-md-6 form-group p_star">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={phone}
                  onChange={onChangeDetails}
                  required
                />
                <span className="placeholder"></span>
              </div>
              <div className="col-md-6 form-group p_star">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={onChangeDetails}
                  required
                />
                <span className="placeholder"></span>
              </div>
              <div className="col-md-12 form-group p_star">
                <label htmlFor="tinh">City</label>
                <Select
                  options={optionsTinhs}
                  instanceId="tinh"
                  id="tinh"
                  value={city}
                  onChange={handleTinh}
                />
              </div>
              <div className="col-md-12 form-group p_star">
                <label htmlFor="tinh">District</label>
                <Select
                  options={optionsHuyen}
                  instanceId="tinh"
                  id="tinh"
                  value={district}
                  onChange={handleHuyen}
                />
              </div>
              <div className="col-md-12 form-group p_star">
                <label htmlFor="tinh">Village</label>
                <Select
                  options={optionsXa}
                  instanceId="tinh"
                  id="tinh"
                  value={village}
                  onChange={handleXa}
                />
              </div>
              <div className="col-md-12 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="addressLine1"
                  name="addressLine1"
                  placeholder="Address line 01"
                  value={addressLine1}
                  onChange={onChangeDetails}
                  required
                />
                <span className="placeholder"></span>
              </div>
              <div className="col-md-12 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="addressLine2"
                  name="addressLine2"
                  placeholder="Address line 02"
                  value={addressLine2}
                  onChange={onChangeDetails}
                />
                <span className="placeholder"></span>
              </div>
              <div className="col-md-12 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="postCode"
                  placeholder="Postcode/ZIP"
                  value={postCode}
                  onChange={onChangeDetails}
                  required
                />
                <span className="placeholder"></span>
              </div>
              <div className="col-md-12 form-group">
                <div className="creat_account">
                  <input
                    type="checkbox"
                    id="f-option2"
                    name="createAccount"
                    value={createAccount}
                    onChange={onChangeDetails}
                  />
                  <label htmlFor="f-option2">Create an account?</label>
                </div>
              </div>
              <div className="col-md-12 form-group">
                <div className="creat_account">
                  <h3>Shipping Details</h3>
                  <input type="checkbox" id="f-option3" name="selector" />
                  <label htmlFor="f-option3">
                    Ship to a different address?
                  </label>
                </div>
                <textarea
                  className="form-control"
                  name="orderNote"
                  id="orderNote"
                  rows="1"
                  placeholder="Order Notes"
                  value={orderNote}
                  onChange={onChangeDetails}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="order_box">
              <h2>Your Order</h2>
              <ul className="list">
                <li>
                  Product <span>Total</span>
                </li>
                <li>
                  Fresh Blackberry <span className="middle">x 02</span>
                  <span className="last">$720.00</span>
                </li>
                <li>
                  Fresh Tomatoes <span className="middle">x 02</span>
                  <span className="last">$720.00</span>
                </li>
                <li>
                  Fresh Brocoli <span className="middle">x 02</span>
                  <span className="last">$720.00</span>
                </li>
              </ul>
              <ul className="list list_2">
                <li>
                  Subtotal <span>$2160.00</span>
                </li>
                <li>
                  Shipping <span>Flat rate: $50.00</span>
                </li>
                <li>
                  Total <span>$2210.00</span>
                </li>
              </ul>
              <div className="payment_item">
                <div className="radion_btn">
                  <input
                    type="radio"
                    id="f-option5"
                    name="payment"
                    value={"checkPayment"}
                    checked={payment === "checkPayment"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  <label htmlFor="f-option5">Check payments</label>
                  <div className="check"></div>
                </div>
                <p>
                  Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.
                </p>
              </div>
              <div className="payment_item active">
                <div className="radion_btn">
                  <input
                    type="radio"
                    id="f-option6"
                    name="payment"
                    value={"paypal"}
                    checked={payment === "paypal"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  <label htmlFor="f-option6">Paypal </label>
                  <Image
                    width={66}
                    height={19}
                    src="/images/checkout/card.jpg"
                    alt=""
                  />
                  <div className="check"></div>
                </div>
                <p>
                  Pay via PayPal; you can pay with your credit card if you don’t
                  have a PayPal account.
                </p>
              </div>
              <div className="creat_account">
                <input
                  type="checkbox"
                  id="f-option4"
                  name="selector"
                  checked={accept}
                  value={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                />
                <label htmlFor="f-option4">I’ve read and accept the </label>
                <a href="https://preview.colorlib.com/theme/karma/checkout.html#">
                  terms &amp; conditions*
                </a>
              </div>
              <button className="btn primary-btn">Proceed to Paypal</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
