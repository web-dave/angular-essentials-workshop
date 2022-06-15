import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent, TopNavComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
