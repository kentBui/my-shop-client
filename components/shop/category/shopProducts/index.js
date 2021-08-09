import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import CustomModal from "../../../shared/CustomModal";
import ProductItem from "../../../shared/ProductItem";

const showItems = [
  { value: "4", label: "Show 4" },
  { value: "8", label: "Show 8" },
  { value: "12", label: "Show 12" },
];

const ShopProducts = () => {
  const [showItem, setShowItem] = useState(showItems[0]);
  const [page, setPage] = useState(1);

  const [show, setShow] = useState(false);
  const [showModalItem, setShowModalItem] = useState({});

  const onChangeShowItem = (value) => {
    setShowItem(value);
  };

  const handlePageClick = (page) => {
    console.log("page", page);
    setPage(page.selected + 1);
  };

  const handelProduct = (val) => {
    console.log(val);
    // find item for show modal
    const item = { header: "modal header", body: "modal body" };
    setShowModalItem(item);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleSubmit = () => {
    setShow(false);
  };

  return (
    <>
      <div className="col-xl-9 col-lg-8 col-md-7">
        <div className="filter-bar d-flex flex-wrap align-items-center">
          <div className="sorting">
            <Select
              options={showItems}
              value={showItem}
              inputId="itemShowed"
              instanceId="itemShowed"
              className="nice-select"
              onChange={onChangeShowItem}
            />
          </div>
          <div className="sorting">
            <Select
              options={showItems}
              value={showItem}
              inputId="itemShowed"
              instanceId="itemShowed"
              className="nice-select"
              onChange={onChangeShowItem}
            />
          </div>
          <div className="sorting ml-auto">
            <Select
              options={showItems}
              value={showItem}
              inputId="itemShowed"
              instanceId="itemShowed"
              className="nice-select"
              onChange={onChangeShowItem}
            />
          </div>
        </div>

        <section className="lattest-product-area pb-40 category-list">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <ProductItem handelProduct={handelProduct} />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductItem handelProduct={handelProduct} />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductItem handelProduct={handelProduct} />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductItem handelProduct={handelProduct} />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductItem handelProduct={handelProduct} />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductItem handelProduct={handelProduct} />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductItem handelProduct={handelProduct} />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductItem handelProduct={handelProduct} />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductItem handelProduct={handelProduct} />
            </div>
          </div>
        </section>

        <div className="filter-bar d-flex flex-wrap align-items-center">
          <div className="sorting mr-auto">
            <Select
              options={showItems}
              value={showItem}
              inputId="itemShowed"
              instanceId="itemShowed"
              className="nice-select"
              onChange={onChangeShowItem}
            />
          </div>

          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={10} // length of data
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>

      {/* // TODO if you want show modal when click show more => resolve */}
      <CustomModal
        item={showModalItem}
        show={show}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      />
    </>
  );
};

export default ShopProducts;
