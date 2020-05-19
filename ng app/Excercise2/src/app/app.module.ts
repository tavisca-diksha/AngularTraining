import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './Components/Movies/app.movie.component';
import { MovieReactiveFormComponent } from './Components/MoviesReactive/app.moviereactiveform.component';
import { TableDirectiveComponent } from './Directives/table.component.directive';
import {HttpClientModule} from '@angular/common/http';
import { ProductReactiveFormComponent } from './Components/ProductsReactiveComponent/app.productreactiveform.component';
import { ColorDirective } from './Components/DirectiveComponents/app.testdirective.component';

@NgModule({
  declarations: [
    AppComponent, MovieComponent, MovieReactiveFormComponent, TableDirectiveComponent,
    ProductReactiveFormComponent, ColorDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [ProductReactiveFormComponent]
})
export class AppModule { }
