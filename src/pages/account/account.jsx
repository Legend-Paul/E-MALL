import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import indexStyles from "../../index.module.css";
import styles from "./account.module.css";
import { useState } from "react";

export default function Account() {
    const [route, setRoute] = useState("sign-up");
    const navigate = useNavigate();

    const changeRoute = () => {
        console.log(route);
        setRoute((route) => (route !== "sign-in" ? "sign-in" : "sign-up"));
        navigate(`/account/${route}`);
    };

    return (
        <div className={`${indexStyles["page"]} ${styles["account-page"]}`}>
            <div className={styles["account"]}>
                <div
                    className={`${styles["description"]} 
                    }`}
                >
                    <h2>
                        {route !== "sign-in" ? "Sign in here" : "Sign up here"}
                    </h2>

                    <p>
                        {route !== "sign-in"
                            ? "If you dont have an account"
                            : "If you have an account"}{" "}
                        <button onClick={changeRoute}> {route}</button>
                    </p>

                    {/* clip-path: polygon(100% 0, 100% 100%, 49% 61%, 0 99%, 0 0); */}
                </div>
                <Outlet />
            </div>
        </div>
    );
}
