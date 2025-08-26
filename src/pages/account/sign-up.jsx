import styles from "./sign-in-sign-up.module.css";
import { Form, NavLink } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

export default function SignUp() {
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
                    name={"password"}
                    placehoder={"********"}
                    labelName={"Password"}
                />

                <Button type={"submit"} label={"Sign Up"} />
            </Form>
        </div>
    );
}
