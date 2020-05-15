import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/Services/app.communication.service';

@Component({
    selector: 'app-searchtext-component',
    templateUrl: './app.search.view.html'
})

export class SearchComponent implements OnInit {
    searchText : string;
    
    constructor(private commService:CommunicationService) { 
        this.searchText  = '';
    }

    ngOnInit() { }

    search():void{
        this.commService.onemitSearchValue(this.searchText);
    }
}