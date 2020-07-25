import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { OnPushStratComponent } from './on-push-strat/on-push-strat.component';
import { NetworkComponent } from './network/network.component';
import { NetworkService } from './network.service';

@NgModule({
  declarations: [
    AppComponent,
    OnPushStratComponent,
    NetworkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [HeroService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
