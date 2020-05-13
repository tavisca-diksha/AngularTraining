import { Movie } from 'src/app/Models/app.movie';
import { Logic } from 'src/app/Models/app.logic';
import { Categories } from 'src/app/Models/app.constants';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

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
    constructor() {
        this.movie = new Movie(0, '', 0, '');
        this.movies = new Array<Movie>();
        this.logic = new Logic();
        this.headers  =new Array<string>();
        this.searchText = "";
        this.selectedMovie = null;
        this.isExistingMovie = false;
        this.frmMovie = new FormGroup({
           Id : new FormControl(this.movie.Id),
           Name : new FormControl(this.movie.Name) ,
           ReleaseYear : new FormControl(this.movie.ReleaseYear) ,
           Category : new FormControl(this.movie.Category) 
        });
    }  

    setCategory(cat : string) :void{
        this.frmMovie.controls["Category"].setValue(cat);
    }

    ngOnInit() : void{
        this.movies = this.logic.GetMovies();
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
            this.movies = this.logic.UpdateMovie(this.selectedMovie, this.frmMovie.value);           
        }
        else{
            this.movies = this.logic.SaveMovie(this.frmMovie.value);
        }
    }

    getSelectedMovie(movie:Movie): void{
        this.frmMovie.setValue(movie);        
        this.isExistingMovie = true;
        this.selectedMovie = movie;
    }

    deleteRow(movie:Movie): void{
        this.movies = this.logic.DeleteMovie(movie);
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