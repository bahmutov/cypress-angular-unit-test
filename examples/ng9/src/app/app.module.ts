import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddStyleComponent } from './add-style/add-style.component';
import { AppComponent } from './app.component';
import { BootstrapButtonComponent } from './bootstrap-button/bootstrap-button.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeroService } from './hero.service';
import { HtmlMountComponent } from './html-mount/html-mount.component';
import { ImageSnapshotComponent } from './image-snapshot/image-snapshot.component';
import { InputComponent } from './input/input.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { NetworkService } from './network.service';
import { NetworkComponent } from './network/network.component';
import { OnPushStratComponent } from './on-push-strat/on-push-strat.component';
import { OutputSubscribeComponent } from './output-subscribe/output-subscribe.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { ServiceStubComponent } from './service-stub/service-stub.component';
import { UseCustomElementComponent } from './use-custom-element/use-custom-element.component';

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
    InputComponent,
    ServiceStubComponent,
    UseCustomElementComponent
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
