import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((res) => setData(res.data.products))
            .catch((error) => console.log(error));
    }, []);
    console.log(data);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Fake Api's Fake Products 🤷‍♂️</h1>
            <div style={styles.grid}>
                {data.map((items) => (
                    <div id={items.id} style={styles.card}>
                        <img src={items.thumbnail} alt={items.title} style={styles.image} />
                        <h2 style={styles.title}>{items.title}</h2>
                        <p style={styles.price}>Price: ${items.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

    const styles = {
            container: {
              textAlign: "center",
              padding: "40px 20px",
              backgroundColor: "#f8f9fa",
              minHeight: "100vh",
            },
            heading: {
              fontSize: "2.5rem",
              marginBottom: "40px",
              color: "#333",
              fontWeight: "bold",
            },
            grid: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              padding: "0 20px",
              maxWidth: "1200px",
              margin: "0 auto",
            },
            card: {
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              overflow: "hidden",
            },
            image: {
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "15px",
            },
            title: {
              fontSize: "1.25rem",
              margin: "10px 0",
              color: "#333",
              fontWeight: "600",
            },
            price: {
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#28a745",
              margin: "10px 0",
            },
};
export default Banner;
