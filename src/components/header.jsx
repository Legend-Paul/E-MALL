import { NavLink, Outlet, Form } from "react-router-dom";

import styles from "./header.module.css";
import Input from "./input";
import Button from "./button";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import Footer from "./footer";

export async function Action({ request }) {
    const data = await request.formData();
    console.log(data.get("search"));
    return null;
}

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    function handleBurderClick() {
        setToggleMenu((state) => !state);
    }

    return (
        <div className={styles["content-container"]}>
            <div className={styles["header-styles"]}>
                <header>
                    <div className={styles["logo-search"]}>
                        <NavLink to="/">
                            <img
                                src={logo}
                                alt="Logo image with dark blue background"
                            />
                        </NavLink>

                        <Form method="post" action="/">
                            <Input
                                type={"search"}
                                name={"search"}
                                placehoder={"search item here"}
                            />
                            <Button
                                label={<i className="bi bi-search"></i>}
                                type={"submit"}
                                color={"none"}
                            />
                        </Form>
                    </div>

                    <div className={styles["nav-container"]}>
                        <nav>
                            <ul>
                                <li className={styles["burger-md"]}>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? styles["active"] : ""
                                        }
                                    >
                                        {/* <i className="bi bi-house-door-fill"></i> */}
                                        Home
                                    </NavLink>
                                </li>
                                <li className={styles["burger-md"]}>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            isActive ? styles["active"] : ""
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className={styles["burger-md"]}>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            isActive ? styles["active"] : ""
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>

                                <li className={styles["burger-sm"]}>
                                    <NavLink
                                        to="/orders"
                                        className={({ isActive }) =>
                                            isActive ? styles["active"] : ""
                                        }
                                    >
                                        Orders
                                    </NavLink>
                                </li>
                                <li className={styles["burger-md"]}>
                                    <NavLink
                                        to="/liked"
                                        className={({ isActive }) =>
                                            isActive ? styles["active"] : ""
                                        }
                                    >
                                        Liked
                                    </NavLink>
                                </li>
                                <li className={styles["burger-xsm"]}>
                                    <NavLink
                                        to="/account"
                                        className={({ isActive }) =>
                                            isActive ? styles["active"] : ""
                                        }
                                    >
                                        Account
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/cart"
                                        className={({ isActive }) =>
                                            isActive ? styles["active"] : ""
                                        }
                                    >
                                        Cart
                                    </NavLink>
                                </li>
                                <li
                                    className={`${styles["burger-cont"]} ${
                                        toggleMenu
                                            ? styles["burger-show"]
                                            : styles["burger-hide"]
                                    }`}
                                    onClick={handleBurderClick}
                                >
                                    <div className={styles["burger"]}></div>
                                    <div className={styles["burger"]}></div>
                                    <div className={styles["burger"]}></div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div
                    className={`${styles["menu"]} ${
                        toggleMenu ? styles["show"] : styles["hide"]
                    }`}
                >
                    <nav>
                        <ul>
                            <li className={styles["burger-md"]}>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? styles["active"] : ""
                                    }
                                >
                                    {/* <i className="bi bi-house-door-fill"></i> */}
                                    Home
                                </NavLink>
                            </li>
                            <li className={styles["burger-md"]}>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? styles["active"] : ""
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className={styles["burger-md"]}>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? styles["active"] : ""
                                    }
                                >
                                    {/* <i class="bi bi-chat-right-dots-fill"></i> */}
                                    Contact
                                </NavLink>
                            </li>
                            <li className={styles["burger-sm"]}>
                                <NavLink
                                    to="/orders"
                                    className={({ isActive }) =>
                                        isActive ? styles["active"] : ""
                                    }
                                >
                                    Orders
                                </NavLink>
                            </li>
                            <li className={styles["burger-xsm"]}>
                                <NavLink
                                    to="/account"
                                    className={({ isActive }) =>
                                        isActive ? styles["active"] : ""
                                    }
                                >
                                    Account
                                </NavLink>
                            </li>
                            <li className={styles["burger-md"]}>
                                <NavLink
                                    to="/liked"
                                    className={({ isActive }) =>
                                        isActive ? styles["active"] : ""
                                    }
                                >
                                    Liked
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}
