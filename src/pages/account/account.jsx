import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import indexStyles from "../../index.module.css";
import styles from "./account.module.css";
import { useState } from "react";

export default function Account() {
    const [route, setRoute] = useState("sign-up");
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/").filter(Boolean);
    const lastPath = path[path.length - 1];

    const changeRoute = () => {
        console.log(route);
        setRoute((route) => (route !== "sign-in" ? "sign-in" : "sign-up"));
        navigate(`/account/${route}`);
    };
    console.log(lastPath);
    console.log(
        route === "sign-up" || lastPath === "sign-up"
            ? "Sign in here"
            : "Sign up here"
    );

    return (
        <section
            className={`${indexStyles["page"]} ${styles["account-page"]} ${
                styles[`${route !== "sign-up" ? "sign-up-margin" : ""}`]
            }`}
        >
            <div className={styles["account"]}>
                <div
                    className={`${styles["description"]} 
                    }`}
                >
                    <h2>
                        {lastPath !== "sign-up"
                            ? "Sign in here"
                            : "Sign up here"}
                    </h2>

                    <p>
                        {lastPath !== "sign-up"
                            ? "If you dont have an account"
                            : "If you have an account"}{" "}
                        <button onClick={changeRoute}> {route}</button>
                    </p>
                </div>
                <Outlet />
            </div>
        </section>
    );
}

function LogOut() {
    const username = JSON.parse(localStorage.getItem());
    return (
        <div>
            <h2>Log Out</h2>.
        </div>
    );
}
