import { Form, redirect, useActionData } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button";
import styles from "./sign-in-sign-up.module.css";

export async function Action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const users = JSON.parse(localStorage.getItem("users"));
    const errors = {};
    let user = null;
    if (users) {
        user = users.some((user) => user.email === email);
    }
    password !== confirmPassword
        ? (errors.passwordMatch = "Password are not equal")
        : delete errors.passwordMatch;
    !users || !user
        ? (errors.emailError = "Email does not exist")
        : delete errors.emailError;
    if (Object.keys(errors).length > 0) return errors;
    const updatedUsers = users.map((user) => {
        if (user.email === email) {
            return {
                ...user,
                ["details"]: {
                    ...user.details,
                    ["password"]: password,
                    ["confirmPassword"]: confirmPassword,
                },
            };
        } else {
            return user;
        }
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return redirect("/account/sign-in");
}

export default function ForgotPassword() {
    const data = useActionData();

    return (
        <div className={styles["form-container"]}>
            <Form method="POST">
                <Input
                    labelName={"Email"}
                    type={"email"}
                    name={"email"}
                    placehoder={"example@gmail.com"}
                />
                <Input
                    labelName={"Password"}
                    type={"password"}
                    name={"password"}
                    placehoder={"********"}
                />
                <Input
                    labelName={"Confirm Password"}
                    type={"password"}
                    name={"confirm-password"}
                    placehoder={"********"}
                />
                <p className={styles["error-msg"]}>
                    {data?.emailError ? data?.emailError : data?.passwordMatch}
                </p>
                <Button type="submit" label="Change Password" />
            </Form>
        </div>
    );
}
