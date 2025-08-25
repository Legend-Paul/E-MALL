import { NavLink, Outlet, Form } from "react-router-dom";

import styles from "./header.module.css";
import Input from "./input";
import Button from "./button";

export async function Action({ request }) {
    const data = await request.formData();
    console.log(data.get("search"));
    return null;
}

export default function Header() {
    return (
        <div className={styles["header-container"]}>
            <header>
                <div className={styles["logo-search"]}>
                    <h1>
                        <NavLink to="/">E-MALL</NavLink>
                    </h1>

                    <Form method="post" action="/">
                        <Input
                            type={"search"}
                            name={"search"}
                            placehoder={"search item here"}
                        />
                        <Button
                            label={"Search"}
                            type={"submit"}
                            color={"none"}
                        />
                    </Form>
                </div>

                <div className={styles["nav-container"]}>
                    <nav>
                        <ul>
                            <li>
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
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? styles["active"] : ""
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
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
                            <li>
                                <NavLink
                                    to="/sign-in"
                                    className={({ isActive }) =>
                                        isActive ? styles["active"] : ""
                                    }
                                >
                                    Sign in
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <nav className={styles.nav}>
                        <ul>
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
                            <li>
                                <NavLink
                                    to="/orders"
                                    className={({ isActive }) =>
                                        isActive ? styles["active"] : ""
                                    }
                                >
                                    Orders
                                </NavLink>
                            </li>
                            <li>
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
            </header>

            <Outlet />
        </div>
    );
}
