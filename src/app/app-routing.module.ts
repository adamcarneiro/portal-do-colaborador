import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './components/news-page/news-page.component';

const routes: Routes = [    // { path: 'home', component: MainComponent },
{ path: 'news', component: NewsPageComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
// { path: '**', component: PageNotFoundComponent }];
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
