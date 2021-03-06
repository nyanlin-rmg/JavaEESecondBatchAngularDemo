import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {MovieService} from "../../../services/movie.service";
import {Movie} from "../../../models/movie.model";

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit {

  $moviesData ;
  $movieSubscriber;
  constructor(private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    this.$moviesData = this.movieService.movies$;
    this.$movieSubscriber = this.$moviesData.subscribe( data=>{
      console.log('New movie data ',data);
    });
  }
  ngDestroy()
  {
    console.log('List page destroy');
    this.$movieSubscriber.unsubscribe();
  }

}
