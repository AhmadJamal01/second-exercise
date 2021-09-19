import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UsersLandingComponent } from './components/users-landing/users-landing.component';


const routes: Routes = [
  { 
    path: '', 
    component: UsersLandingComponent 
  },
  {
    path: 'user/:userId',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
