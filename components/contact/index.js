import React from "react";
import dynamic from "next/dynamic";
import SendMessage from "./SendMessage";

const Map = dynamic(() => import("./CustomMap"), { ssr: false });

const Contact = () => {
  return (
    <div className="contact_area section_gap_bottom">
      <div className="container">
        <Map />
        <SendMessage />
      </div>
    </div>
  );
};

export default Contact;
