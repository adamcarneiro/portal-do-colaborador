import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';

const routes: Routes = [    // { path: 'home', component: MainComponent },
{ path: 'news', component: NewsPageComponent },
{ path: 'article', component: ArticlePageComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
// { path: '**', component: PageNotFoundComponent }];
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
