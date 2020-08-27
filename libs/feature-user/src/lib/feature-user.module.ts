import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureUserRoutingModule } from './feature-user-routing.module';
import { SharedUiModule } from '@bet-on-my-life/shared-ui';

@NgModule({
  imports: [CommonModule, FeatureUserRoutingModule, SharedUiModule],
})
export class FeatureUserModule {}
