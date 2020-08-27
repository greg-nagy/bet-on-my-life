import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button2Component } from './button2/button2.component';
import { Button3Component } from './button3/button3.component';
import { Button4Component } from './button4/button4.component';
import { Button1Component } from './button1/button1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Button1Component,
    Button2Component,
    Button3Component,
    Button4Component,
  ],
  exports: [
    Button1Component,
    Button2Component,
    Button3Component,
    Button4Component,
  ],
})
export class SharedUiModule {}
