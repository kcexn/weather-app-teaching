import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { SunShowerComponent } from './weather-display/sun-shower/sun-shower.component';
import { SunnyComponent } from './weather-display/sunny/sunny.component';
import { RainyComponent } from './weather-display/rainy/rainy.component';
import { ThunderStormComponent } from './weather-display/thunder-storm/thunder-storm.component';
import { CloudyComponent } from './weather-display/cloudy/cloudy.component';
import { WeatherServiceService } from './services/weather-service.service';
// import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    SunShowerComponent,
    SunnyComponent,
    RainyComponent,
    ThunderStormComponent,
    CloudyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
