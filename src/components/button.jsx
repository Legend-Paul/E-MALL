import styles from "./button.module.css";

export default function Button({
    label = "label",
    color = "primary",
    type = "button",
    handleClick = () => null,
}) {
    return (
        <button type={type} className={styles[color]} onClick={handleClick}>
            {label}
        </button>
    );
}
