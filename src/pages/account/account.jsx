import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import indexStyles from "../../index.module.css";
import styles from "./account.module.css";
import { useState } from "react";
import Button from "../../components/button";

export default function Account() {
    const [route, setRoute] = useState("sign-up");
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/").filter(Boolean);
    const lastPath = path[path.length - 1];

    // localStorage.clear();
    const users = JSON.parse(localStorage.getItem("users"));

    const changeRoute = () => {
        setRoute((route) => (route !== "sign-in" ? "sign-in" : "sign-up"));
        navigate(`/account/${route}`);
    };
    let signedUser = null;
    if (users) signedUser = users.find((user) => user.isSignedIn);

    console.log(localStorage);

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
            ) : (
                <LogOut />
            )}
        </section>
    );
}

function LogOut() {
    const navigate = useNavigate();
    const users = JSON.parse(localStorage.getItem("users"));
    let signedUser = null;
    if (users) signedUser = users.find((user) => user.isSignedIn);
    console.log(signedUser);

    function handleSignoutClick() {
        const updatedUsers = users.map((user) => {
            console.log(user);
            console.log(signedUser);
            console.log(localStorage);
            return user.email === signedUser?.email
                ? { ...user, ["isSignedIn"]: false }
                : user;
        });
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate("/account/sign-in");
        console.log("finished");
    }

    return (
        <div className={styles["sign-out"]}>
            <h2>Hello, {signedUser ? signedUser.details.username : ""}</h2>
            <p>You have already signed in to your account</p>
            <Button label="Sign Out" handleClick={handleSignoutClick} />
        </div>
    );
}
