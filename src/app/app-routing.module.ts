import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { GiphyComponent } from './giphy/giphy.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  {path: 'giphy', component:GiphyComponent},
  {path: 'trending', component:TrendingComponent},
  {path: 'artists', component:ArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
