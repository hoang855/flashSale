import React from "react";
import "./FlashSaleItem.css";

const FlashSaleItem = ({ imgUrl, title, price, price_Sale }) => {
  return (
    <div className="flash-sale__item">
      <div className="flash-sale__item_img">
        <img src={imgUrl} alt="/"></img>
      </div>
      <div className="flash-sale__item_title">
        <h3>{title}</h3>
        <div className="flash-sale__item_title__price">
          <span>
            <p className="title__price_regula">{price}</p>
            <p className="title__price_sale">{price_Sale}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleItem;
