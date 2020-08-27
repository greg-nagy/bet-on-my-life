import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBetRoutingModule } from './feature-bet-routing.module';
import { SharedUiModule } from '@bet-on-my-life/shared-ui';

@NgModule({
  imports: [CommonModule, FeatureBetRoutingModule, SharedUiModule],
})
export class FeatureBetModule {}
