import { Form, Link, NavLink } from "react-router-dom";
import styles from "./sign-in-sign-up.module.css";

import Button from "../../components/button";
import Input from "../../components/input";

export async function Action({ request }) {
    const formDat = await request.formData();
    console.log(formDat.get("email"));
    console.log(formDat.get("password"));
    return null;
}

export default function SignIn() {
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

                <Button type={"submit"} label={"Sign In"} />
            </Form>
        </div>
    );
}
