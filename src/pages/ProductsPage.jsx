// src/pages/ProductsPage.jsx
import { motion } from "framer-motion";

// الصور
import tshirt1 from "../assets/products/6.jpg";
import tshirt2 from "../assets/products/7.jpg";
import tshirt3 from "../assets/products/8.webp";

import jeans1 from "../assets/products/9.jpg";
import jeans2 from "../assets/products/10.jpeg";
import jeans3 from "../assets/products/11.jpeg";

import jacket1 from "../assets/products/12.jpeg";
import jacket2 from "../assets/products/13.jpeg";
import jacket3 from "../assets/products/14.jpeg";
import jacket4 from "../assets/products/15.jpeg";

import hoodie1 from "../assets/products/2.webp";
import hoodie2 from "../assets/products/3.webp";
import hoodie3 from "../assets/products/4.webp";
import hoodie4 from "../assets/products/5.png";

const productsData = [
  { category: "T-Shirts", items: [
      { img: tshirt1, price: "$25" },
      { img: tshirt2, price: "$28" },
      { img: tshirt3, price: "$30" },
    ] 
  },
  { category: "Jeans", items: [
      { img: jeans1, price: "$45" },
      { img: jeans2, price: "$40" },
      { img: jeans3, price: "$50" },
    ] 
  },
  { category: "Jackets", items: [
      { img: jacket1, price: "$120" },
      { img: jacket2, price: "$80" },
      { img: jacket3, price: "$100" },
      { img: jacket4, price: "$90" },
    ] 
  },
  { category: "Hoodies", items: [
      { img: hoodie1, price: "$35" },
      { img: hoodie2, price: "$40" },
      { img: hoodie3, price: "$45" },
      { img: hoodie4, price: "$50" },
    ] 
  },
];

export default function ProductsPage({ cart, setCart }) {
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Our Products</h1>
      {productsData.map((section) => (
        <div key={section.category} style={styles.section}>
          <h2 style={styles.categoryTitle}>{section.category}</h2>
          <div style={styles.grid}>
            {section.items.map((product, index) => (
              <motion.div
                key={index}
                style={styles.card}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div style={styles.imageWrapper}>
                  <img src={product.img} alt={section.category} style={styles.image} />
                  <motion.button
                    onClick={() => handleAddToCart(product)}
                    style={styles.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
                <div style={styles.productInfo}>
                  <p style={styles.productPrice}>{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: "50px 20px", maxWidth: "1200px", margin: "0 auto" },
  pageTitle: { textAlign: "center", fontSize: "36px", marginBottom: "50px", fontWeight: "bold" },
  section: { marginBottom: "60px" },
  categoryTitle: { fontSize: "28px", marginBottom: "20px", fontWeight: "600" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" },
  card: { overflow: "hidden", borderRadius: "12px", cursor: "pointer", position: "relative", boxShadow: "0 4px 15px rgba(0,0,0,0.2)", backgroundColor: "#fff" },
  imageWrapper: { position: "relative", overflow: "hidden" },
  image: { width: "100%", height: "250px", objectFit: "cover", display: "block", transition: "transform 0.3s ease" },
  button: { position: "absolute", bottom: "15px", left: "50%", transform: "translateX(-50%)", padding: "10px 25px", backgroundColor: "#f39c12", color: "#111", borderRadius: "30px", border: "none", fontWeight: "bold", cursor: "pointer" },
  productInfo: { padding: "10px 15px", textAlign: "center" },
  productPrice: { fontSize: "14px", fontWeight: "500", color: "#f39c12" },
};
