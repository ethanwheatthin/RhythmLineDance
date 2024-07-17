import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { EditorModule } from 'primeng/editor';

@NgModule({
  imports: [
    AutoCompleteModule,
    CardModule,
    ButtonModule,
    ScrollPanelModule,
    EditorModule
  ],
  exports: [
    AutoCompleteModule,
    CardModule,
    ButtonModule,
    ScrollPanelModule,
    EditorModule
  ]
})
export class PrimeNGModule { }
