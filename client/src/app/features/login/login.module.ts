import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
