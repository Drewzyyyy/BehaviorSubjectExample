import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { ArrangeComponent } from './arrange/arrange.component';

const routes: Routes = [
  {path: '', component: DisplayDataComponent},
  {path: 'remove', component: HomeComponent},
  {path: 'arrange', component: ArrangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
