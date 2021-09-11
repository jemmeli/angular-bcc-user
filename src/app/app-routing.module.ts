import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  //{path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"dash", component:DashComponent, children:[
    {path:"user", component:UserComponent},
    {path:"about", component:AboutComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
