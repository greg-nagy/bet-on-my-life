import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureUserRoutingModule } from './feature-user-routing.module';
import { Button2Module } from '../../../shared-separate-ui/src/lib/button2/button2.module';
import { Button3Module } from '../../../shared-separate-ui/src/lib/button3/button3.module';
import { SharedPrimeModule } from '@bet-on-my-life/shared-prime';

@NgModule({
  imports: [
    CommonModule,
    FeatureUserRoutingModule,
    Button2Module,
    Button3Module,
    SharedPrimeModule,
  ],
})
export class FeatureUserModule {}
