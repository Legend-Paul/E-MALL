import styles from "./button.module.css";

export default function Button({
    label = "label",
    color = "primary",
    type = "button",
}) {
    return (
        <button type={type} className={styles[color]}>
            {label}
        </button>
    );
}
