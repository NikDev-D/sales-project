import type {Service} from "../../../entities/service/model";
import {RemoveServiceButton} from "../../../features/remove-service/ui/RemoveServiceButton.tsx";
import styles from './Summary.module.css'
type Props = {
    services: Service[];
    onRemoveService: (index: number) => void;
};

export function Summary({ services, onRemoveService }: Props) {
    const total = services.reduce((sum, service) => sum + service.price, 0);

    return (
        <section
            className={styles.root}
        >
            <h2  className={styles.title}>Итого</h2>

            {services.length === 0 ? (
                <div>Услуги не выбраны</div>
            ) : (
                <ul className={styles.list}>
                    {services.map((service, index) => (
                        <li className={styles.item} key={`${service.id}-${index}`}>
                            <span>{service.title}  </span><span className={styles.cost}>{service.price} ₽</span>
                            <RemoveServiceButton
                                onRemove={() => onRemoveService(index)}
                            />
                        </li>
                    ))}
                </ul>
            )}

            <div className={styles.total}>
                Общая сумма: {total} ₽
            </div>

            <div >
                <button className={styles.actions} disabled={services.length === 0}>Оформить заказ</button>
            </div>
        </section>
    );
}