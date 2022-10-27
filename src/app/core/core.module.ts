import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RouterModule } from '@angular/router';
import {OverlayModule} from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth-Services/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginFormComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[AuthService],
  exports:[HeaderComponent]
})
export class CoreModule { }
