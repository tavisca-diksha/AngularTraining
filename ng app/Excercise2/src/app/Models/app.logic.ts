import { Movie } from './app.movie';
import { Movies } from './app.constants';

export class Logic{
    private Movies : Array<Movie>;
    private IntialMovieList = Movies;
    constructor(){
        this.Movies = new Array<Movie>();
        this.IntialMovieList.forEach(movie =>
            this.Movies.push(
                new Movie(movie.Id, movie.Name, movie.ReleaseYear, movie.Category))
                );
    }

    GetMovies() : Array<Movie>{
        return this.Movies;
    }

    SaveMovie(movie:Movie):Array<Movie>{
        this.Movies.push(movie);
        return this.Movies;
    }

    UpdateMovie(existingMovie:Movie, updatedMovie:Movie):Array<Movie>{
        for(let index=0;index<this.Movies.length;index++){
            if(this.Movies[index].Id == existingMovie.Id
                && this.Movies[index].Name == existingMovie.Name
                && this.Movies[index].ReleaseYear == existingMovie.ReleaseYear
                && this.Movies[index].Category == existingMovie.Category){
                    this.Movies[index].Id = updatedMovie.Id;
                    this.Movies[index].Name = updatedMovie.Name;
                    this.Movies[index].ReleaseYear = updatedMovie.ReleaseYear;
                    this.Movies[index].Category = updatedMovie.Category;
                    return this.Movies;
                }
        }
    }

    DeleteMovie(movie:Movie): Array<Movie>{
        for(let index=0;index<this.Movies.length;index++){
            if(this.Movies[index].Id == movie.Id
                && this.Movies[index].Name == movie.Name
                && this.Movies[index].ReleaseYear == movie.ReleaseYear
                && this.Movies[index].Category == movie.Category){
                    this.Movies.splice(index,1);                    
                    return this.Movies;
                }
        }
        return this.Movies;
    }

    Sort():Array<Movie>{
        return this.Movies.sort((movie1: Movie, movie2:Movie)=>{
            return movie1.Name < movie2.Name ? -1 : 1
        });
    }

    ReverseSort():Array<Movie>{
        return this.Movies.sort((movie1: Movie, movie2:Movie)=>{
            return movie1.Name > movie2.Name ? -1 : 1
        });
    }

    SearchMovies(searchText:string):Array<Movie>{
        return this.Movies.filter((movie:Movie, index:number)=>movie.Name.toLowerCase() == searchText.toLowerCase()
        || movie.Category.toLowerCase() == searchText.toLowerCase())
    }
}