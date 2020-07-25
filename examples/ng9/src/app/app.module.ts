import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { OnPushStratComponent } from './on-push-strat/on-push-strat.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushStratComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
