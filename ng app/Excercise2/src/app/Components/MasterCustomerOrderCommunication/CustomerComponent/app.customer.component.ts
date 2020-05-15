import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/app.models';
import { Customers } from 'src/app/Models/app.constants';
import { CommunicationService } from 'src/app/Services/app.communication.service';

@Component({
    selector: 'app-customer-component',
    templateUrl: './app.customer.view.html'
})

export class CustomerComponent implements OnInit {
    headers:Array<string>;
    customers = Customers;
    _filteredCustomers : Array<Customer>;
    searchText: string;
    customer:Customer;

    constructor(private commService : CommunicationService) { 
        this.headers = new Array<string>();        
        this._filteredCustomers = Object.assign({},Customers);
        this.searchText = '';
        customer : null;
    }

    ngOnInit() {        
        for(let field in this._filteredCustomers[0]){
            this.headers.push(field);
        }
        this.commService.emitSearchValue.subscribe((text:string)=>{
            this.searchText = text;
        })
    }

    getSelectedRow(cust : Customer):void{        
        let array = [cust.CustomerId];        
        this.commService.onemitCustomerData(array);        
    }

    get filteredCustomers():Array<Customer>{
        this._filteredCustomers = new Array<Customer>();
        
        if(this.searchText == ''){            
            this._filteredCustomers = this.customers;
            //this.commService.onemitCustomerData([]);
        }
        else{
            this._filteredCustomers = this.customers.filter((cust:Customer,index)=>{
                return (cust.City == this.searchText || cust.CustomerName== this.searchText)
            });
            
        }            
        return this._filteredCustomers;
    }
}