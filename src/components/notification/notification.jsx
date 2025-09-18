import styles from "./notification.module.css";

export default function Notification({ title, type, state }) {
    return (
        <div
            className={`${styles["add-to-cart-confirmation"]} ${
                styles[type === "error" ? "error" : ""]
            } ${styles[state ? "display-confirmation" : ""]}`}
        >
            <i className="bi bi-check2"></i>
            <p>{title}</p>
        </div>
    );
}
