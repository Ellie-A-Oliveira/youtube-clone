import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoCardsComponent } from './components/video-cards/video-cards.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { NavbarSuggestedTopicsComponent } from './components/navbar-suggested-topics/navbar-suggested-topics.component';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { VideosService } from './services/videos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoCardsComponent,
    VideoCardComponent,
    NavbarSuggestedTopicsComponent,
    VideoPreviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [VideosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
