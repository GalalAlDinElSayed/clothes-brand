// src/components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      style={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div style={styles.content}>
        <div style={styles.brand}>
          <h2 style={styles.logo}>Ninja Dark</h2>
          <p style={styles.text}>© 2025 Ninja Dark. All rights reserved.</p>
        </div>
        <div style={styles.links}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/products" style={styles.link}>Products</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </div>
      </div>
      <motion.div
        style={styles.socials}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <a href="#" style={styles.socialLink}>Facebook</a>
        <a href="#" style={styles.socialLink}>Instagram</a>
        <a href="#" style={styles.socialLink}>Twitter</a>
      </motion.div>
    </motion.footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto 20px",
    alignItems: "center",
    gap: "20px",
  },
  brand: {
    textAlign: "left",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "14px",
    marginTop: "5px",
  },
  links: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  link: {
    color: "#f39c12",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  socialLink: {
    color: "#f39c12",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
