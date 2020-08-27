import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bet-on-my-life-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
