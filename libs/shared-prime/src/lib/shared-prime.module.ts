import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { SidebarModule } from 'primeng/sidebar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    ColorPickerModule,
    MultiSelectModule,
    PaginatorModule,
    TableModule,
    TreeModule,
    TreeTableModule,
    SidebarModule,
    ContextMenuModule,
    ToastModule,
    CarouselModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    ColorPickerModule,
    MultiSelectModule,
    PaginatorModule,
    TableModule,
    TreeModule,
    TreeTableModule,
    SidebarModule,
    ContextMenuModule,
    ToastModule,
    CarouselModule,
  ],
})
export class SharedPrimeModule {}
