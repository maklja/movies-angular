import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieDetailResponse } from '../entities/response/MovieDetailResponse';
import { MovieService } from '../services/movie.service';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<MovieDetailResponse> {
  constructor(private movieService: MovieService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MovieDetailResponse> {
    const movieId = parseInt(route.paramMap.get('id') ?? '');
    if (isNaN(movieId)) {
      // TODO 404
    }

    return this.movieService.retrieveMovieById(movieId);
  }
}
