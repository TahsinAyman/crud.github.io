import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from '../guard/auth.guard';
import { NotAuthGuard } from '../guard/notauth.guard';

const routes: Routes = [
  {
    path: 'register',
    canActivate: [NotAuthGuard],
    component: RegisterComponent
  },
  {
    path: 'login',
    canActivate: [NotAuthGuard],
    component: LoginComponent
  },
  {
    path: 'logout',
    canActivate: [AuthGuard],
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
