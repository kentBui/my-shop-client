import React from "react";

const ImageGallery = () => {
  return (
    <div className="section-top-border mt-4">
      <h3>Image Gallery</h3>
      <div className="row gallery-item">
        <div className="col-md-4">
          <a href="https://google.com" className="img-pop-up">
            <div
              className="single-gallery-image"
              style={{ background: "url('/images/element/g1.jpg.webp')" }}
            ></div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="https://google.com" className="img-pop-up">
            <div
              className="single-gallery-image"
              style={{ background: "url('/images/element/g2.jpg.webp')" }}
            ></div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="https://google.com" className="img-pop-up">
            <div
              className="single-gallery-image"
              style={{ background: "url('/images/element/g3.jpg.webp')" }}
            ></div>
          </a>
        </div>
        <div className="col-md-6">
          <a href="https://google.com" className="img-pop-up">
            <div
              className="single-gallery-image"
              style={{ background: "url('/images/element/g4.jpg.webp')" }}
            ></div>
          </a>
        </div>
        <div className="col-md-6">
          <a href="https://google.com" className="img-pop-up">
            <div
              className="single-gallery-image"
              style={{ background: "url('/images/element/g5.jpg.webp')" }}
            ></div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="https://google.com" className="img-pop-up">
            <div
              className="single-gallery-image"
              style={{ background: "url('/images/element/g6.jpg.webp')" }}
            ></div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="https://google.com" className="img-pop-up">
            <div
              className="single-gallery-image"
              style={{ background: "url('/images/element/g7.jpg.webp')" }}
            ></div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="https://google.com" className="img-pop-up">
            <div
              className="single-gallery-image"
              style={{ background: "url('/images/element/g8.jpg.webp')" }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
