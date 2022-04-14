import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GifsService } from './gifs.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingComponent } from './trending/trending.component';
import { ArtistsComponent } from './artists/artists.component';
import { ClipsComponent } from './clips/clips.component';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    NavbarComponent,
    TrendingComponent,
    ArtistsComponent,
    ClipsComponent,
    StoriesComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule
  ],
  providers: [GifsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
