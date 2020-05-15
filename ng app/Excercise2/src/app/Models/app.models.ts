export class Customer{
    constructor(
        public CustomerId:number, 
        public CustomerName:string, 
        public City:string, 
        public Email:string, 
        public ContactNumber:number){}
}

export class Order{
    constructor(
        public OrderId:number,
        public OrderName:string, 
        public Date:Date, 
        public CustomerId: number, 
        public OrderQuantity:number, 
        public Amount:number){}
}