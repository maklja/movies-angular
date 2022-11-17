import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailResponse } from '../entities/response/MovieDetailResponse';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetailResponse | null = null;

  constructor(
    private activeRoute: ActivatedRoute,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe((data) => {
      this.movie = data['movie'];
    });
  }

  createImageUrl(posterPath: string | null) {
    return this.imageService.createImageUrl({
      posterPath,
      backdropPath: null,
      posterSize: 'w500',
      backdropSize: 'w300',
    });
  }
}
