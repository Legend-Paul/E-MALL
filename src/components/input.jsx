import styles from "./input.module.css";
export default function Input({ type, name, placehoder, labelName }) {
    return (
        <label className={styles["label"]}>
            {labelName && <h4>{labelName}</h4>}
            <input type={type} name={name} placeholder={placehoder} min={1} />
        </label>
    );
}
