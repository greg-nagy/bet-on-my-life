import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button1Component } from './button1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Button1Component],
  exports: [Button1Component],
})
export class Button1Module {}
