import React from "react";
import bfisImage from "../assets/bfis_lp_image.jpeg";

const Image = () => {
  return (
    <>
      <style>
        {`
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            overflow: auto !important;
            background: none !important;
          }
          #root {
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
          }
          .full-width-image {
            width: 100vw;
            height: auto;
            display: block;
            max-width: 100vw;
          }
        `}
      </style>
      <img
        src={bfisImage}
        alt="Brookfield School Design"
        className="full-width-image"
        style={{
          width: "100vw",
          height: "auto",
          display: "block",
          margin: 0,
          padding: 0,
          maxWidth: "100vw",
        }}
      />
    </>
  );
};

export default Image;
