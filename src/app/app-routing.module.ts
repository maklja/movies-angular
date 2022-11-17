import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie/feature/movie-details/movie-details.component';
import { MoviesListComponent } from './movie/feature/movies-list/movies-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieResolver } from './resolvers/MovieResolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    children: [
      { path: '', component: MoviesListComponent },
      {
        path: ':id',
        component: MovieDetailsComponent,
        resolve: { movie: MovieResolver },
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
