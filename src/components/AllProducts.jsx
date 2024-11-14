import React, { useState, useEffect } from "react";
import { db } from "./Firebase"; // Import your Firebase configuration
import { collection, getDocs } from "firebase/firestore";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "shirts"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched Products:", productList); // Log to inspect data
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.allProductsSection}>
      <h2 className={styles.title}>All Products</h2>
      <div className={styles.productGrid}>
        {/* Display products fetched from Firestore */}
        {products.length > 0 ? (
          products.map((product) => {
            console.log("Product Image URL:", product.image); // Check the image URL
            return (
              <div key={product.id} className={styles.productItem}>
                {/* Check if image URL is present, else show a default image */}
                <img
                  src={
                    product.image ? product.image : "/path/to/default/image.jpg"
                  }
                  alt={product.name}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>${product.price}</p>
              </div>
            );
          })
        ) : (
          <p>No products available</p>
        )}
      </div>
      <button className={styles.seeMoreButton}>See More &rarr;</button>
    </section>
  );
};

export default AllProducts;
