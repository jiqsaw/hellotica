import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { GoogleAnalyticsEventsService } from './google-analytics-events-service';
import { YaseminModule } from './yasemin/yasemin.module';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    YaseminModule,
    AppRoutingModule
  ],
  providers: [GoogleAnalyticsEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
