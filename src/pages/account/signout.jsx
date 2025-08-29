import { useNavigate } from "react-router-dom";
import styles from "./account.module.css";
import toggleSignInUser from "../../utils/toggleSignIn";

export default function LogOut() {
    const navigate = useNavigate();
    const users = JSON.parse(localStorage.getItem("users"));
    let signedUser = null;
    if (users) signedUser = users.find((user) => user.isSignedIn);

    function handleSignoutClick() {
        toggleSignInUser(users, signedUser);
        navigate("/account/sign-in");
    }

    return (
        <div className={styles["sign-out"]}>
            <h2>Hello, {signedUser ? signedUser.details.username : ""}</h2>
            <p>You have already signed in to your account</p>
            <Button label="Sign Out" handleClick={handleSignoutClick} />
        </div>
    );
}
