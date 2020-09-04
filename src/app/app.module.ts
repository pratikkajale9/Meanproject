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
import { AddpakageComponent } from './addpakage/addpakage.component';
import { ViewpakageComponent } from './viewpakage/viewpakage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RemovepakageComponent } from './removepakage/removepakage.component';
import { UpdatepakageComponent } from './updatepakage/updatepakage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SelectpakageComponent } from './selectpakage/selectpakage.component';
import { VivepakageComponent } from './vivepakage/vivepakage.component';
import { ViveyourpakageComponent } from './viveyourpakage/viveyourpakage.component';


@NgModule({
  declarations: [
    AppComponent,
    SineupComponent,
    LoginComponent,
    PagenotfoundComponent,
    AdminhomeComponent,
    AddpakageComponent,
    ViewpakageComponent,
    AboutusComponent,
    RemovepakageComponent,
    UpdatepakageComponent,
    UserloginComponent,
    UserhomeComponent,
    SelectpakageComponent,
    VivepakageComponent,
    ViveyourpakageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
