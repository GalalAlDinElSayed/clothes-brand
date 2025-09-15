// src/pages/About.jsx
import { motion } from "framer-motion";
import aboutImg from "../assets/16.jpeg"; // صورة تمثل البراند

export default function About() {
  return (
    <div style={styles.container}>
      {/* Section صورة + نص */}
      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.textContainer}>
          <h1 style={styles.title}>About Ninja Dark</h1>
          <p style={styles.paragraph}>
            Ninja Dark is a fashion brand committed to providing stylish, high-quality clothing for everyone. 
            Our designs combine comfort, sustainability, and trendiness to create outfits you can feel proud of. 
            Join our community and express your personal style with confidence.
          </p>
        </div>
        <motion.img
          src={aboutImg}
          alt="About Ninja Dark"
          style={styles.image}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "calc(100vh - 80px)",
    padding: "50px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
    maxWidth: "1200px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  textContainer: {
    flex: 1,
    minWidth: "300px",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#333",
  },
  image: {
    flex: 1,
    maxWidth: "500px",
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
};
