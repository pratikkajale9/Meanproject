import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SineupComponent } from './sineup/sineup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const routes: Routes =[ {path:"login",component:LoginComponent},{path:"sineup",component:SineupComponent},
{path:"",redirectTo:"/login" ,pathMatch:"full"},{path:"**",component:PagenotfoundComponent},
{path:"",component: AdminhomeComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
