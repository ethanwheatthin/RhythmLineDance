import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  imports: [
    AutoCompleteModule,
    CardModule,
    ButtonModule,
    ScrollPanelModule
  ],
  exports: [
    AutoCompleteModule,
    CardModule,
    ButtonModule,
    ScrollPanelModule
  ]
})
export class PrimeNGModule { }
