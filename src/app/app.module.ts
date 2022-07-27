import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent, TopNavComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
