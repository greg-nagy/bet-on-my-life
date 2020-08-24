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
        const confirmError = { passwordConfirm: true };

        if (pwdCtrl.value !== pwdConfirmCtrl.value) {
          pwdConfirmCtrl.setErrors(confirmError);
          return {
            ...form.errors,
            ...confirmError,
          };
        } else {
          pwdConfirmCtrl.setErrors(null);

          if (form.errors?.passwordConfirm) delete form.errors.passwordConfirm;

          return form.errors;
        }
      }
    );
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
