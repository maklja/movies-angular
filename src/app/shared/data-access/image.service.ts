import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private confService: ConfigurationService) {}

  createImagePosterUrl(imagePath: string | null, size: string) {
    const { configuration } = this.confService;

    if (!configuration || !imagePath) {
      return null;
    }

    const { secureBaseUrl, posterSizes } = configuration.images;
    const imageSize = posterSizes.includes(size) ? size : posterSizes.at(-1);
    return `${secureBaseUrl}${imageSize}${imagePath}`;
  }

  createImageBackdropUrl(imagePath: string | null, size: string) {
    const { configuration } = this.confService;

    if (!configuration || !imagePath) {
      return null;
    }

    const { secureBaseUrl, backdropSizes } = configuration.images;
    const imageSize = backdropSizes.includes(size)
      ? size
      : backdropSizes.at(-1);
    return `${secureBaseUrl}${imageSize}${imagePath}`;
  }

  retrieveNoImageUrl() {
    return 'assets/no_image.svg';
  }

  createImageUrl(params: {
    posterPath: string | null;
    posterSize: string;
    backdropPath: string | null;
    backdropSize: string;
  }) {
    const posterImagePath = this.createImagePosterUrl(
      params.posterPath,
      params.posterSize
    );
    if (posterImagePath) {
      return posterImagePath;
    }

    const backdropImagePath = this.createImageBackdropUrl(
      params.backdropPath,
      params.backdropSize
    );
    if (backdropImagePath) {
      return backdropImagePath;
    }

    return this.retrieveNoImageUrl();
  }
}
