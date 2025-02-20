import React, { useState } from "react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("Recent");

  const images = [
    {
      id: 1,
      imageUrl:
        "https://static.mk.ru/upload/entities/2023/07/27/05/articles/facebookPicture/6c/b2/44/07/853d7e52fe2544b87f3e184a8ee378d9.jpg",
      time: "10 mins ago",
    },
    {
      id: 2,
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/05/58/77/41/1000_F_558774154_25rjUEqik04zvz679RfPOEFpGWkIsKjW.jpg",
      time: "20 mins ago",
    },
    {
      id: 3,
      imageUrl:
        "https://i.ytimg.com/vi/g9b4C2E5uOU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEMgXyhlMA8=&amp;rs=AOn4CLBgPCwINW5bmmSc3MkkOAUs428Tiw",
      time: "30 mins ago",
    },
    {
      id: 4,
      imageUrl:
        "https://avatars.yandex.net/get-music-content/10874616/ad5a8297.a.29968084-1/m1000x1000?webp=false",
      time: "40 mins ago",
    },
    {
      id: 5,
      imageUrl:
        "https://steamuserimages-a.akamaihd.net/ugc/93854504777963555/7932DF19518D730DD0E1612DDA5032FA24DF1557/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
      time: "50 mins ago",
    },
    {
      id: 6,
      imageUrl:
        "https://image.winudf.com/v2/image/Y29tLnNwYWNld2FsbHBhcGVyLmhkLnNwYWNlcGljdHVyZXMucGhvdG9zLmJhY2tncm91bmQuY3V0ZS5jb29sLmFydC5zcGFjZWltYWdlcy5oZC5mcmVlX3NjcmVlbl80XzE1MzMwMjU1NDNfMDQy/screen-4.jpg?fakeurl=1&type=.jpg",
      time: "50 mins ago",
    },
    {
      id: 7,
      imageUrl:
        "https://cm.author.today/content/2023/08/25/6521f94b376443f5a9c0654078c5e5c7.jpg",
      time: "50 mins ago",
    },
    {
      id: 8,
      imageUrl:
        "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F4c1851d3-9053-4628-9ad8-f465947990fe_1280x720.jpeg",
      time: "50 mins ago",
    },
  ];

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <h2 className="dTopic">Explore AI Generated Images</h2>

        <div className="dMenu">
          <ul>
            {["Recent", "Popular", "Trending"].map((category) => (
              <li
                key={category}
                className={`menu-item ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="content-container">
          <div className="image-grid">
            {images.map((img) => (
              <ImageCard key={img.id} imageUrl={img.imageUrl} time={img.time} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
