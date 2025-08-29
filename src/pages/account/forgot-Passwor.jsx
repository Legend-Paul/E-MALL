import { Form } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button";
import styles from "./sign-in-sign-up.module.css";

export function Action() {}

export default function ForgotPassword() {
    return (
        <div className={styles["form-container"]}>
            <Form>
                <Input
                    labelName={"Email"}
                    type={"email"}
                    placehoder={"example@gmail.com"}
                />
                <Input
                    labelName={"Password"}
                    type={"password"}
                    placehoder={"********"}
                />
                <Input
                    labelName={"Password"}
                    type={"password"}
                    placehoder={"********"}
                />
                <Button type="submit" label="Change Password" />
            </Form>
        </div>
    );
}
