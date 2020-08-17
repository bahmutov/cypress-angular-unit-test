import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { OnPushStratComponent } from './on-push-strat/on-push-strat.component';
import { NetworkComponent } from './network/network.component';
import { NetworkService } from './network.service';
import { HtmlMountComponent } from './html-mount/html-mount.component';
import { OutputSubscribeComponent } from './output-subscribe/output-subscribe.component';
import { ImageSnapshotComponent } from './image-snapshot/image-snapshot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { BootstrapButtonComponent } from './bootstrap-button/bootstrap-button.component';
import { AddStyleComponent } from './add-style/add-style.component';

@NgModule({
  declarations: [	
    AppComponent,
    OnPushStratComponent,
    NetworkComponent,
    HtmlMountComponent,
    OutputSubscribeComponent,
    ImageSnapshotComponent,
    MaterialButtonComponent,
    BootstrapButtonComponent,
      AddStyleComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [HeroService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
