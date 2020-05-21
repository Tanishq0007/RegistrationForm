import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './Home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { WorkshopComponent } from './workshop/workshop.component';


const routes: Routes = [
  {
    path: "", component: MainComponent, children: [
      { path: "", component: HomeComponent },
      { path: 'alumni', component: WorkshopComponent },
      { path: 'team', component: TeamComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }


