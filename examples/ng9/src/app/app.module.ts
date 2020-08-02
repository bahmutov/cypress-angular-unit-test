import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/capitalize/highlight.directive';
import { HeroService } from './hero.service';
import { HtmlMountComponent } from './html-mount/html-mount.component';
import { NetworkService } from './network.service';
import { NetworkComponent } from './network/network.component';
import { OnPushStratComponent } from './on-push-strat/on-push-strat.component';
import { OutputSubscribeComponent } from './output-subscribe/output-subscribe.component';


@NgModule({
  declarations: [
    AppComponent,
    OnPushStratComponent,
    NetworkComponent,
    HtmlMountComponent,
    OutputSubscribeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [HeroService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
