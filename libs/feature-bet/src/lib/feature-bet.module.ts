import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBetRoutingModule } from './feature-bet-routing.module';
import { Button3Module } from '../../../shared-separate-ui/src/lib/button3/button3.module';
import { Button4Module } from '../../../shared-separate-ui/src/lib/button4/button4.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureBetRoutingModule,
    Button3Module,
    Button4Module,
  ],
})
export class FeatureBetModule {}
