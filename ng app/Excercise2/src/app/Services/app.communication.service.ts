import { Injectable, EventEmitter } from '@angular/core';
import { Customer } from '../Models/app.models';

@Injectable({providedIn: 'root'})
export class CommunicationService {
    emitCustomerData:EventEmitter<Array<number>>;
    emitSearchValue:EventEmitter<string>;

    constructor() {
        this.emitCustomerData = new EventEmitter<Array<number>>();
        this.emitSearchValue = new EventEmitter<string>();
    }

    onemitCustomerData(customerNums:Array<number>){
        this.emitCustomerData.emit(customerNums);
    }
    onemitSearchValue(searchText:string){
        this.emitSearchValue.emit(searchText);
    }
}