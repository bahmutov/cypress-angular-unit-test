import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeroService } from './hero.service';
import { HtmlMountComponent } from './html-mount/html-mount.component';
import { NetworkService } from './network.service';
import { NetworkComponent } from './network/network.component';
import { OnPushStratComponent } from './on-push-strat/on-push-strat.component';
import { OutputSubscribeComponent } from './output-subscribe/output-subscribe.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { ImageSnapshotComponent } from './image-snapshot/image-snapshot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { BootstrapButtonComponent } from './bootstrap-button/bootstrap-button.component';
import { AddStyleComponent } from './add-style/add-style.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [		
    AppComponent,
    OnPushStratComponent,
    NetworkComponent,
    HtmlMountComponent,
    OutputSubscribeComponent,
    HighlightDirective,
    CapitalizePipe
    ImageSnapshotComponent,
    MaterialButtonComponent,
    BootstrapButtonComponent,
      AddStyleComponent,
      InputComponent
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
