import React, { useState } from "react";
import "nouislider/distribute/nouislider.css";
import Nouislider from "nouislider-react";

const SideBarFilter = () => {
  const [brand, setBrand] = useState({
    apple: false,
    asus: false,
    gionee: false,
    micromax: false,
    samsung: false,
  });

  const [color, setColor] = useState({
    black: false,
    blackleather: false,
    blackred: false,
    gold: false,
    spacegrey: false,
  });

  const [price, setPrice] = useState([1000, 2000]);

  const onChangeBrand = (e) => {
    setBrand((oldBrand) => ({
      ...oldBrand,
      [e.target.name]: e.target.checked,
    }));
  };
  console.log("submit", brand);
  console.log("submit", color);

  const onChangeColor = (e) => {
    setColor((oldColor) => ({
      ...oldColor,
      [e.target.name]: e.target.checked,
    }));
  };

  const onChangePrice = (val, handle) => {
    setPrice(val);
  };
  // const onUpdatePrice = (val, handle) => {
  //   console.log("update", val);
  // };

  const handleSubmitfilterBrand = (e) => {
    e.preventDefault();
  };

  const handleSubmitfilterColor = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sidebar-filter mt-50">
      <div className="top-filter-head">Product Filters</div>
      <div className="common-filter">
        <div className="head">Brands</div>
        <form onSubmit={handleSubmitfilterBrand}>
          <ul>
            <li className="filter-list">
              <input
                onChange={onChangeBrand}
                checked={brand.apple}
                className="pixel-radio"
                type="checkbox"
                id="apple"
                name="apple"
              />
              <label htmlFor="apple">
                Apple<span>(29)</span>
              </label>
            </li>
            <li className="filter-list">
              <input
                className="pixel-radio"
                type="checkbox"
                id="asus"
                name="asus"
                onChange={onChangeBrand}
                checked={brand.asus}
              />
              <label htmlFor="asus">
                Asus<span>(29)</span>
              </label>
            </li>
            <li className="filter-list">
              <input
                className="pixel-radio"
                type="checkbox"
                id="gionee"
                name="gionee"
                onChange={onChangeBrand}
                checked={brand.gionee}
              />
              <label htmlFor="gionee">
                Gionee<span>(19)</span>
              </label>
            </li>
            <li className="filter-list">
              <input
                className="pixel-radio"
                type="checkbox"
                id="micromax"
                name="micromax"
                onChange={onChangeBrand}
                checked={brand.micromax}
              />
              <label htmlFor="micromax">
                Micromax<span>(19)</span>
              </label>
            </li>
            <li className="filter-list">
              <input
                className="pixel-radio"
                type="checkbox"
                id="samsung"
                name="samsung"
                onChange={onChangeBrand}
                checked={brand.samsung}
              />
              <label htmlFor="samsung">
                Samsung<span>(19)</span>
              </label>
            </li>
          </ul>
        </form>
      </div>
      <div className="common-filter">
        <div className="head">Color</div>
        <form onSubmit={handleSubmitfilterColor}>
          <ul>
            <li className="filter-list">
              <input
                className="pixel-radio"
                type="checkbox"
                id="black"
                name="black"
                onChange={onChangeColor}
                checked={color.black}
              />
              <label htmlFor="black">
                Black<span>(29)</span>
              </label>
            </li>
            <li className="filter-list">
              <input
                className="pixel-radio"
                type="checkbox"
                id="blackleather"
                name="blackleather"
                onChange={onChangeColor}
                checked={color.blackleather}
              />
              <label htmlFor="blackleather">
                Black Leather<span>(29)</span>
              </label>
            </li>
            <li className="filter-list">
              <input
                className="pixel-radio"
                type="checkbox"
                id="blackred"
                name="blackred"
                onChange={onChangeColor}
                checked={color.blackred}
              />
              <label htmlFor="blackred">
                Black with red<span>(19)</span>
              </label>
            </li>
            <li className="filter-list">
              <input
                className="pixel-radio"
                type="checkbox"
                id="gold"
                name="gold"
                onChange={onChangeColor}
                checked={color.gold}
              />
              <label htmlFor="gold">
                Gold<span>(19)</span>
              </label>
            </li>
            <li className="filter-list">
              <input
                className="pixel-radio"
                type="checkbox"
                id="spacegrey"
                name="spacegrey"
                onChange={onChangeColor}
                checked={color.spacegrey}
              />
              <label htmlFor="spacegrey">
                Spacegrey<span>(19)</span>
              </label>
            </li>
          </ul>
        </form>
      </div>
      <div className="common-filter">
        <div className="head">Price</div>
        <div className="price-range-area">
          <Nouislider
            range={{ min: 0, max: 5000 }}
            start={price}
            connect
            onChange={onChangePrice}
            // onUpdate={onUpdatePrice}
          />
          <div className="value-wrapper d-flex">
            <div className="price">Price:</div>
            <span>$</span>
            <div id="lower-value">{price[0]}</div>
            <div className="to">to</div>
            <span>$</span>
            <div id="upper-value">{price[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
