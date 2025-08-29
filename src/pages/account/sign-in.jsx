import { Form, Link, NavLink, redirect, useActionData } from "react-router-dom";
import styles from "./sign-in-sign-up.module.css";

import Button from "../../components/button";
import Input from "../../components/input";

export async function Action({ request }) {
    const formDat = await request.formData();
    const email = formDat.get("email");
    const password = formDat.get("password");
    const users = JSON.parse(localStorage.getItem("users"));
    const error = {};
    // !users ? redirect("/account/sign-in") : delete error.className;
    if (users)
        users.some((user) => user.email !== email)
            ? (error.name = "Inalid email or password")
            : delete error.className;
    if (users) {
        const user = users.find((user) => user.email === email);
        if (user)
            user.details.password !== password
                ? (error.name = "Inalid email or password")
                : delete error.className;
    }

    if (Object.keys(error).length > 0) return error;
    return !users ? redirect("/account/sign-up") : redirect("/");
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

                <Button type={"submit"} label={"Sign In"} />
            </Form>
        </div>
    );
}
