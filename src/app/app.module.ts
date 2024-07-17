import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from 'src/material.module';
import { SearchComponent } from './components/search/search/search.component';
import { DanceApiService } from './services/dance-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectedDanceComponent } from './components/selected-dance/selected-dance/selected-dance.component';
import { PrimeNGModule } from './primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DanceFormComponent } from './components/dance-form/dance-form/dance-form.component';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SelectedDanceComponent,
    DanceFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    PrimeNGModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DanceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
