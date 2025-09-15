// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.webp"; // ✅ صورة الخلفية

function HomePage() {
  return (
    <div style={{ ...styles.container, backgroundImage: `url(${heroImage})` }}>
      <div style={styles.overlay}>
        {/* عنوان الصفحة */}
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to{" "}
          <span style={styles.brandText}>
            Ninja Dark
          </span>
        </motion.h1>

        {/* وصف بسيط */}
        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover the latest fashion trends with style and comfort.
        </motion.p>

        {/* زرار Shop Now */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 120 }}
        >
          <Link to="/products" style={styles.button}>
            Shop Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    color: "#fff",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.65)", // ✅ طبقة شفافة
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
  },
  title: {
    fontSize: "52px",
    marginBottom: "20px",
    fontWeight: "bold",
    textShadow: "2px 2px 10px rgba(0,0,0,0.7)", // ✅ نص واضح
  },
  brandText: {
    background: "linear-gradient(90deg, #f39c12, #e74c3c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "40px",
    maxWidth: "650px",
    lineHeight: "1.6",
    textShadow: "1px 1px 8px rgba(0,0,0,0.6)", // ✅ وضوح أكتر
  },
  button: {
    padding: "14px 35px",
    fontSize: "18px",
    background: "linear-gradient(90deg, #f39c12, #e67e22)",
    color: "#111",
    border: "none",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  },
};

export default HomePage;
