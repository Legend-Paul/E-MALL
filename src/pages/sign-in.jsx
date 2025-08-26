import { Form, Link } from "react-router-dom";
import indexStyles from "../index.module.css";
import styles from "./sign-in.module.css";

import Button from "../components/button";
import Input from "../components/input";

export default function SignIn() {
    return (
        <div className={`${indexStyles["page"]} ${styles["sign-in-page"]}`}>
            <div className={styles["sign-in"]}>
                <div className={styles["description"]}>
                    <h2>Welcome</h2>
                    <p>Sign in to your account</p>
                    <p>
                        If you do not have an account <Link>Sign up</Link>
                    </p>

                    {/* clip-path: polygon(100% 0, 100% 100%, 49% 61%, 0 99%, 0 0); */}
                </div>
                <Form>
                    <Input
                        type={"email"}
                        name={"email"}
                        placehoder={"example@gmail.com"}
                        labelName={"Email"}
                    />
                    <Input
                        type={"password"}
                        name={"password"}
                        labelName={"Password"}
                    />

                    <Button type={"submit"} label={"Sign In"} />
                </Form>
            </div>
        </div>
    );
}
