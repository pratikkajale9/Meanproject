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
const routes: Routes =[ {path:"login",component:LoginComponent},{path:"sineup",component:SineupComponent},
  { path: "", redirectTo: "/login", pathMatch: "full" }, { path: "admin", component: AdminhomeComponent,children:[{path:"addpakage",
component:AddpakageComponent},{path:"viewpakage",component:ViewpakageComponent},{path:"abboutus",component:AboutusComponent},{path:"removepakage",
      component: RemovepakageComponent
    }, { path: "updatepakage", component: UpdatepakageComponent}] },
  {path:"**",component:PagenotfoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
