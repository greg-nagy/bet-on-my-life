import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NewUser } from '../../components/registration-form/registration-form.component';

@Component({
  selector: 'bet-on-my-life-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onRegistration(user: NewUser) {
    console.log('onreg', user);
  }
}
