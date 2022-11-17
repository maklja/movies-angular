import { GenreResponse } from './GenreResponse';

export interface MovieDetailResponse {
  id: number;
  title: string;
  overview: string | null;
  posterPath: string | null;
  releaseDate: string;
  genres: GenreResponse[];
}
