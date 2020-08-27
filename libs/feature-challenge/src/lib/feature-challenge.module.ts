import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureChallengeRoutingModule } from './feature-challenge-routing.module';
import { SharedUiModule } from '@bet-on-my-life/shared-ui';

@NgModule({
  imports: [CommonModule, FeatureChallengeRoutingModule, SharedUiModule],
})
export class FeatureChallengeModule {}
