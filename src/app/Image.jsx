import React from "react";
import bfisImage from "../assets/bfis_lp_image.png";

const Image = () => {
  return (
    <>
      <style>
        {`
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
            overflow: auto !important;
            background: none !important;
          }
          #root {
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
          }
        `}
      </style>
      <div
        style={{
          width: "100vw",
          height: "300vh",
          backgroundImage: `url(${bfisImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          margin: 0,
          padding: 0,
        }}
      />
    </>
  );
};

export default Image;
