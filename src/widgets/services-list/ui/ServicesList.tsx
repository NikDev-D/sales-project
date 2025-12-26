import { ServiceCard } from "../../../entities/service/ui/ServiceCard";
import type {Service} from "../../../entities/service/model";
import styles from "./ServicesList.module.css";
type Props = {
    services: Service[];
    onAddService: (service: Service) => void;
};

export function ServicesList({ services, onAddService }: Props) {
    return (
        <div className={styles.list}>
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    onAdd={onAddService}
                />
            ))}
        </div>
    );
}
