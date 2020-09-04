import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

import { ViveyourpakageComponent } from './viveyourpakage/viveyourpakage.component';
const routes: Routes =[ {path:"login",component:LoginComponent},{path:"sineup",component:SineupComponent},
  { path: "", redirectTo: "/userlogin", pathMatch: "full" }, { path: "admin", component: AdminhomeComponent,children:[{path:"addpakage",
component:AddpakageComponent},{path:"viewpakage",component:ViewpakageComponent},{path:"removepakage",
      component: RemovepakageComponent
    }, { path: "updatepakage", component: UpdatepakageComponent }]
  }, { path: "userlogin", component: UserloginComponent }, { path: "userhome", component: UserhomeComponent,children:[

 {path:"selectpakage",component:SelectpakageComponent},{path:"viewallpakage",component:ViewpakageComponent},{path:"viewyourpakage",component:AboutusComponent} ] },
  {path:"**",component:PagenotfoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
