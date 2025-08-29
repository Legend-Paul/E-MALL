import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import indexStyles from "../../index.module.css";
import styles from "./account.module.css";
import { useState } from "react";
import Button from "../../components/button";
import LogOut from "./signout";

export default function Account() {
    const [route, setRoute] = useState("sign-up");
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/").filter(Boolean);
    const lastPath = path[path.length - 1];

    const users = JSON.parse(localStorage.getItem("users"));

    const changeRoute = () => {
        setRoute((route) => (route !== "sign-in" ? "sign-in" : "sign-up"));
        navigate(`/account/${route}`);
    };
    let signedUser = null;
    if (users) signedUser = users.find((user) => user.isSignedIn);

    return (
        <section
            className={`${indexStyles["page"]} ${styles["account-page"]} ${
                styles[`${route !== "sign-up" ? "sign-up-margin" : ""}`]
            }`}
        >
            {!signedUser ? (
                <div className={styles["account"]}>
                    <div
                        className={`${styles["description"]} 
                    }`}
                    >
                        <h2>
                            {lastPath !== "sign-up"
                                ? lastPath === "forgot-password"
                                    ? "Change Passwod"
                                    : "Sign in here"
                                : "Sign up here"}
                        </h2>

                        <p>
                            {lastPath !== "sign-up"
                                ? lastPath === "forgot-password"
                                    ? "Go back to"
                                    : "If you dont have an account"
                                : "If you have an account"}{" "}
                            <button
                                onClick={
                                    lastPath === "forgot-password"
                                        ? () => navigate(-1)
                                        : changeRoute
                                }
                            >
                                {" "}
                                {lastPath === "forgot-password"
                                    ? "Sign In"
                                    : route}
                            </button>
                        </p>
                    </div>
                    <Outlet />
                </div>
            ) : (
                <LogOut />
            )}
        </section>
    );
}
