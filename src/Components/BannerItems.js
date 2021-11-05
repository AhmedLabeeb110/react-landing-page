import React from "react";
import { Button } from "react-bootstrap";
import Arrow2 from "../Content/Arrow2.svg";
import Arrow1 from "../Content/Arrow1.svg";
import "../styles.css";


const BannerItems = () => {
  return (
    <div>
      <h3 className="banner-main-line">A picture is worth a thousand words</h3>
      <p className="banner-main-paragraph" style={{ color: "#534F4F" }}>
        It clearly and beautifully captures your emotions- the joy, the
        laughter, the tears, you name it. Our pride is in offering the best
        shoots as we help you tell your story in photos.
      </p>
      <div className="arrow-left">
        <img src={Arrow2} alt="arrow2" />
      </div>
      <Button
        className="rounded-pill round-btn border-3"
        variant="outline-danger"
        size="lg"
        style={{ color: "black" }}
      >
        View Gallery
      </Button>
      <div className="arrow-right">
        <img src={Arrow1} alt="arrow1" />
      </div>
    </div>
  );
};

export default BannerItems;
