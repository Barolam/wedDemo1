import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

const ListProduct = () => {
  const navigate = useNavigate();

  // ✅ Dữ liệu sản phẩm điện tử (link ảnh hoạt động)
  const [listproduct] = useState([
    {
      id: 1,
      title: "Laptop Dell XPS 13",
      price: 1299,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.VpqDv69Zd5zyixIVGsq06AHaGM?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      title: "iPhone 15 Pro Max",
      price: 1399,
      image:
        "https://minhtuanmobile.com/uploads/blog/iphone-15-pro-max-co-bao-nhieu-mau-230913041258.jpg",
    },
    {
      id: 3,
      title: "Tai nghe Sony WH-1000XM5",
      price: 399,
      image:
        "https://mainguyen.sgp1.digitaloceanspaces.com/139816/dscf7891-1652374362071-165237436221484655896.jpg",
    },
    {
      id: 4,
      title: "Chuột Logitech MX Master 3S",
      price: 99,
      image:
        "https://product.hstatic.net/200000722513/product/mx-master-3s-mouse-top-view-pale-gray_41dba78b9e384508aa5bc3109f249523_ec963b4f86984fdea690801a3ae8ad35.png",
    },
    {
      id: 5,
      title: "Màn hình Samsung 27'' 4K",
      price: 349,
      image:
        "https://maytinhgiatot.vn/images/product/2036_51286_samsung_ls27r350fhexxv__3_.png",
    },
    {
      id: 6,
      title: "Đồng hồ thông minh Apple Watch Ultra",
      price: 499,
      image:
        "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/12/dong-ho-thong-minh-apple-watch-ultra-lte-49mm-day-alpine-mau-cam-size-s-6389ac6e2285d-02122022144238.jpg",
    },
    {
      id: 7,
      title: "Apple AirPods Pro (2nd Gen)",
      price: 259,
      image:
        "https://m-cdn.phonearena.com/images/reviews/245546-image/BK6A9875.jpg",
    },
    {
      id: 8,
      title: "Máy ảnh không gương lật Canon EOS R10",
      price: 500,
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqvun38biaised",
    },
    {
      id: 9,
      title: "Máy chơi game Nintendo Switch 2",
      price: 512,
      image:
        "https://cdn8.web4s.vn/media/products/1462/9techvn-nintendo-switch-oled-model00006.jpg",
    },
    {
      id: 10,
      title: "Loa thông minh Sonos Roam",
      price: 99,
      image:
        "https://down-vn.img.susercontent.com/file/f8fe50d1f30d11f8e022724c56262810",
    },
    {
      id: 11,
      title: "Máy tính bảng Samsung Galaxy Tab S9",
      price: 899,
      image:
        "https://admin.hoanghamobile.com/Uploads/2023/07/25/galaxy-tab-s9-ultra-6.jpg",
    },
    {
      id: 12,
      title: "Bộ sạc dự phòng 10000 mAh USB‑C nhanh",
      price: 50,
      image:
        "https://down-vn.img.susercontent.com/file/0d6e8d0853f7e23ddc134cab35bc07b9",
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>🛍️ Sản phẩm điện tử nổi bật</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {listproduct.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/sanpham/${p.id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                height: "180px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h4>{p.title}</h4>
            <p style={{ color: "#0078D7", fontWeight: "bold" }}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
