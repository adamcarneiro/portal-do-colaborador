import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { HorizontalCardNewsComponent } from './components/news-page/components/horizontal-card-news/horizontal-card-news.component';
import { CategoryCardsComponent } from './components/news-page/components/category-cards/category-cards.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { VerticalArticleCardComponent } from './components/vertical-article-card/vertical-article-card.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { ActivityCardComponent } from './components/about-us-page/components/activity-card/activity-card.component';
import { ColaboratorCardComponent } from './components/colaborator-card/colaborator-card.component';
import { ActivityInfoComponent } from './components/about-us-page/components/activity-info/activity-info.component';
import { GaleriaPageComponent } from './components/galeria-page/galeria-page.component';
import { ActivitiesPageComponent } from './components/activities-page/activities-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsPageComponent,
    HorizontalCardNewsComponent,
    CategoryCardsComponent,
    ArticlePageComponent,
    VerticalArticleCardComponent,
    AboutUsPageComponent,
    ActivityCardComponent,
    ColaboratorCardComponent,
    ActivityInfoComponent,
    GaleriaPageComponent,
    ActivitiesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
