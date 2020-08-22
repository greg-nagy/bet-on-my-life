import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegistrationComponent } from './containers/registration/registration.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FeatureAuthRoutingModule } from './feature-auth-routing.module';

@NgModule({
  imports: [CommonModule, FeatureAuthRoutingModule],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginFormComponent,
    RegistrationFormComponent,
  ],
  exports: [LoginComponent, RegistrationComponent],
})
export class FeatureAuthModule {}
