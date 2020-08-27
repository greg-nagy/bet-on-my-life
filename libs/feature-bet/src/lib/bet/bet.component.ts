import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bet-on-my-life-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
