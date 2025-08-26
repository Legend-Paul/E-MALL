import indexStyles from "../index.module.css";
import styles from "./sign-in-sign-up.module.css";
import { Form, NavLink } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";

export default function SignUp() {
    return (
        <div className={`${indexStyles["page"]} ${styles["sign-in-page"]}`}>
            <div className={styles["sign-in"]}>
                <div
                    className={`${styles["description"]} 
                    }`}
                >
                    <h2>Welcome</h2>
                    <p>Create your account</p>
                    <p>
                        If you have an account{" "}
                        <NavLink to="/sign-in">Sign In</NavLink>
                        {/* <button onClick={() => setMoved((state) => !state)}>
                            sign
                        </button> */}
                    </p>

                    {/* clip-path: polygon(100% 0, 100% 100%, 49% 61%, 0 99%, 0 0); */}
                </div>
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

                        <Button type={"submit"} label={"Sign In"} />
                    </Form>
                </div>
            </div>
        </div>
    );
}
