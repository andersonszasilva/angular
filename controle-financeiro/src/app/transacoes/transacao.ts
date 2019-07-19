export interface Transacao {
    movementDate: number;
    name: string;
    value: number;
    type: string;
    category: Category;
}

export interface Category {
    id: number;
    name: string;
}