import React from "react";
import styles from "./NewCollection.module.css";


const NewCollection = () => {
 return (
   <section className={styles.collectionSection}>
     {" "}
     <h2 className={styles.title}>Season Collections</h2>{" "}
     <div className={styles.collectionFlex}>
       {" "}
       <div className={styles.collectionItem}>
         {" "}
         <img src={require("./../images/hoodie.png")} alt="hoodie" />{" "}
         <button className={styles.moreButton}>More</button>{" "}
       </div>{" "}
       <div className={styles.collectionItem}>
         {" "}
         <img src={require("./../images/jacket.png")} alt="jacket" />{" "}
         <button className={styles.moreButton}>More</button>{" "}
       </div>{" "}
       <div className={styles.collectionItem}>
         {" "}
         <img src={require("./../images/pullover.png")} alt="pullover" />{" "}
         <button className={styles.moreButton}>More</button>{" "}
       </div>{" "}
     </div>{" "}
   </section>
 );
};
export default NewCollection;