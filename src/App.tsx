import { useState } from "react";
import {type Service, servicesMock} from "./entities/service/model";
import {ServicesList} from "./widgets/services-list/ui/ServicesList.tsx";
import {Summary} from "./widgets/summary/ui/Summary.tsx";

function App() {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);

    const handleAddService = (service: Service) => {
        setSelectedServices((prev) => [...prev, service]);
    };

    const handleRemoveService = (index: number) => {
        setSelectedServices((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    return (
        <main style={{ padding: 16 }}>
            <h1>Дополнительные услуги</h1>

            <ServicesList
                services={servicesMock}
                onAddService={handleAddService}
            />

            <Summary
                services={selectedServices}
                onRemoveService={handleRemoveService}
            />
        </main>
    );
}

export default App;
