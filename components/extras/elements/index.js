import React from "react";
import ArticlesArea from "./ArticlesArea";
import BlockQuote from "./BlockQuote";
import ButtonsArea from "./ButtonsArea";
import FormElements from "./FormElements";
import ImageGallery from "./ImageGallery";
import Lists from "./Lists";
import SampleText from "./SampleText";
import TablesArea from "./TablesArea";

const Elements = () => {
  return (
    <>
      <SampleText />
      <ButtonsArea />
      <div className="whole-wrap pb-100">
        <div className="container">
          <ArticlesArea />
          <BlockQuote />
          <TablesArea />
          <ImageGallery />
          <Lists />
          <FormElements />
        </div>
      </div>
    </>
  );
};

export default Elements;
