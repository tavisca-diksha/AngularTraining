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

export class RegisterUser {
    constructor(
      public Email: string,
      public Password: string,
      public ConfirmPassword: string
    ) {}
  }
  
  export class LoginUser {
    constructor(public UserName: string, public Password: string) {}
  }
  
  export class Product {
    constructor(
      public productRowId: number,
      public productName: string,
      public price
    ) {}
  }
  
  export class ResponseData {
    constructor(public message: string) {}
  }