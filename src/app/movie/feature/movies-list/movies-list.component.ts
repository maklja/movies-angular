import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, take } from 'rxjs';
import { MovieService } from '../../data-access/movie.service';
import { MovieResponse } from '../../data-access/MovieResponse';
import { Pageable } from '../../data-access/Pageable';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  searchValue: string = '';
  loading = true;
  movies: Pageable<MovieResponse> = {
    page: 1,
    results: [],
    totalPages: 1,
    totalResults: 0,
  };

  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(take(1))
      .subscribe((queryParamMap) => {
        this.searchValue = queryParamMap.get('query') ?? '';
        const page: number = parseInt(queryParamMap.get('page') ?? '');

        this.loadMovies(isNaN(page) || page < 1 ? 1 : page);
      });
  }

  setPage(page: number) {
    this.loadMovies(page);
  }

  onSearchChange(search: string) {
    this.searchValue = search;
    this.loadMovies();
  }

  onTileClicked(movie: MovieResponse) {
    this.router.navigate([movie.id], {
      relativeTo: this.activatedRoute,
    });
  }

  private updateQueryParameters(page = 1) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page,
        query: this.searchValue,
      },
    });
  }

  private loadMovies(page = 1) {
    this.updateQueryParameters(page);
    if (this.searchValue.length === 0) {
      return this.loadUpcomingMovies(page);
    }

    return this.searchMovies(page);
  }

  private loadUpcomingMovies(page = 1) {
    this.loading = true;
    this.movieService
      .retrieveUpcomingMovies(page)
      .pipe(delay(1_000))
      .subscribe((movies) => {
        this.movies = movies;
        this.loading = false;
      });
  }

  private searchMovies(page = 1) {
    this.loading = true;
    this.movieService
      .searchMovies(this.searchValue, page)
      .pipe(delay(1_000))
      .subscribe((movies) => {
        this.movies = movies;
        this.loading = false;
      });
  }
}
