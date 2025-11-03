// src/Chitietsanpham.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./models/product";
import { supabase } from "./supabaseClient";

export default function Chitietsanpham() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: 20 }}>
        <h3>Không tìm thấy sản phẩm!</h3>
        <button onClick={() => navigate("/trang1")}>Quay lại Trang 1</button>
      </div>
    );
  }

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} đã được thêm vào giỏ hàng!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        ⬅ Quay lại
      </button>

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "250px", height: "250px", objectFit: "contain" }}
        />
        <div>
          <h2>{product.title}</h2>
          <p>
            <strong>Giá:</strong> ${product.price}
          </p>
          <p>
            <strong>Loại:</strong> {product.category}
          </p>
          <p style={{ maxWidth: "400px" }}>{product.description}</p>

          {/* Nút thêm vào giỏ hàng */}
          <button
            onClick={() => addToCart(product)}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Thêm vào giỏ hàng
          </button>

          {/* Hiển thị số lượng sản phẩm trong giỏ hàng */}
          <p>Giỏ hàng: {cart.length} sản phẩm</p>
        </div>
      </div>
    </div>
  );
}
