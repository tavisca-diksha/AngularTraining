import { Component, OnInit } from '@angular/core';
import { Order, Customer } from 'src/app/Models/app.models';
import { Orders } from 'src/app/Models/app.constants';
import { CommunicationService } from 'src/app/Services/app.communication.service';

@Component({
    selector: 'app-order-component',
    templateUrl: './app.order.view.html'
})

export class OrderComponent implements OnInit {
    headers:Array<string>;
    orders : Array<Order>;
    _filteredOrders : Array<Order>;
    customerNums: Array<number>;
    searchText : string;

    constructor(private commService:CommunicationService) { 
        this.headers = new Array<string>();
        this.orders = Orders;
        this.customerNums = new Array<number>();
        this._filteredOrders = this.orders;
        this.searchText = '';
    }

    ngOnInit() { 
        for(let field in this._filteredOrders[0]){
            this.headers.push(field);
        }
        this.commService.emitSearchValue.subscribe((text:string)=>{
            this.searchText = text;
        })        
        this.commService.emitCustomerData.subscribe((customerData:Array<number>)=>{
            this.customerNums = customerData;
        })
    }

    get filteredOrders(): Array<Order>{
        if(this.customerNums.length == 0){
            this._filteredOrders = this.orders;
        }
        else
        {
            this._filteredOrders = this.orders.filter((order:Order,index)=>{
                return (this.customerNums.find((id:number, i:number)=> id == order.CustomerId))
            });
        }        
        return this._filteredOrders;
    }
}