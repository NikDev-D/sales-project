type Props = {
    onAdd: () => void;
};
import styles from "./AddServiceButton.module.css";

export function AddServiceButton({ onAdd }: Props) {
    return (
        <button
            type="button"
            className={styles.button}
            onClick={onAdd}
        >
            Добавить
        </button>
    );
}
