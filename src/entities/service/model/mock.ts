import type {Service} from "./types.ts";


export const servicesMock: Service[] = [
    {
        id: "meal",
        title: "Дополнительное питание",
        price: 1200,
        type: "meal",
    },
    {
        id: "baggage",
        title: "Дополнительный багаж",
        price: 2500,
        type: "baggage",
    },
    {
        id: "seat",
        title: "Выбор места",
        price: 900,
        type: "seat",
    },
];