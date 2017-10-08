import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BabyComponent } from './baby/baby.component';
import { FailComponent } from './fail/fail.component';
import { RestartComponent } from './restart/restart.component';
import { WaitForItComponent } from './wait-for-it/wait-for-it.component';

@NgModule({
  declarations: [
    AppComponent,
    BabyComponent,
    FailComponent,
    RestartComponent,
    WaitForItComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
