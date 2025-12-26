
export type ServiceType = "meal" | "baggage" | "seat";


export type Service = {
    id: string;
    title: string;
    price: number;
    type: ServiceType;

};
