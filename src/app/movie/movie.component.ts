import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Movie } from '../model/movie';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];
params:Params;
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

ngOnInit(): void {
      this.route.params
        .switchMap((params) => this.movieService.getMovies(params['movieName']))
        .subscribe(movies => this.movies = movies);

    }

}
