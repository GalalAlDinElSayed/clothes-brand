// src/pages/CartPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase"; // تأكد من إعداد Firebase
import { collection, addDoc } from "firebase/firestore";

export default function CartPage({ cart, setCart }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    if (!name || !phone || !address) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "orders"), {
        name,
        phone,
        address,
        products: cart,
        createdAt: new Date(),
      });
      alert("Order placed successfully!");
      setCart([]); // تفريغ السلة بعد الطلب
      setName("");
      setPhone("");
      setAddress("");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order");
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Cart</h1>
      {cart.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.grid}>
            {cart.map((product, index) => (
              <motion.div
                key={index}
                style={styles.card}
                whileHover={{ scale: 1.05 }}
              >
                <img src={product.img} alt="product" style={styles.image} />
                <p style={styles.price}>{product.price}</p>
              </motion.div>
            ))}
          </div>

          <div style={styles.form}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={styles.input}
            />
            <motion.button
              onClick={handlePlaceOrder}
              style={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "50px 20px", maxWidth: "800px", margin: "0 auto" },
  title: { textAlign: "center", fontSize: "36px", marginBottom: "30px" },
  empty: { textAlign: "center", fontSize: "18px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  card: { padding: "10px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center" },
  image: { width: "100%", height: "150px", objectFit: "cover", marginBottom: "10px" },
  price: { fontWeight: "bold", color: "#f39c12" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "10px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc" },
  button: { padding: "12px", fontSize: "16px", backgroundColor: "#f39c12", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" },
};
