import styles from "./input.module.css";
export default function Textarea({
    name,
    placehoder,
    labelName,
    required = true,
}) {
    return (
        <label className={styles["label"]}>
            {labelName && <h4>{labelName}</h4>}

            <textarea
                name={name}
                cols={10}
                rows={5}
                placeholder={placehoder}
                required={required}
            ></textarea>
        </label>
    );
}
