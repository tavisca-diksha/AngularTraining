import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-table-directive',
    templateUrl: './table.directive.view.html'
})

export class TableDirectiveComponent implements OnInit{    
    private _DataSource :Array<any>;
    headers : Array<string>;
    @Output()
    onRowSelect : EventEmitter<any>;
    @Output()
    onRowDelete : EventEmitter<any>;

    constructor(){
        this._DataSource = new Array<any>();
        this.headers = new Array<string>();
        this.onRowSelect = new EventEmitter<any>();
        this.onRowDelete = new EventEmitter<any>();
    }

    @Input()
    set DataSource(val:Array<any>){
        if(val.length > 0)
        {
            this._DataSource = val;
            console.log(JSON.stringify(this._DataSource[0]));
            for(let h in this._DataSource[0])
            {
                this.headers.push(h);
            }
        }
    }
    get DataSource():Array<any>{
        return this._DataSource;
    }

    onRowSelectEvent(item: any) {
        this.onRowSelect.emit(item);
    }

    onRowDeleteEvent(item:any){
        this.onRowDelete.emit(item);
    }
    
    ngOnInit(): void { }

}