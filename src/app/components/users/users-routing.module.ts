import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLandingComponent } from './components/users-landing/users-landing.component';


const routes: Routes = [{ path: '', component: UsersLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
