import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { FooterWidgetComponent } from './footer-widget/footer-widget.component';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { InfoWidgetComponent } from './info-widget/info-widget.component';
import { TrackByPipe } from './pipes/track-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    FooterWidgetComponent,
    MainWidgetComponent,
    InfoWidgetComponent,
    TrackByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
