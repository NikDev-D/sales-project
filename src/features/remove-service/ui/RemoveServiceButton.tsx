import styles  from "./RemoveServiceButton.module.css";


type Props = {
    onRemove: () => void;
};
export function RemoveServiceButton({ onRemove }: Props) {
    return (
        <button className={styles.deleteButton } onClick={onRemove} style={{ marginLeft: 8 }}>
            Удалить
        </button>
    );
}
