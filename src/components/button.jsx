import styles from "./button.module.css";

export default function Button({ label = "label", color = "primary" }) {
    return <button className={styles[color]}>{label}</button>;
}
