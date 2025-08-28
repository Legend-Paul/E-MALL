import styles from "./sign-in-sign-up.module.css";
import { Form, NavLink, useActionData } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

export async function Action({ request }) {
    const formData = await request.formData();
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    const errors = {};
    password.length < 8
        ? (errors.passwordLength = "Password must be at least 8 characters")
        : delete errors.passwordLength;
    password !== confirmPassword
        ? (errors.passwordMatch = "Passwords do not match")
        : delete errors.passwordMatch;
    console.log(errors);
    if (Object.keys(errors).length > 0) return errors;
    console.log("no errors");

    return {
        email,
        details: { username, password, confirmPassword },
        sucess: true,
    };
}

export default function SignUp() {
    const data = useActionData();
    console.table(data);
    function saveTolocalStorage(key, details) {
        localStorage.setItem(key, JSON.stringify(details));
    }
    data?.email ? saveTolocalStorage(data?.email, data?.details) : null;
    console.log(localStorage);
    return (
        <div
            className={`${styles["form-container"]} 
                    }`}
        >
            <Form method="post">
                <Input
                    type={"text"}
                    name={"username"}
                    placehoder={"Paul"}
                    labelName={"username"}
                />
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
                <Input
                    type={"password"}
                    name={"confirm-password"}
                    placehoder={"********"}
                    labelName={"Confirm Password"}
                />
                <p className={styles["error-msg"]}>
                    {data?.passwordLength
                        ? data?.passwordLength
                        : data?.passwordMatch}
                </p>

                <Button type={"submit"} label={"Sign Up"} />
            </Form>
        </div>
    );
}
