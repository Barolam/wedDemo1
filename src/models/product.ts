// src/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Laptop Dell XPS 13",
    price: 1299,
    description:
      'Laptop Dell XPS 13 – màn hình 13.4" FHD+, Intel i7, 16GB RAM, 512GB SSD. Thiết kế mỏng nhẹ, pin lâu, phù hợp làm việc di động.',
    category: "electronics",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.VpqDv69Zd5zyixIVGsq06AHaGM?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: {
      rate: 4.7,
      count: 150,
    },
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max",
    price: 1399,
    description:
      "iPhone 15 Pro Max – màn hình 6.7 inch, chip A17 Pro, camera 48MP, hỗ trợ 5G, iOS mới nhất, chống nước và bụi.",
    category: "electronics",
    image:
      "https://minhtuanmobile.com/uploads/blog/iphone-15-pro-max-co-bao-nhieu-mau-230913041258.jpg",
    rating: {
      rate: 4.9,
      count: 210,
    },
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    price: 399,
    description:
      "Tai nghe chống ồn Sony WH-1000XM5, pin 30 giờ, kết nối Bluetooth 5.2, âm thanh chất lượng cao, micro đàm thoại rõ ràng.",
    category: "electronics",
    image:
      "https://mainguyen.sgp1.digitaloceanspaces.com/139816/dscf7891-1652374362071-165237436221484655896.jpg",
    rating: {
      rate: 4.8,
      count: 180,
    },
  },
  {
    id: 4,
    title: "Logitech MX Master 3S",
    price: 99,
    description:
      "Chuột không dây Logitech MX Master 3S, đa nút tuỳ chỉnh, cảm biến 4000 DPI, pin dùng 70 ngày, kết nối đa thiết bị.",
    category: "electronics",
    image:
      "https://product.hstatic.net/200000722513/product/mx-master-3s-mouse-top-view-pale-gray_41dba78b9e384508aa5bc3109f249523_ec963b4f86984fdea690801a3ae8ad35.png",
    rating: {
      rate: 4.6,
      count: 95,
    },
  },
  {
    id: 5,
    title: 'Samsung 27" 4K Monitor',
    price: 349,
    description:
      "Màn hình Samsung 27 inch 4K UHD, tấm nền IPS, viền mỏng, hỗ trợ HDR, gam màu rộng, thích hợp đồ họa và chơi game.",
    category: "electronics",
    image:
      "https://maytinhgiatot.vn/images/product/2036_51286_samsung_ls27r350fhexxv__3_.png",
    rating: {
      rate: 4.5,
      count: 120,
    },
  },
  {
    id: 6,
    title: "Apple Watch Ultra",
    price: 499,
    description:
      "Apple Watch Ultra – khung titan, màn hình Retina Always-On, đo nhịp tim, GPS, chống nước 100m, pin 36 giờ.",
    category: "electronics",
    image:
      "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/12/dong-ho-thong-minh-apple-watch-ultra-lte-49mm-day-alpine-mau-cam-size-s-6389ac6e2285d-02122022144238.jpg",
    rating: {
      rate: 4.8,
      count: 160,
    },
  },
  {
    id: 7,
    title: "Apple AirPods Pro 2",
    price: 259,
    description:
      "Tai nghe AirPods Pro 2 – chống ồn chủ động, Spatial Audio, pin 6 giờ, sạc không dây MagSafe, tích hợp Siri.",
    category: "electronics",
    image:
      "https://m-cdn.phonearena.com/images/reviews/245546-image/BK6A9875.jpg",
    rating: {
      rate: 4.9,
      count: 200,
    },
  },
  {
    id: 8,
    title: "Canon EOS R10",
    price: 500,
    description:
      "Máy ảnh không gương lật Canon EOS R10 – 24.2MP, quay phim 4K 60fps, ISO 100-32000, tích hợp Wi-Fi và Bluetooth.",
    category: "electronics",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqvun38biaised",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 9,
    title: "Nintendo Switch OLED ",
    price: 512,
    description:
      "Nintendo Switch OLED – màn hình 7 inch, pin 9 giờ, chơi ở chế độ cầm tay hoặc dock TV, hỗ trợ các game mới nhất.",
    category: "electronics",
    image:
      "https://cdn8.web4s.vn/media/products/1462/9techvn-nintendo-switch-oled-model00006.jpg",
    rating: {
      rate: 4.8,
      count: 170,
    },
  },
  {
    id: 10,
    title: "Sonos Roam Speaker",
    price: 99,
    description:
      "Loa Sonos Roam – di động, chống nước IP67, Bluetooth & Wi-Fi, pin 10 giờ, tích hợp trợ lý giọng nói Alexa/Google Assistant.",
    category: "electronics",
    image:
      "https://down-vn.img.susercontent.com/file/f8fe50d1f30d11f8e022724c56262810",
    rating: {
      rate: 4.6,
      count: 100,
    },
  },
  {
    id: 11,
    title: "Samsung Galaxy Tab S9",
    price: 899,
    description:
      "Tablet Samsung Galaxy Tab S9 – màn hình 11 inch AMOLED, Snapdragon 8 Gen 2, hỗ trợ S-Pen, pin 8000 mAh, đa nhiệm mượt mà.",
    category: "electronics",
    image:
      "https://admin.hoanghamobile.com/Uploads/2023/07/25/galaxy-tab-s9-ultra-6.jpg",
    rating: {
      rate: 4.7,
      count: 149,
    },
  },
  {
    id: 12,
    title: "Power Bank 10000mAh USB-C",
    price: 50,
    description:
      "Sạc dự phòng 10000mAh – hỗ trợ sạc nhanh USB-C, pin lithium polymer, thiết kế nhỏ gọn, dễ mang theo.",
    category: "electronics",
    image:
      "https://down-vn.img.susercontent.com/file/0d6e8d0853f7e23ddc134cab35bc07b9",
    rating: {
      rate: 4.5,
      count: 80,
    },
  },
];
