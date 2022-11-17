import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenreResponse, MovieResponse } from '../entities/response';
import { GenreService } from '../services/genre.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-movie-tile[movie]',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css'],
})
export class MovieTileComponent implements OnInit {
  genresLoading: boolean = true;
  genres: GenreResponse[] = [];
  @Input() movie: MovieResponse | null = null;
  @Output() click = new EventEmitter<MovieResponse>();

  constructor(
    private genreService: GenreService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.loadGenres();
  }

  retrieveGenre(genreId: number) {
    return this.genres.find((genre) => genre.id === genreId);
  }

  createImageUrl(posterPath: string | null, backdropPath: string | null) {
    return this.imageService.createImageUrl({
      posterPath,
      backdropPath,
      posterSize: 'w500',
      backdropSize: 'w300',
    });
  }

  onClick() {
    if (!this.movie) {
      return;
    }

    this.click.emit(this.movie);
  }

  private loadGenres() {
    this.genresLoading = true;
    this.genreService.retrieveGenres().subscribe((genres) => {
      this.genres = genres;
      this.genresLoading = false;
    });
  }
}
