import { Form, Link, NavLink, redirect, useActionData } from "react-router-dom";
import styles from "./sign-in-sign-up.module.css";

import Button from "../../components/button";
import Input from "../../components/input";
import toggleSignInUser from "../../utils/toggleSignIn";

export async function Action({ request }) {
    const formDat = await request.formData();
    const email = formDat.get("email");
    const password = formDat.get("password");
    const users = JSON.parse(localStorage.getItem("users"));
    const error = {};
    // !users ? redirect("/account/sign-in") : delete error.className;
    console.log();
    let user = null;
    if (users)
        user = users.find(
            (user) => user.email === email && user.details.password === password
        );
    !user && users ? (error.name = "Inalid email or password") : user;

    if (Object.keys(error).length > 0) return error;

    if (users) {
        const signingUser = users.find((user) => user.email === email);
        toggleSignInUser(users, signingUser);
        return redirect("/");
    } else {
        return redirect("/account/sign-up");
    }
}

export default function SignIn() {
    const error = useActionData();
    return (
        <div
            className={`${styles["form-container"]}
            }`}
        >
            <Form method="post">
                <Input
                    type={"email"}
                    name={"email"}
                    placehoder={"example@gmail.com"}
                    labelName={"Email"}
                />
                <Input
                    type={"password"}
                    name={"password"}
                    placehoder={"********"}
                    labelName={"Password"}
                />
                <p className={styles["error-msg"]}>{error?.name}</p>
                <Link to="/account/forgot-password">Forgot password?</Link>

                <Button type={"submit"} label={"Sign In"} />
            </Form>
        </div>
    );
}
