import React from "react";
import { NavLink } from "react-router-dom";
import FlashSaleList from "./flashSaleList/FlashSaleList";
import "./index.css";

const activeNavLinkClassName = (navLinkStatus) => {
  console.log(navLinkStatus);
  return navLinkStatus.isActive ? "active" : "";
};

const index = () => {
  const timeList = [
    {
      id: 1,
      name_Date: "09:00",
      name_Title: "Đang Diễn Ra",
    },
    {
      id: 2,
      name_Date: "12:00",
      name_Title: "Sắp Diễn Ra",
    },
    {
      id: 3,
      name_Date: "15:00",
      name_Title: "Sắp Diễn Ra",
    },
    {
      id: 4,
      name_Date: "17:00",
      name_Title: "Sắp Diễn Ra",
    },
    {
      id: 5,
      name_Date: "19:00",
      name_Title: "Sắp Diễn Ra",
    },
  ];

  return (
    <div className="container">
      <div className="container-main">
        <div className="container-title-banner">
          <div className="banner-img">
            <img
              src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="/"
            />
          </div>
          <div className="container-title-banner-title">
            <div className="banner-title_time">
              <div className="title_time">
                <h1 className="title_time-time __1">Flash_Sale</h1>
              </div>
            </div>
            <div className="banner-title_time">
              <div className="title_time">
                <p>BẮT ĐẦU SAU</p>
                <h1 className="title_time-time">02:25:39</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-main__time">
          <ul>
            {timeList.map((item) => {
              return (
                <li>
                  <NavLink
                    className={activeNavLinkClassName}
                    to={"/" + item.id}
                  >
                    <span>{item.name_Date}</span>
                    <span>{item.name_Title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="main-item">
          <FlashSaleList />
        </div>
      </div>
    </div>
  );
};

export default index;
