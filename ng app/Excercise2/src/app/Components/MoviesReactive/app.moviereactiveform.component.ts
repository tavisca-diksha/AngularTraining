import { Movie } from 'src/app/Models/app.movie';
import { Logic } from 'src/app/Models/app.logic';
import { Categories } from 'src/app/Models/app.constants';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { CustomValidator } from './app.custom.validator';
import { HttpService } from 'src/app/Services/app.http.service';

@Component({
    selector: 'app-moviesreactive-component',
    templateUrl: './moviereactiveform.view.html'
})

export class MovieReactiveFormComponent implements OnInit {
    movie: Movie;
    movies: Array<Movie>;
    private logic: Logic;
    categories = Categories;
    headers: Array<string>;
    searchText : string;
    selectedMovie: Movie;
    isExistingMovie : boolean;
    frmMovie : FormGroup;
    constructor(private serv: HttpService) {
        this.movie = new Movie(0, '', 0, '');
        this.movies = new Array<Movie>();
        this.logic = new Logic();
        this.headers  =new Array<string>();
        this.searchText = "";
        this.selectedMovie = null;
        this.isExistingMovie = false;
        this.frmMovie = new FormGroup({
           Id : new FormControl(this.movie.Id, Validators.compose([
               CustomValidator.isNotUnique
           ])),
           Name : new FormControl(this.movie.Name, Validators.compose([
               CustomValidator.isWithSpecialChars, CustomValidator.isNotFirstCharCapital
           ])) ,
           ReleaseYear : new FormControl(this.movie.ReleaseYear) ,
           Category : new FormControl(this.movie.Category) 
        });
    }  

    getClasses(value:boolean): any{
        return {            
            'border-danger': value,
        };
    }

    setCategory(cat : string) :void{
        this.frmMovie.controls["Category"].setValue(cat);
    }

    ngOnInit() : void{
        this.serv.get().subscribe((data)=>{
            this.movies = data
        },(error)=> {console.log(JSON.stringify(error))});
        for(let field in this.movie){
            this.headers.push(field);
        }
    }

    clear() : void{
        this.frmMovie.setValue(new Movie(0, '', 0, ''));
        this.isExistingMovie = false;
        this.selectedMovie = null;
    }

    save(): void{
        if(this.isExistingMovie){
            this.serv.put(this.frmMovie.value.Id, this.frmMovie.value).subscribe((data)=>{
                this.movies = data
            });
            //this.movies = this.logic.UpdateMovie(this.selectedMovie, this.frmMovie.value);           
        }
        else{
            this.serv.post(this.frmMovie.value).subscribe((data)=>{
                this.movies = data
            });
            //this.movies = this.logic.SaveMovie(this.frmMovie.value);
        }
    }

    getSelectedMovie(movie:Movie): void{
        this.frmMovie.setValue(movie);        
        this.isExistingMovie = true;
        this.selectedMovie = movie;
    }

    deleteRow(movie:Movie): void{
        this.serv.delete(this.frmMovie.value.Id).subscribe((data)=>{
            this.movies = data
        });
        console.log(JSON.stringify(this.movies));
    }

    sort():void{
        this.movies = this.logic.Sort();       
    }

    reverseSort():void{
        this.movies = this.logic.ReverseSort();
    }

    searchMovie():void{
        if(this.searchText.trim() != ""){
            this.movies = this.logic.SearchMovies(this.searchText);
        }            
    }
}