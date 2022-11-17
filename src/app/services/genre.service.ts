import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GenreResponse } from '../entities/response';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient) {}

  retrieveGenres() {
    return this.http
      .get<{ genres: GenreResponse[] }>('genre/movie/list')
      .pipe(map((response) => response.genres));
  }
}
