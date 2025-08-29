import styles from "./sign-in-sign-up.module.css";
import { Form, NavLink, useActionData, useNavigate } from "react-router-dom";
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

    const users = JSON.parse(localStorage.getItem("users"));
    const user = {
        email,
        details: { username, password, confirmPassword },
        isSignedIn: true,
    };

    let hasEmail = null;
    if (Array.isArray(users)) {
        hasEmail = users.some((user) => user.email === email);
    }

    hasEmail
        ? (errors.emailExist = "Email already exist")
        : delete errors.emailExist;

    if (Object.keys(errors).length > 0) return errors;

    return user;
}

export default function SignUp() {
    const navigate = useNavigate();
    const data = useActionData();

    function saveTolocalStorage(user) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        return navigate("/");
    }
    data?.email ? saveTolocalStorage(data) : null;

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
                    labelName={"Username"}
                />
                <Input
                    type={"email"}
                    name={"email"}
                    placehoder={"example@gmail.com"}
                    labelName={"Email"}
                />
                <p className={styles["error-msg"]}>{data?.emailExist}</p>

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
