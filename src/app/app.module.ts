import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { HorizontalCardNewsComponent } from './components/horizontal-card-news/horizontal-card-news.component';
import { CategoryCardsComponent } from './components/category-cards/category-cards.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { VerticalArticleCardComponent } from './components/vertical-article-card/vertical-article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsPageComponent,
    HorizontalCardNewsComponent,
    CategoryCardsComponent,
    ArticlePageComponent,
    VerticalArticleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
