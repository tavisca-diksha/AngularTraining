import { Customer, Order } from './app.models';

export const Movies = [
    {Id:101, Name:"VENOM", ReleaseYear:2018, Category:"ENGLISH"},
    {Id:102, Name:"BALA", ReleaseYear:2019, Category:"HINDI"},
    {Id:103, Name:"URI", ReleaseYear:2019, Category:"HINDI"},
    {Id:104, Name:"BRAVE", ReleaseYear:2012, Category:"ENGLISH"},
    {Id:105, Name:"LAGAAN", ReleaseYear:2001, Category:"HINDI"},
    {Id:106, Name:"SAIRAT", ReleaseYear:2016, Category:"MARATHI"}
];

export const Customers = new Array<Customer>();
Customers.push(new Customer(1, "Ryan", "San fransisco", "xyz@gmail.com", 1234567890 ));
Customers.push(new Customer(2, "Brian", "Las vegas", "xyz@gmail.com", 1234567890 ));
Customers.push(new Customer(3, "Monica", "Washington DC", "xyz@gmail.com", 1234567890 ));
Customers.push(new Customer(4, "Chris", "Los angeles", "xyz@gmail.com", 1234567890 ));
Customers.push(new Customer(5, "Brad", "Las vegas", "xyz@gmail.com", 1234567890 ));
Customers.push(new Customer(6, "David", "Los angeles", "xyz@gmail.com", 1234567890 ));
Customers.push(new Customer(7, "Christine", "San fransisco", "xyz@gmail.com", 1234567890 ));
Customers.push(new Customer(8, "Rachel", "Washington DC", "xyz@gmail.com", 1234567890 ));

export const Orders = new Array<Order>();
Orders.push(new Order(11, "Order1 from Ryan", new Date("2020-01-02"), 1, 8, 2000 ));
Orders.push(new Order(12, "Order1 from Brian", new Date("2020-01-02"), 2, 7, 1078 ));
Orders.push(new Order(13, "Order1 from Monica", new Date("2020-01-02"), 3, 6, 2412 ));
Orders.push(new Order(14, "Order1 from Chris", new Date("2020-01-02"), 4, 5, 3034 ));
Orders.push(new Order(15, "Order1 from Brad", new Date("2020-01-02"), 5, 4, 6012 ));
Orders.push(new Order(16, "Order1 from David", new Date("2020-01-02"), 6, 3, 1012 ));
Orders.push(new Order(17, "Order1 from Christine", new Date("2020-01-02"), 7, 2, 2089 ));
Orders.push(new Order(18, "Order1 from Rachel", new Date("2020-01-02"), 8, 1, 2043 ));
Orders.push(new Order(21, "Order2 from Ryan", new Date("2018-01-02"), 1, 1, 455 ));
Orders.push(new Order(22, "Order2 from Brian", new Date("2018-01-02"), 2, 2, 178 ));
Orders.push(new Order(23, "Order2 from Monica", new Date("2018-01-02"), 3, 3, 412 ));
Orders.push(new Order(24, "Order2 from Chris", new Date("2018-01-02"), 4, 4, 334 ));
Orders.push(new Order(25, "Order2 from Brad", new Date("2018-01-02"), 5, 5, 602 ));
Orders.push(new Order(26, "Order2 from David", new Date("2018-01-02"), 6, 6, 101 ));
Orders.push(new Order(27, "Order2 from Christine", new Date("2018-01-02"), 7, 7, 289 ));
Orders.push(new Order(28, "Order2 from Rachel", new Date("2018-01-02"), 8, 8, 243 ));

export const Categories = ["ENGLISH", "HINDI", "MARATHI"];