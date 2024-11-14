import React, { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase"; // Import the initialized auth instance
import { useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css";

const Signupp = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("./../UserPage");
    } catch (error) {
      setError("Google sign-in error: " + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      setError("Sign-out error: " + error.message);
    }
  };

  return (
    <section className={styles.signupSection}>
      <div className={styles.left}>
        <h2>Get more benefits by Sign Up & Join Mejiwoo Community!</h2>
        <ul>
          <li>FREE Special Gift to a new member</li>
          <li>Get 2x JIWOO Points to purchase items</li>
          <li>Get special voucher code every month</li>
          <li>Claim Voucher Disc. Up To 50%</li>
        </ul>
      </div>
      <div className={styles.right}>
        <form className={styles.form}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit" className={styles.signupButton}>
            SIGN UP
          </button>
        </form>
        <p>Or</p>
        {user ? (
          <>
            <button
              className={styles.userPageButton}
              onClick={() => navigate("./../UserPage")}
            >
              Go to User Page
            </button>
            <button onClick={handleSignOut} className={styles.signOutButton}>
              Sign Out
            </button>
          </>
        ) : (
          <button onClick={handleGoogleSignIn} className={styles.googleButton}>
            Sign in with Google
          </button>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </section>
  );
};

export default Signupp;
