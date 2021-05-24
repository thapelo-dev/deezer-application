import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'artist/:id',
    component: DetailedViewComponent,
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
