import Image from "next/image";
import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import ProductComments from "./comments";
import ProductDescription from "./description";
import ProductReviews from "./reviews";
import ProductSpecification from "./specification";

const ProductDescriptionArea = () => {
  return (
    <section className="product_description_area">
      <div className="container">
        <Tabs defaultActiveKey="Reviews">
          <Tab eventKey="Description" title="Description">
            <ProductDescription />
          </Tab>
          <Tab eventKey="Specification" title="Specification">
            <ProductSpecification />
          </Tab>
          <Tab eventKey="Comments" title="Comments">
            <ProductComments />
          </Tab>
          <Tab eventKey="Reviews" title="Reviews">
            <ProductReviews />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductDescriptionArea;
