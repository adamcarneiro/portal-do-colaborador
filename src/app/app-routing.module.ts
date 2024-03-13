import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { ActivityInfoComponent } from './components/about-us-page/components/activity-info/activity-info.component';
import { GaleriaPageComponent } from './components/galeria-page/galeria-page.component';

const routes: Routes = [    // { path: 'home', component: MainComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'news', component: NewsPageComponent },
// { path: 'article', component: ArticlePageComponent },
{ path: 'article/:id', component: ArticlePageComponent },
{ path: 'about-us', component: AboutUsPageComponent },
{ path: 'activity-info', component: ActivityInfoComponent },
{ path: 'gallery', component: GaleriaPageComponent },
// { path: '**', component: PageNotFoundComponent }];
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
