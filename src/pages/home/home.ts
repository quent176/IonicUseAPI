import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieServiceProvider } from "../../providers/movie-service/movie-service";
import { MovieInfoPage } from "../movie-info/movie-info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Array<any>;
  results: any[];

  constructor(public navCtrl: NavController, private movieServiceProvider: MovieServiceProvider) {

  }

  searchMovieDB(event, key) {
    if (event.target.value.length > 2) {
      this.movieServiceProvider.searchMovies(event.target.value).subscribe(
        data => {
          this.movies = data['results'];
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log("Movie Search Complete")
      );
    }
  }

  itemTapped(event, movie){
    console.log(movie);
    this.navCtrl.push(MovieInfoPage, {
      movie: movie
    });
  }

}
