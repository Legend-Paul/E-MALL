import styles from "./input.module.css";
export default function Input({
    type,
    name,
    value = "",
    placehoder,
    labelName,
    required = true,
    handleOnchange = () => null,
}) {
    return (
        <label className={styles["label"]}>
            {labelName && <h4>{labelName}</h4>}
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placehoder}
                min={1}
                minLength={type === "password" ? 8 : 0}
                required={required}
                onChange={handleOnchange}
            />
        </label>
    );
}
