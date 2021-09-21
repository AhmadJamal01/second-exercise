import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorBarDirective } from 'src/app/directives/color-bar.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorBarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports:[
    ColorBarDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
