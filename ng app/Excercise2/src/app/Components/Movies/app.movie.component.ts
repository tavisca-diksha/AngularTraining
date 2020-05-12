import { Movie } from 'src/app/Models/app.movie';
import { Logic } from 'src/app/Models/app.logic';
import { Categories } from 'src/app/Models/app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-movies-component',
    templateUrl: './movie.view.html'
})

export class MovieComponent implements OnInit {
    movie: Movie;
    movies: Array<Movie>;
    private logic: Logic;
    categories = Categories;
    headers: Array<string>;
    searchText : string;
    selectedMovie: Movie;
    isExistingMovie : boolean;
    constructor() {
        this.movie = new Movie(0, '', 0, '');
        this.movies = new Array<Movie>();
        this.logic = new Logic();
        this.headers  =new Array<string>();
        this.searchText = "";
        this.selectedMovie = null;
        this.isExistingMovie = false;
    }

    ngOnInit() : void{
        this.movies = this.logic.GetMovies();
        for(let field in this.movie){
            this.headers.push(field);
        }
    }

    clear() : void{
        this.movie =  new Movie(0, '', 0, '');
        this.isExistingMovie = false;
        this.selectedMovie = null;
    }

    save(): void{
        if(this.isExistingMovie){
            this.movies = this.logic.UpdateMovie(this.selectedMovie, this.movie);           
        }
        else{
            this.movies = this.logic.SaveMovie(this.movie);
        }
    }

    getSelectedMovie(movie:Movie): void{
        this.movie = Object.assign({}, movie);
        this.isExistingMovie = true;
        this.selectedMovie = movie;
    }

    delete(movie:Movie): void{
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