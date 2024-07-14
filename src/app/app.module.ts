import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from 'src/material.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SearchComponent } from './components/search/search/search.component';
import { DanceApiService } from './services/dance-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AutoCompleteModule,
    HttpClientModule
  ],
  providers: [DanceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
