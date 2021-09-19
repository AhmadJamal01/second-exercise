import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersLandingComponent } from './components/users-landing/users-landing.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './components/user-page/user-page.component';
import { DetailsBarComponent } from './components/details-bar/details-bar.component';


@NgModule({
  declarations: [
    UsersLandingComponent,
    AddUserComponent,
    UserPageComponent,
    DetailsBarComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
