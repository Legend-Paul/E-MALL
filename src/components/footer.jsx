import styles from "./footer.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Footer() {
    return (
        <footer className={styles["footer-styles"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-top"]}>
                    <div className={styles["image-container"]}>
                        <img src={logo} alt="logo image" />
                    </div>
                    <div className={styles["footer-section"]}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <Link to="#">About Us</Link>
                            </li>
                            <li>
                                <Link to="#">Careers</Link>
                            </li>
                            <li>
                                <Link to="#">Press</Link>
                            </li>
                            <li>
                                <Link to="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <h3>Support</h3>
                        <ul>
                            <li>
                                <Link to="#">FAQs</Link>
                            </li>
                            <li>
                                <Link to="#">Shipping & Returns</Link>
                            </li>
                            <li>
                                <Link to="#">Order Tracking</Link>
                            </li>
                            <li>
                                <Link to="#">Feedback</Link>
                            </li>
                        </ul>
                    </div> */}
                    <div>
                        <h3>Follow Us</h3>
                        <div className={styles["social-icons"]}>
                            <Link to="#" className={styles["icon"]}>
                                <i class="bi bi-facebook"></i>
                            </Link>
                            <Link to="#" className={styles["icon"]}>
                                <i class="bi bi-twitter"></i>
                            </Link>
                            <Link to="#" className={styles["icon"]}>
                                <i class="bi bi-instagram"></i>
                            </Link>
                            <Link to="#" className={styles["icon"]}>
                                <i class="bi bi-linkedin"></i>
                            </Link>
                        </div>
                        <div className={styles["footer-section"]}>
                            <h3>Contact Us</h3>
                            <div
                                className={`${styles["email"]} ${styles["contact-item"]}`}
                            >
                                <i class="bi bi-envelope-fill"></i>
                                <Link to="mailto:qamunyap950@gnail.com">
                                    qamunyap950@gmail.com
                                </Link>
                            </div>
                            <div
                                className={`${styles["phone"]} ${styles["contact-item"]}`}
                            >
                                <i class="bi bi-telephone-fill"></i>
                                <Link to="tel:+1234567890">+123 456 7890</Link>
                            </div>
                            <div
                                className={`${styles["address"]} ${styles["contact-item"]}`}
                            >
                                <i class="bi bi-geo-alt-fill"></i>
                                <p> Nyeri, Country</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["footer-bottom"]}>
                        <p>
                            &copy; {new Date().getFullYear()} Your Company. All
                            rights reserved.
                        </p>
                        <p>Privacy policy </p>
                        <p>Terms of Service</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
