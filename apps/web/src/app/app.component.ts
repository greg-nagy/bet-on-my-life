import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@bet-on-my-life/api-interfaces';

@Component({
  selector: 'bet-on-my-life-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
