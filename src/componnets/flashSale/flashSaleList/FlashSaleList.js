import React from "react";
import FlashSaleItem from "../flashSaleItem/FlashSaleItem";
import "./FlashSaleList.css";

const FlashSaleList = () => {
  const products = [
    {
      id: 1,
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0054/0567/1479/products/18_9f8cd3d5-6a98-4ae0-ac12-25fd56bedfe1_940x.png?v=1605252568",
      title: "8 Granddad shirt",
      price: "$30.00",
      price_Sale: "$23.00",
    },
    {
      id: 2,
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0054/0567/1479/products/15_f9a77ba1-6439-471d-be7e-f23c87b643a9_940x.png?v=1605251889",
      title: "8 Granddad shirt",
      price: "$30.00",
      price_Sale: "$23.00",
    },
    {
      id: 3,
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0054/0567/1479/products/6_ab0fd6e2-8566-4b89-862b-d9f603846c76_940x.png?v=1605251354",
      title: "8 Granddad shirt",
      price: "$30.00",
      price_Sale: "$23.00",
    },
    {
      id: 4,
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0054/0567/1479/products/2_7e273de5-9356-489b-bf9e-600e1add4790_940x.png?v=1605252316",
      title: "8 Granddad shirt",
      price: "$30.00",
      price_Sale: "$23.00",
    },
    {
      id: 5,
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0054/0567/1479/products/12_e26513ef-b372-40bc-b1aa-8c43d914d315_940x.png?v=1605251656",
      title: "Red T Shirt For Man",
      price: "$30.00",
      price_Sale: "$23.00",
    },
  ];

  return (
    <div className="flash-sale__item-container">
      {products.map((item) => {
        return (
          <FlashSaleItem
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            price={item.price}
            price_Sale={item.price_Sale}
          />
        );
      })}
    </div>
  );
};

export default FlashSaleList;
