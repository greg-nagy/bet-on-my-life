import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface NewUser {
  email: string;
  pictureUrl: string;
  firstName: string;
  lastName: string;
  password: string;
}

@Component({
  selector: 'bet-on-my-life-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent implements OnInit {
  submitted = false;
  registrationForm: FormGroup;

  @Output()
  registration = new EventEmitter<NewUser>();

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        pictureUrl: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        passwordConfirm: new FormControl('', Validators.required),
      },
      (form: FormGroup) => {
        const pwdCtrl = form.controls['password'];
        const pwdConfirmCtrl = form.controls['passwordConfirm'];

        if (pwdConfirmCtrl.value && pwdCtrl.value !== pwdConfirmCtrl.value) {
          pwdConfirmCtrl.setErrors({
            ...pwdConfirmCtrl.errors,
            passwordConfirm: true,
          });
        } else {
          if (pwdConfirmCtrl.hasError('passwordConfirm')) {
            if (Object.keys(pwdConfirmCtrl.errors).length === 1) {
              pwdConfirmCtrl.setErrors(null);
            } else {
              const { passwordConfirm, ...err } = pwdConfirmCtrl.errors;
              pwdConfirmCtrl.setErrors(err);
            }
          }
        }
        return form.errors;
      }
    );
  }

  formErrors() {
    return Object.entries(this.registrationForm.controls).map(([k, v]) => [
      k,
      v.errors,
    ]);
  }

  showError(controlKey: string) {
    if (!this.submitted) return false;

    return this.registrationForm.get(controlKey).invalid;
  }

  getError(controlKey: string) {
    if (!this.submitted) return false;

    return this.registrationForm.get(controlKey).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.status === 'VALID')
      this.registration.emit(this.registrationForm.value);
  }
}
