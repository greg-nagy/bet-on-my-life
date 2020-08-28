import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureUserRoutingModule } from './feature-user-routing.module';
import { Button2Module } from '../../../shared-separate-ui/src/lib/button2/button2.module';
import { Button3Module } from '../../../shared-separate-ui/src/lib/button3/button3.module';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    FeatureUserRoutingModule,
    Button2Module,
    Button3Module,
    TreeModule,
    TreeTableModule,
    SidebarModule,
  ],
})
export class FeatureUserModule {}
