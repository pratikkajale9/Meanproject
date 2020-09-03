import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { SineupComponent } from './sineup/sineup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    SineupComponent,
    LoginComponent,
    PagenotfoundComponent,
    AdminhomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
