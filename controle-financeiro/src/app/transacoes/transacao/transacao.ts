export interface Transacao {
    movementDate: Date;
    name: string;
    value: number;
    type: string;
    category: Category;
    
}

export interface Category {
    id: number;
    name: string;
}