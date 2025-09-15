// src/pages/Contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div style={styles.container}>
      <motion.h1
        style={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      <motion.div
        style={styles.infoContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p style={styles.info}><strong>Email:</strong> <a href="mailto:lolelsayed1413@gmail.com" style={styles.link}>lolelsayed1413@gmail.com</a></p>
        <p style={styles.info}><strong>Phone:</strong> <a href="tel:+201140631715" style={styles.link}>+201140631715</a></p>
      </motion.div>

      <motion.form
        style={styles.form}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>
        <motion.button
          type="submit"
          style={styles.button}
          whileHover={{ scale: 1.05, backgroundColor: "#e67e22" }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "calc(100vh - 80px)",
    padding: "50px 20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    marginBottom: "30px",
    fontWeight: "bold",
  },
  infoContainer: {
    marginBottom: "40px",
  },
  info: {
    fontSize: "18px",
    margin: "10px 0",
  },
  link: {
    color: "#f39c12",
    textDecoration: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  textarea: {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    resize: "vertical",
    minHeight: "120px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "18px",
    backgroundColor: "#f39c12",
    color: "#111",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
