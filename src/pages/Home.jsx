import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import NewCollection from "../components/NewCollection";
import AllProducts from "../components/AllProducts";
import Signupp from "../components/SignUpp";
import Footer from "../components/Footer";
import Bfn from "../components/Bfn";




const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <NewCollection />
      <AllProducts />
      <Signupp />
      <Footer />
      <Bfn />
      
    </>
  );
};

export default Home;
