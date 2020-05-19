import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './Components/Movies/app.movie.component';
import { MovieReactiveFormComponent } from './Components/MoviesReactive/app.moviereactiveform.component';
import { TableDirectiveComponent } from './Directives/table.component.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, MovieComponent, MovieReactiveFormComponent, TableDirectiveComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [MovieReactiveFormComponent]
})
export class AppModule { }
