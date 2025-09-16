// src/pages/CheckoutPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CheckoutPage({ cart }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) return alert("Please enter your name and phone number.");

    try {
      await addDoc(collection(db, "orders"), {
        name,
        phone,
        cart,
        createdAt: new Date(),
      });
      setSuccess(true);
      setName("");
      setPhone("");
    } catch (err) {
      console.error(err);
      alert("Error submitting order!");
    }
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 style={styles.title}>Checkout</h1>
      {success && <p style={styles.success}>✅ Your order has been placed!</p>}

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Submit Order
        </button>
      </form>

      <div style={styles.cartPreview}>
        <h3>Cart Preview:</h3>
        {cart.length === 0 && <p>No items in cart.</p>}
        {cart.map((item, idx) => (
          <div key={idx} style={styles.cartItem}>
            <img src={item.img} alt="product" style={styles.cartImg} />
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  success: {
    color: "green",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    fontSize: "18px",
    backgroundColor: "#f39c12",
    color: "#111",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cartPreview: {
    marginTop: "30px",
    textAlign: "left",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "10px",
  },
  cartImg: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};
