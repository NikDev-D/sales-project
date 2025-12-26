import { AddServiceButton } from "../../../features/add-service/ui/AddServiceButton";
import type {Service} from "../model";
import styles from "./ServiceCard.module.css";

type Props = {
    service: Service;
    onAdd: (service: Service) => void;
};

export function ServiceCard({ service, onAdd }: Props) {
    return (
        <div className={`${styles.card} ${styles[service.type]}`}>
            <div className={styles.title}>{service.title}</div>
            <div className={styles.price}>{service.price} ₽</div>
            <div className={styles.actions}>
                <AddServiceButton onAdd={() => onAdd(service)} />
            </div>
        </div>
    );
}
