import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetailResponse } from './MovieDetailResponse';
import { MovieResponse } from './MovieResponse';
import { Pageable } from './Pageable';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  retrieveUpcomingMovies(page = 1) {
    return this.http.get<Pageable<MovieResponse>>('movie/upcoming', {
      params: { page },
    });
  }

  searchMovies(query: string, page = 1) {
    return this.http.get<Pageable<MovieResponse>>('search/movie', {
      params: { query, page },
    });
  }

  retrieveMovieById(id: number) {
    return this.http.get<MovieDetailResponse>(`movie/${id}`);
  }
}
