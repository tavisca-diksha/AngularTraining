import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './Components/Movies/app.movie.component';
import { MovieReactiveFormComponent } from './Components/MoviesReactive/app.moviereactiveform.component';
import { TableDirectiveComponent } from './Directives/table.component.directive';
import { CustomerComponent } from './Components/MasterCustomerOrderCommunication/CustomerComponent/app.customer.component';
import { SearchComponent } from './Components/MasterCustomerOrderCommunication/SearchComponent/app.search.component';
import { OrderComponent } from './Components/MasterCustomerOrderCommunication/OrderComponent/app.order.component';

@NgModule({
  declarations: [
    AppComponent, MovieComponent, MovieReactiveFormComponent, TableDirectiveComponent,
    CustomerComponent, SearchComponent,OrderComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CustomerComponent,SearchComponent,OrderComponent]
})
export class AppModule { }
