import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PopupComponent } from '../popup/popup.component';
import { CommonModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  exports: [
    AuthRoutingModule
  ],
})
export class AuthModule { }
