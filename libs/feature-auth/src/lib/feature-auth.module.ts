import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegistrationComponent } from './containers/registration/registration.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Button1Module } from '../../../shared-separate-ui/src/lib/button1/button1.module';
import { Button2Module } from '../../../shared-separate-ui/src/lib/button2/button2.module';
import { SharedPrimeModule } from '@bet-on-my-life/shared-prime';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    Button1Module,
    Button2Module,
    SharedPrimeModule,
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginFormComponent,
    RegistrationFormComponent,
  ],
  exports: [LoginComponent, RegistrationComponent],
})
export class FeatureAuthModule {}
