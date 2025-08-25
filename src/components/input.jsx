import styles from "./input.module.css";
export default function Input({ type, name, placehoder, labelName }) {
    return (
        <label className={styles["label"]}>
            {labelName}{" "}
            <input type={type} name={name} placeholder={placehoder} />
        </label>
    );
}
