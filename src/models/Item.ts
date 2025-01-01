export class Item {
    name: string;
    unitPrice: number;
    qty: number;
    totalPrice: number;

    constructor(name: string,unitPrice: number,qty: number, totalPrice: number) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.qty = qty;
        this.totalPrice = totalPrice;
    }

}