import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { MovieService } from '../movie/data-access/movie.service';
import { MovieDetailResponse } from '../movie/data-access/MovieDetailResponse';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<MovieDetailResponse> {
  constructor(private movieService: MovieService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MovieDetailResponse> {
    const movieId = parseInt(route.paramMap.get('id') ?? '');
    if (isNaN(movieId)) {
      this.router.navigate(['not-found']);
      return EMPTY;
    }

    return this.movieService.retrieveMovieById(movieId).pipe(
      catchError(() => {
        this.router.navigate(['not-found']);
        return EMPTY;
      })
    );
  }
}
