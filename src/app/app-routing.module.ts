import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanceFormComponent } from './components/dance-form/dance-form/dance-form.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  // {
  //   path: 'new-dance', 
  //   component: DanceFormComponent, 
  //   data: { title: 'New Dance Form' }
  // },
  {
    path: '**', 
    component: HomeComponent  // This component should handle 404 Not Found scenarios
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
